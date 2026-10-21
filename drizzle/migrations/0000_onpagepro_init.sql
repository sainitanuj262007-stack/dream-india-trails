-- OnPagePro initial schema
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  created_at timestamptz not null default now()
);

create table public.websites (
  id uuid primary key default gen_random_uuid(),
  owner uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  domain text not null,
  platform text,
  target_language text,
  target_country text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (owner, domain)
);

create table public.pages (
  id uuid primary key default gen_random_uuid(),
  website_id uuid not null references public.websites(id) on delete cascade,
  url text not null,
  status text not null default 'pending' check (status in ('pending','analyzed','error')),
  last_analyzed_at timestamptz,
  error_message text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (website_id, url)
);

create table public.keywords (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.pages(id) on delete cascade,
  keyword text not null,
  kind text not null default 'secondary' check (kind in ('primary','secondary')),
  intent text,
  created_at timestamptz not null default now(),
  unique (page_id, keyword)
);

create table public.page_snapshots (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.pages(id) on delete cascade,
  fetched_at timestamptz not null default now(),
  http_status int,
  title text,
  meta_description text,
  headings jsonb not null default '[]'::jsonb,
  canonical text,
  robots text,
  word_count int
);

create table public.audit_runs (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.pages(id) on delete cascade,
  snapshot_id uuid references public.page_snapshots(id) on delete cascade,
  score int not null default 0 check (score between 0 and 100),
  created_at timestamptz not null default now()
);

create table public.audit_findings (
  id uuid primary key default gen_random_uuid(),
  audit_run_id uuid not null references public.audit_runs(id) on delete cascade,
  check_key text not null,
  category text not null,
  status text not null check (status in ('passed','needs_improvement','issue','not_checked')),
  weight int not null default 0,
  title text not null,
  explanation text,
  evidence jsonb,
  recommendation text,
  dismissed boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.seo_drafts (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.pages(id) on delete cascade,
  field text not null check (field in ('title','meta_description','headings')),
  before_value text,
  after_value text,
  status text not null default 'draft' check (status in ('draft','ready','exported')),
  source text not null default 'manual' check (source in ('manual','ai')),
  created_by uuid not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.change_history (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.pages(id) on delete cascade,
  draft_id uuid references public.seo_drafts(id) on delete set null,
  action text not null,
  detail jsonb,
  created_at timestamptz not null default now()
);

create index idx_pages_website on public.pages(website_id);
create index idx_pages_status on public.pages(website_id, status);
create index idx_keywords_page on public.keywords(page_id);
create index idx_snapshots_page on public.page_snapshots(page_id);
create index idx_audit_runs_page on public.audit_runs(page_id);
create index idx_findings_run on public.audit_findings(audit_run_id);
create index idx_drafts_page on public.seo_drafts(page_id);
create index idx_history_page on public.change_history(page_id);

-- ownership helpers (security definer so RLS policies avoid recursion)
create or replace function public.is_website_owner(_website_id uuid)
returns boolean language sql stable security definer set search_path = public
as $$
  select exists (select 1 from public.websites where id = _website_id and owner = auth.uid())
$$;

create or replace function public.is_page_owner(_page_id uuid)
returns boolean language sql stable security definer set search_path = public
as $$
  select exists (
    select 1 from public.pages p
    join public.websites w on w.id = p.website_id
    where p.id = _page_id and w.owner = auth.uid()
  )
$$;

create or replace function public.is_finding_owner(_audit_run_id uuid)
returns boolean language sql stable security definer set search_path = public
as $$
  select exists (
    select 1 from public.audit_runs r
    join public.pages p on p.id = r.page_id
    join public.websites w on w.id = p.website_id
    where r.id = _audit_run_id and w.owner = auth.uid()
  )
$$;

-- profile auto-creation on signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email) values (new.id, new.email) on conflict do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- updated_at maintenance
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger websites_touch before update on public.websites for each row execute function public.touch_updated_at();
create trigger pages_touch before update on public.pages for each row execute function public.touch_updated_at();
create trigger drafts_touch before update on public.seo_drafts for each row execute function public.touch_updated_at();

-- RLS
alter table public.profiles enable row level security;
alter table public.websites enable row level security;
alter table public.pages enable row level security;
alter table public.keywords enable row level security;
alter table public.page_snapshots enable row level security;
alter table public.audit_runs enable row level security;
alter table public.audit_findings enable row level security;
alter table public.seo_drafts enable row level security;
alter table public.change_history enable row level security;

-- profiles
create policy "profiles_select_own" on public.profiles for select to authenticated using (id = auth.uid());
create policy "profiles_update_own" on public.profiles for update to authenticated using (id = auth.uid()) with check (id = auth.uid());

-- websites
create policy "websites_select_own" on public.websites for select to authenticated using (owner = auth.uid());
create policy "websites_insert_own" on public.websites for insert to authenticated with check (owner = auth.uid());
create policy "websites_update_own" on public.websites for update to authenticated using (owner = auth.uid()) with check (owner = auth.uid());
create policy "websites_delete_own" on public.websites for delete to authenticated using (owner = auth.uid());

-- pages
create policy "pages_select_own" on public.pages for select to authenticated using (public.is_website_owner(website_id));
create policy "pages_insert_own" on public.pages for insert to authenticated with check (public.is_website_owner(website_id));
create policy "pages_update_own" on public.pages for update to authenticated using (public.is_website_owner(website_id)) with check (public.is_website_owner(website_id));
create policy "pages_delete_own" on public.pages for delete to authenticated using (public.is_website_owner(website_id));

-- keywords
create policy "keywords_select_own" on public.keywords for select to authenticated using (public.is_page_owner(page_id));
create policy "keywords_insert_own" on public.keywords for insert to authenticated with check (public.is_page_owner(page_id));
create policy "keywords_update_own" on public.keywords for update to authenticated using (public.is_page_owner(page_id)) with check (public.is_page_owner(page_id));
create policy "keywords_delete_own" on public.keywords for delete to authenticated using (public.is_page_owner(page_id));

-- page_snapshots
create policy "snapshots_select_own" on public.page_snapshots for select to authenticated using (public.is_page_owner(page_id));
create policy "snapshots_insert_own" on public.page_snapshots for insert to authenticated with check (public.is_page_owner(page_id));

-- audit_runs
create policy "runs_select_own" on public.audit_runs for select to authenticated using (public.is_page_owner(page_id));
create policy "runs_insert_own" on public.audit_runs for insert to authenticated with check (public.is_page_owner(page_id));

-- audit_findings
create policy "findings_select_own" on public.audit_findings for select to authenticated using (public.is_finding_owner(audit_run_id));
create policy "findings_insert_own" on public.audit_findings for insert to authenticated with check (public.is_finding_owner(audit_run_id));
create policy "findings_update_own" on public.audit_findings for update to authenticated using (public.is_finding_owner(audit_run_id)) with check (public.is_finding_owner(audit_run_id));

-- seo_drafts
create policy "drafts_select_own" on public.seo_drafts for select to authenticated using (public.is_page_owner(page_id));
create policy "drafts_insert_own" on public.seo_drafts for insert to authenticated with check (public.is_page_owner(page_id));
create policy "drafts_update_own" on public.seo_drafts for update to authenticated using (public.is_page_owner(page_id)) with check (public.is_page_owner(page_id));
create policy "drafts_delete_own" on public.seo_drafts for delete to authenticated using (public.is_page_owner(page_id));

-- change_history
create policy "history_select_own" on public.change_history for select to authenticated using (public.is_page_owner(page_id));
create policy "history_insert_own" on public.change_history for insert to authenticated with check (public.is_page_owner(page_id));

-- grants
grant select, update on public.profiles to authenticated;
grant all on public.websites to authenticated;
grant all on public.pages to authenticated;
grant all on public.keywords to authenticated;
grant select, insert on public.page_snapshots to authenticated;
grant select, insert on public.audit_runs to authenticated;
grant select, insert, update on public.audit_findings to authenticated;
grant all on public.seo_drafts to authenticated;
grant select, insert on public.change_history to authenticated;
grant all on public.profiles to service_role;
grant all on public.websites to service_role;
grant all on public.pages to service_role;
grant all on public.keywords to service_role;
grant all on public.page_snapshots to service_role;
grant all on public.audit_runs to service_role;
grant all on public.audit_findings to service_role;
grant all on public.seo_drafts to service_role;
grant all on public.change_history to service_role;
grant execute on function public.is_website_owner(uuid) to authenticated;
grant execute on function public.is_page_owner(uuid) to authenticated;
grant execute on function public.is_finding_owner(uuid) to authenticated;