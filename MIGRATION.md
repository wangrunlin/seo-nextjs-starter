# Migrating from 0.2.x to 1.0

This is a framework and presentation upgrade. Review your own customizations before merging; a GitHub template does not automatically upgrade repositories created from it.

1. Use Node.js 22.x and pnpm 11.24.0. Install with `pnpm install --frozen-lockfile`. Next.js is now 16.3.4; React and React DOM must stay on the same version.
2. Replace `next lint` with `eslint .`. Preserve the new flat ESLint configuration and the Next-generated TypeScript settings.
3. Set `NEXT_PUBLIC_URL` to your real production origin. Remove any copied author domain. The resolver now rejects paths, credentials, and invalid protocols instead of publishing misleading URLs.
4. Remove inherited root canonical metadata. Use `pageMetadata()` for every route. Add your real routes to the sitemap, and replace or remove demo articles and structured data.
5. Vercel Preview/development and localhost are noindex. Set `NEXT_PUBLIC_INDEXABLE=false` to disable indexing elsewhere. Robots still allow crawlers to read noindex. Changing build-time environment variables requires a rebuild.
6. Website documentation now lives in `src/content/docs.en.md` and `docs.zh.md`; editing README alone no longer changes `/docs`. English/Chinese docs have their own canonical and reciprocal hreflang. Legacy README paths redirect to these routes.
7. The homepage and shared components changed substantially. Move your product content into the new layout rather than overwriting custom business logic. Keep or replace author cards as you prefer; adapt the HTTP test expectations after customization.
8. Analytics remains optional. Set only your own Google Analytics ID. No new analytics service is required.
9. Run `pnpm check`, start the production build, and run `pnpm test:seo`. Inspect your actual deployment, custom domain, `/api/og`, sitemap, robots, and a missing route before release.

The demo's existing domains and Vercel marketplace slug stay available. Marketplace descriptions and thumbnails are independent of Git deployment and may require a listing update.
