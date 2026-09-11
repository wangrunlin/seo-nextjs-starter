import Link from "next/link";
import { repository } from "@/config";
import { breadcrumbs, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import LaunchChecklist from "@/components/LaunchChecklist";
export const metadata = pageMetadata(
  "LaunchKit — a practical site launch checklist",
  "/examples/product",
  "A simple, free checklist for your next website launch. A working product-page example from SEO Next.js Starter.",
);
export default function Product() {
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Examples", path: "/examples" },
          { name: "LaunchKit", path: "/examples/product" },
        ])}
      />
      <section className="shell page-hero">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/examples">Examples</Link>
          <span>/ LaunchKit</span>
        </nav>
        <span className="eyebrow">LAUNCHKIT / FREE INTERACTIVE EXAMPLE</span>
        <h1>
          A calmer way
          <br />
          to hit publish.
        </h1>
        <p>
          Six small checks before your next website goes live. Try the
          checklist, then reuse this product page for your own idea.
        </p>
        <div className="hero-buttons">
          <a className="button button-blue" href="#checklist">
            Try the checklist ↓
          </a>
          <a
            className="button button-outline"
            href={`${repository}/blob/main/src/app/examples/product/page.tsx`}
          >
            Read the source ↗
          </a>
        </div>
      </section>
      <section className="shell content-shell">
        <span className="eyebrow">BEFORE YOU LAUNCH</span>
        <h2 id="checklist">The essentials.</h2>
        <div style={{ marginTop: 28 }}>
          <LaunchChecklist />
        </div>
        <div className="prose">
          <h2>Small enough to make your own.</h2>
          <p>
            This example includes a clear headline, a working interaction, page
            metadata, a share image, and breadcrumb structured data. It does not
            require sign-up, payment, or a backend.
          </p>
          <p>
            Replace the copy and checklist with your product, keeping the SEO
            configuration tied to the actual page.
          </p>
          <Link href="/docs#metadata">See how page metadata works →</Link>
        </div>
      </section>
    </main>
  );
}
