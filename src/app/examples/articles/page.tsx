import Link from "next/link";
import { articles } from "@/content/articles";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Fieldnotes — the SEO journal",
  "/examples/articles",
  "Short, practical notes on canonical URLs and social images. A working article collection built with Next.js.",
);
export default function Articles() {
  return (
    <main id="main">
      <section className="shell page-hero">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/examples">Examples</Link>
          <span>/ Journal</span>
        </nav>
        <span className="eyebrow">FIELDNOTES / JOURNAL</span>
        <h1>Ideas worth finding.</h1>
        <p>
          A small collection of practical SEO notes. Each article has its own
          metadata, social image, and structured data.
        </p>
      </section>
      <section className="shell section article-grid">
        {articles.map((article) => (
          <Link
            className="article-card"
            href={`/examples/articles/${article.slug}`}
            key={article.slug}
          >
            <span className="eyebrow">{article.category}</span>
            <span className="article-meta">
              {article.date} · Example article
            </span>
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <span className="text-link">Read the article ↗</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
