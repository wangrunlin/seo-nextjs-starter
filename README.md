# SEO Next.js Starter

[![中文](https://img.shields.io/badge/中文-Click_here-brightgreen?style=for-the-badge)](README-zh.md)
[![English](https://img.shields.io/badge/English-Click_here-brightgreen?style=for-the-badge)](README.md)

[![GitHub][GitHub]][GitHub URL]
[![GitHub stars][Stars]][Stars URL]
[![GitHub forks][Forks]][Forks URL]
[![GitHub issues][Issues]][Issues URL]
[![GitHub license][License]][License URL]
[![Last Commit][Last Commit]][Last Commit URL]

[![use this template][Use This Template]][Use This Template URL]

[![Deploy with Vercel][Deploy with Vercel]][Deploy with Vercel URL]

A head start for your next search result. An open-source Next.js starter with page metadata, sitemaps, social images, and practical examples you can inspect and adapt.

[Live demo](https://seo-nextjs.alin.run) · [Documentation](https://seo-nextjs.alin.run/docs) · [Examples](https://seo-nextjs.alin.run/examples) · [Vercel template](https://vercel.com/templates/next.js/seo-starter)

[![SEO Next.js Starter homepage](public/thumbnail.png)](https://seo-nextjs.alin.run)

## What ships with v1

- **Page-specific SEO:** titles, descriptions, canonical URLs, Open Graph, and Twitter cards through one metadata helper.
- **Production-aware indexing:** route-based sitemap, robots, local/Preview noindex, and an explicit production URL.
- **Dynamic social images:** 1200 × 630 PNG images generated with `next/og`, plus a matching icon.
- **Inspectable examples:** a journal with static articles and dynamic metadata, plus a product page with a working launch checklist.
- **Structured data:** WebSite, SoftwareSourceCode, Article, and BreadcrumbList examples with escaped JSON-LD output.
- **Bilingual documentation:** English and Chinese routes with reciprocal hreflang, working legacy README redirects, and readable code blocks.
- **Responsive design:** light/dark themes, keyboard navigation, interactive SEO previews, and author project cards.
- **Repeatable checks:** ESLint, TypeScript, Node tests, production build, and HTTP SEO assertions in GitHub Actions.

Built with **Next.js 16, React 19, TypeScript 5, Tailwind CSS 4, Node.js 22, and pnpm 11**. This is a set of SEO foundations, not a promise of rankings or a particular performance score.

## Quickstart

Create a repository with the **Use this template** button above, then clone your new repository:

```bash
# Node.js 22.x; install pnpm 11.24.0 if needed
npm install --global pnpm@11.24.0
pnpm install --frozen-lockfile
cp .env.example .env.local
pnpm dev
```

Open [localhost:3000](http://localhost:3000). No account, database, or analytics service is needed to run the examples.

## Site configuration

Set these in `.env.local` for development and in your deployment environment for production:

```dotenv
NEXT_PUBLIC_SITE_NAME="Your site"
NEXT_PUBLIC_TITLE="Your page title"
NEXT_PUBLIC_DESCRIPTION="A useful description of your website."
NEXT_PUBLIC_URL="https://example.com"
# Optional: set false to opt out of indexing
# NEXT_PUBLIC_INDEXABLE="false"
# Optional: your own GA measurement ID; leave unset to disable analytics
# NEXT_PUBLIC_GOOGLE_ANALYTICS_ID="G-XXXXXXXXXX"
```

`NEXT_PUBLIC_URL` must be an HTTP(S) origin without a path, query, or credentials. Configure your real production domain before publishing. If omitted, Vercel deployments resolve their own project domain; local development falls back to `http://localhost:3000`. Preview deployments remain noindex even when the production URL is configured. Noindex pages allow crawling so robots can read that directive.

Add a page's metadata in its server component:

```tsx
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About us",
  "/about",
  "Learn about the people and ideas behind our website.",
);
```

When adding or removing pages, also update `src/app/sitemap.ts`. Customize `src/config.ts`, the examples, and the author cards for your own project. The homepage preview is illustrative; search engines can rewrite titles and snippets.

## Deploy on Vercel

[![Deploy with Vercel][Deploy with Vercel]][Deploy with Vercel URL]

1. Create your own repository and Vercel project with the button.
2. Set `NEXT_PUBLIC_URL` to your production origin and customize your site name, title, and description. Add your custom domain in Vercel if using one.
3. Deploy, then inspect `/sitemap.xml`, `/robots.txt`, and `/api/og`. Check the rendered HTML for canonical and social tags.
4. After changing environment variables, redeploy. Keep Preview deployments noindex; do not copy the demo's domain or analytics ID into your project.

The maintained demo is [seo-nextjs.alin.run](https://seo-nextjs.alin.run); the existing [Vercel demo URL](https://seo-nextjs-starter.vercel.app) also remains available. The [marketplace listing](https://vercel.com/templates/next.js/seo-starter) is maintained separately from Git deployments.

## Check your changes

```bash
pnpm check        # lint, route types, TypeScript, tests, production build
pnpm start        # in a second terminal
pnpm test:seo     # checks actual HTTP responses at localhost:3000
# Optional: SEO_CHECK_URL=https://your-site.com pnpm test:seo
```

The HTTP checks cover example routes, canonical and sharing metadata, document language alternates, sitemap/robots, PNG assets, redirects, 404 responses, and the bundled author links. Adapt the route and author-link expectations when you customize the template. See [migration notes](MIGRATION.md) and the [changelog](CHANGELOG.md) when upgrading from 0.2.x.

## Project map

| Path                              | Purpose                              |
| --------------------------------- | ------------------------------------ |
| `src/config.ts`                   | Site identity and resolved URL       |
| `src/lib/seo.ts`                  | Page metadata and breadcrumb helpers |
| `src/app/sitemap.ts`, `robots.ts` | Discovery and indexing policy        |
| `src/app/api/og/route.tsx`        | Dynamic social PNG                   |
| `src/content/articles.ts`         | Journal example content              |
| `src/content/docs.*.md`           | Bilingual website documentation      |
| `tests/`, `scripts/check-seo.mjs` | Configuration and HTTP checks        |

## Projects from the Author

A few other tools and creative experiments by [Leo Wang](https://alin.run):

- [Toolbox Hub](https://toolbox-hub.com) — Free online tools.
- [H3Run](https://h3run.com) — AI video creation.
- [H3MaxLive](https://h3maxlive.com) — Interactive AI video.
- [Image 2.5](https://image-2-5.com) — AI image creation and editing.

These are author projects, not claims that they use this starter. You can remove or replace the showcase in your own site; keep the copyright and license notice as required by the MIT license.

## Share what you build

Have a project built with this template? [Submit your website](https://github.com/wangrunlin/seo-nextjs-starter/issues/new?template=submit-website.yml) or [report an issue](https://github.com/wangrunlin/seo-nextjs-starter/issues). Contributions are welcome; run the checks and keep changes focused. Commit messages follow this public repository's English Conventional Commits style.

## License

[MIT](LICENSE). Free to use, modify, and build on.

[Stars]: https://img.shields.io/github/stars/wangrunlin/seo-nextjs-starter?style=for-the-badge
[Stars URL]: https://github.com/wangrunlin/seo-nextjs-starter/stargazers
[Forks]: https://img.shields.io/github/forks/wangrunlin/seo-nextjs-starter?style=for-the-badge
[Forks URL]: https://github.com/wangrunlin/seo-nextjs-starter/forks
[Issues]: https://img.shields.io/github/issues/wangrunlin/seo-nextjs-starter?style=for-the-badge
[Issues URL]: https://github.com/wangrunlin/seo-nextjs-starter/issues
[License]: https://img.shields.io/github/license/wangrunlin/seo-nextjs-starter?style=for-the-badge
[License URL]: https://github.com/wangrunlin/seo-nextjs-starter/blob/main/LICENSE
[Last Commit]: https://img.shields.io/github/last-commit/wangrunlin/seo-nextjs-starter?style=for-the-badge
[Last Commit URL]: https://github.com/wangrunlin/seo-nextjs-starter/commits/main
[GitHub]: https://img.shields.io/badge/GitHub-wangrunlin%2Fseo--nextjs--starter-blue?style=for-the-badge&logo=github
[GitHub URL]: https://github.com/wangrunlin/seo-nextjs-starter
[Use This Template]: https://img.shields.io/badge/Use_this_template-Click_here-brightgreen?style=for-the-badge
[Use This Template URL]: https://github.com/new?template_name=seo-nextjs-starter&template_owner=wangrunlin
[Deploy with Vercel]: https://vercel.com/button
[Deploy with Vercel URL]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwangrunlin%2Fseo-nextjs-starter&env=NEXT_PUBLIC_URL
[Preview URL]: https://seo-nextjs.alin.run/
[Vercel Environment Variables]: https://vercel.com/docs/projects/environment-variables
[Next.js Metadata Documentation]: https://nextjs.org/docs/app/api-reference/file-conventions/metadata
[Open Graph Image Generation Documentation]: https://vercel.com/docs/functions/og-image-generation
[Ahrefs SEO Guide]: https://ahrefs.com/seo
