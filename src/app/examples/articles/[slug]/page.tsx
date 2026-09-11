import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/content/articles";
import { baseURL, repository, siteName } from "@/config";
import { breadcrumbs, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
export const dynamicParams = false;
export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  const metadata = pageMetadata(
    article.title,
    `/examples/articles/${slug}`,
    article.summary,
  );
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article" as const,
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: [siteName],
    },
  };
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  const path = `/examples/articles/${slug}`;
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.summary,
          datePublished: article.date,
          dateModified: article.date,
          author: { "@type": "Organization", name: siteName, url: baseURL },
          image: new URL(
            `/api/og?title=${encodeURIComponent(article.title)}`,
            baseURL,
          ).href,
          mainEntityOfPage: new URL(path, baseURL).href,
        }}
      />
      <JsonLd
        data={breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/examples/articles" },
          { name: article.title, path },
        ])}
      />
      <section className="shell page-hero">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/examples/articles">Journal</Link>
          <span>/ {article.category.toLowerCase()}</span>
        </nav>
        <span className="eyebrow">
          {article.category} · {article.date}
        </span>
        <h1>{article.title}</h1>
        <p>{article.summary}</p>
      </section>
      <article className="shell content-shell prose">
        <p className="article-meta">By {siteName} · Working article example</p>
        {article.body.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </section>
        ))}
        <h2>In this starter</h2>
        <pre>
          <code>{article.code}</code>
        </pre>
        <p>
          This page is statically generated from{" "}
          <code>src/content/articles.ts</code>. Inspect its source response to
          see the generated metadata and JSON-LD.
        </p>
        <div className="inline-links">
          <a href={`/api/og?title=${encodeURIComponent(article.title)}`}>
            Open this social image ↗
          </a>
          <a
            href={`${repository}/blob/main/src/app/examples/articles/%5Bslug%5D/page.tsx`}
          >
            Read the page source ↗
          </a>
          <Link href="/examples/articles">All articles →</Link>
        </div>
        <p>
          Official reference:{" "}
          <a
            href={
              slug === "canonical-urls"
                ? "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls"
                : "https://nextjs.org/docs/app/getting-started/metadata-and-og-images"
            }
          >
            Read the documentation
          </a>
          .
        </p>
      </article>
    </main>
  );
}
