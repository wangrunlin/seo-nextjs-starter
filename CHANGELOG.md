# Changelog

## 1.0.0 — 2026-09-11

### Added

- Interactive SEO preview, responsive light/dark design, and author project cards.
- Article and product examples, JSON-LD helpers, English/Chinese documentation routes.
- Per-page canonical and social metadata, dynamic 1200 × 630 PNG images, production-aware sitemap and robots.
- Node configuration tests, HTTP SEO checks, and GitHub Actions verification.

### Changed

- Upgrade to Next.js 16.3.4, React 19.3.0, and Tailwind CSS 4.3.3.
- Pin Node.js 22 and pnpm 11; replace `next lint` with the ESLint CLI.
- Separate website documentation from the repository README; add real homepage screenshot.

### Fixed

- Shared homepage canonical leaking onto other pages.
- Vercel URL fallback depending on an unrelated public flag.
- Broken Chinese README navigation, missing documentation sitemap entries, and blanket nofollow on editorial links.
- Replace the Stair link with H3Run, H3MaxLive, and Image 2.5 author links.

See [MIGRATION.md](MIGRATION.md) before upgrading an existing 0.2.x project.
