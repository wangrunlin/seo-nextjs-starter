## Quickstart

Use Node.js 22 and pnpm 11.24.0. Create your own repository with **Use template**, or clone the source:

```bash
git clone https://github.com/wangrunlin/seo-nextjs-starter.git
cd seo-nextjs-starter
pnpm install
cp .env.example .env.local
pnpm dev
```

Open `http://localhost:3000`. You can explore locally without configuring external services. For your own deployment, replace the example content, branding, project links, and repository buttons.

## Configuration

Use `.env.local` locally and project environment variables on Vercel. Rebuild after changing public configuration.

```dotenv
NEXT_PUBLIC_SITE_NAME="My website"
NEXT_PUBLIC_TITLE="A specific homepage title"
NEXT_PUBLIC_DESCRIPTION="A useful description of your website."
NEXT_PUBLIC_URL="https://example.com"
```

`NEXT_PUBLIC_URL` is a complete origin without a path or query. An invalid URL fails with a clear error. When omitted, production Vercel builds use `VERCEL_PROJECT_PRODUCTION_URL`, preview builds use `VERCEL_URL`, and local builds use localhost. There is no fallback to the author's domain.

Google Analytics is optional. Set `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` to **your own** ID if needed. No analytics ID is shipped in the template. Author links are ordinary editable content, not required backlinks.

## Metadata

Give each page a title, description, canonical, Open Graph URL, and share image using the included helper:

```tsx
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About our team",
  "/about",
  "Meet the people building our product.",
);
```

The canonical includes the current page path. Article pages use `generateMetadata` and statically generated slugs; see [the journal](/examples/articles). Tracking parameters should not change the preferred URL when they do not change the content.

The homepage preview is an illustrative design tool. It does not predict rankings or exactly reproduce how a search engine will display your page.

## Indexing

`src/app/sitemap.ts` lists public pages and articles. Add new routes there. Article dates come from their content; general pages do not invent modification dates on every build.

`robots.txt` allows crawling so crawlers can read page-level directives. Preview and local builds emit `noindex` metadata and an empty sitemap; robots.txt does not advertise a sitemap in those environments. Production builds are indexable by default. Set `NEXT_PUBLIC_INDEXABLE=false` to opt out. Index directives are not access control for private data.

Only the two actual documentation translations use reciprocal `hreflang`: `/docs` and `/docs/zh`. Other example pages are English-only.

## Social images

Open [the image endpoint](/api/og?title=Your%20next%20idea) to see a real 1200×630 image. Titles are bounded to 100 characters. Page metadata points to the image with a page-specific title.

JSON-LD describes visible content: WebSite and SoftwareSourceCode on the homepage, Article on journal entries, and BreadcrumbList on article/product pages. Do not add invented ratings, prices, or review counts. JSON-LD output escapes `<` before insertion into HTML.

## Examples

- [Fieldnotes journal](/examples/articles): a collection and static article detail pages, with page metadata and Article schema.
- [LaunchKit](/examples/product): a product-page example with an interactive, temporary checklist. No backend or checkout is required.
- [About](/about): a simple page with its own canonical and title.

Article data lives in `src/content/articles.ts`. The checklist is intentionally temporary; it resets on reload. Adapt these examples to your own project.

## Deployment

Deploy with the Vercel button or connect your repository to an existing project. Keep Node.js 22 and the package-manager version in sync with `package.json`. Set the production URL in the Production environment; Vercel supplies preview-host variables automatically.

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm start
# Run in a second terminal against the server:
pnpm test:seo
```

`test:seo` checks actual HTML responses, per-page canonical/OG URLs, metadata, indexing, sitemap entries, JSON-LD, links, 404s, and PNG generation. Set `SEO_CHECK_URL` to test an accessible deployment.

For a custom domain, choose one primary domain in Vercel. Redirect other aliases to it while preserving paths. This template does not hardcode a redirect to the author's website. Inspect the production deployment and HTML after release; a successful build alone is not a public-site check.

## What’s new

Version 1.0 updates Next.js and React, replaces `next lint` with ESLint CLI, adds CI and focused SEO checks, repairs page canonical URLs and deployment URL resolution, and introduces documentation translations, article/product examples, social images, and a visual SEO preview.

When upgrading from 0.2, preserve your production environment variables and custom content. Review `src/config.ts`, metadata exports, the sitemap, and markdown links. The MIT license is unchanged.

[Source on GitHub](https://github.com/wangrunlin/seo-nextjs-starter) · [中文文档](/docs/zh)
