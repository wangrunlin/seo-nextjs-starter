import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Practical SEO examples",
  "/examples",
  "Explore working article and product pages with metadata, social images, and structured data.",
);
export default function Examples() {
  return (
    <main id="main">
      <section className="shell page-hero">
        <span className="eyebrow">LEARN BY BUILDING</span>
        <h1>
          Real pages.
          <br />
          Readable source.
        </h1>
        <p>
          Explore the output, then open the code. These small examples are yours
          to change.
        </p>
      </section>
      <section className="shell section">
        <div className="example-grid">
          <Link className="example-card" href="/examples/articles">
            <div className="journal-cover">
              <div>
                FIELDNOTES <span>01 / JOURNAL</span>
              </div>
              <strong>
                Ideas worth
                <br />
                <em>finding.</em>
              </strong>
              <span className="cover-orbit" aria-hidden="true">
                ✳
              </span>
            </div>
            <div className="example-caption">
              <div>
                <h3>Article collection</h3>
                <p>Static generation, per-article metadata, Article schema.</p>
              </div>
              <ArrowUpRight />
            </div>
          </Link>
          <Link className="example-card" href="/examples/product">
            <div className="product-cover">
              <span className="product-cover-label">
                LAUNCHKIT / OPEN SOURCE
              </span>
              <div className="mock-checklist">
                <span>
                  ✓ <b>Page titles</b>
                </span>
                <span>
                  ✓ <b>Canonical URLs</b>
                </span>
                <span>
                  ○ <b>Your next launch</b>
                </span>
              </div>
              <strong>
                Ready, set,
                <br />
                launch.
              </strong>
            </div>
            <div className="example-caption">
              <div>
                <h3>Product page</h3>
                <p>A usable launch checklist with metadata and breadcrumbs.</p>
              </div>
              <ArrowUpRight />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
