<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep verified contact details in `src/lib/site-data.ts` as the single source for all contact links and legal pages, so updates stay consistent.
- Use `LegalPageLayout` and `LegalSection` for legal routes, so their accessibility and styling stay aligned.
- Use `SitePageLayout` for non-legal content routes and keep the homepage focused on its hero and travel highlights, so each main navigation item is a shareable page.
