# OnPagePro — Multi-Website On-Page SEO Tool (Meta Title, Description, Headings)

A focused SaaS web app built from the uploaded spec, narrowed to the user's stated priority: **meta title, meta description, and headings (H1–H6)**. Multi-website workspace, real HTML analysis, transparent scoring, AI suggestions, drafts, CSV export.

## Important: project placement
This project currently hosts the Destinations Planner travel site. One Lovable project = one app, so this build **pivots the project to OnPagePro**: the travel-site routes are removed and replaced by the SEO tool. The travel site's code remains in git history and can be restored into a separate project later if wanted.

## What the user gets
1. **Login / signup** — email & password (Lovable Cloud auth).
2. **Websites workspace** — add multiple websites; website switcher keeps every site's pages, keywords and audits fully separate.
3. **Page import** — single URL, sitemap.xml, CSV URL list, and a limited internal-link crawl (respects robots.txt, capped pages, rate-limited).
4. **Page analysis** (real fetched HTML, never faked):
   - Title tag: exists, exact content, length vs 50–60 guideline, missing/empty/duplicate flags, keyword presence.
   - Meta description: exists, length vs 140–160 guideline, missing/empty/duplicate flags, keyword presence, Google-style snippet preview.
   - Headings: full H1–H6 hierarchy, missing/empty/multiple H1 flags, heading order issues.
   - Keyword assignment: one primary + secondary keywords per page; presence checks in title/description/H1/URL.
5. **SEO score 0–100** — transparent weighted checks; each check shows status, explanation, evidence, recommended action. Labeled an internal indicator, not a Google ranking score. Empty states until analysis runs.
6. **Editor per page** — tabs: Overview, Title, Description, Headings, Recommendations, History. Editable proposed title/description/headings with before-and-after comparison, Google snippet preview, draft saving, change history, statuses (Draft / Ready to Publish / Exported). Editing does not touch the live website — CSV export of audit + recommendations for manual implementation.
7. **AI assistant** (Lovable AI Gateway, default model) — suggests SEO titles, rewrites meta descriptions, improves H1/H2 headings from the page's real content + target keyword. Multiple suggestions with rationale; user approval required before saving. Strict JSON output; no invented facts.
8. **Dashboard UI** — sidebar navigation (Dashboard, Websites, Pages, Audits, Keyword Mapping, Reports, Settings), website switcher, page search/filters (status, score, issue), score indicators, responsive tables, light + dark theme, loading/empty/error states. No backlinks/ads/social features.

## Technical plan
- **Backend**: enable Lovable Cloud (database + auth). Email auth enabled via `enable_email_auth`.
- **Schema** (single migration): `profiles`, `websites`, `pages`, `page_snapshots`, `audit_runs`, `audit_findings`, `keywords`, `drafts`, `change_history` — foreign keys, indexes, RLS (`auth.uid()` ownership via profiles/websites), GRANT statements per public-schema table in the same migration. A user can never read another user's data.
- **Server functions** (`createServerFn` + `requireSupabaseAuth` middleware): website CRUD, page import, fetch+analyze, re-analyze, keyword assignment, draft save, AI suggestions. HTML fetching happens only server-side.
- **SSRF protection**: URL validation before every fetch — only http/https, block localhost, private/loopback/link-local IP literals and cloud-metadata endpoints, response timeout + size cap, per-site crawl limits and robots.txt respect. Unfetchable pages surface an explicit error; never marked analyzed without HTML.
- **HTML parsing**: Cloudflare-native `HTMLRewriter` on the Workers runtime for title/meta/headings extraction (no Node-only packages).
- **AI**: Lovable AI Gateway via the AI SDK Responses helpers, strict JSON schema output, streamed; gateway error semantics honored (no silent retries of terminal errors).
- **Client**: TanStack Start routes under `_authenticated` (managed auth gate), React Query via route loaders, shadcn components, semantic design tokens (no hardcoded colors).

## Build stages
1. Enable Lovable Cloud; email auth; migration with schema, RLS, grants.
2. Auth gate + app shell (sidebar, website switcher, theme toggle) + website CRUD.
3. Page import: URL / sitemap / CSV / limited crawl with SSRF guards.
4. Analyzer (title, description, headings, keywords) + weighted score + audit findings.
5. Pages table with filters + page editor (tabs, snippet preview, before/after, drafts, history).
6. AI assistant in the editor.
7. CSV export (audit + recommendations).
8. Verification: analyzer rule tests + Playwright end-to-end on a real public site (import → analyze → edit → export), desktop and mobile.

## Explicitly out of scope for this build
Image/alt-text, internal-link and schema analysis (spec sections G–K), CMS publishing connectors, page comparison/bulk edits — can follow in a later stage after the core is verified. The spec's honest-data rule is kept: no fabricated scores, crawl results, or search volumes.
