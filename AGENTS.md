# Repository guidance

- This is a public Next.js SEO starter. Use English for public UI, code documentation, and Conventional Commit messages, matching repository history. Provide Chinese translations for user review when requested.
- Preserve the MIT license, working examples, and existing public URLs. Keep demo content clearly identified; do not claim rankings, adoption, or performance scores without evidence.
- Inspect installed Next.js documentation before relying on unfamiliar version-specific APIs. Keep Next, eslint-config-next, and @next/third-parties aligned.
- Use Node.js 22.x and pnpm 11.24.0. Keep the lockfile current. Run `pnpm check`; for SEO changes also run a production server and `pnpm test:seo`.
- Maintain per-page canonical/OG data, sitemap routes, preview noindex, document language alternates, SSR/SSG content, and actual 404 status codes together.
- Never copy the maintainer's domain, analytics ID, or credentials into defaults for template adopters.
- Keep changes focused and retain unrelated user work. Do not push, release, or deploy without user authorization.
