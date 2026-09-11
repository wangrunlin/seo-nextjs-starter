import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  FileCode2,
  Globe2,
  ImageIcon,
  Map,
  Search,
} from "lucide-react";
import SeoStudio from "@/components/SeoStudio";
import AuthorProjects from "@/components/AuthorProjects";
import JsonLd from "@/components/JsonLd";
import {
  baseURL,
  deployURL,
  repository,
  siteName,
  templateURL,
  title,
} from "@/config";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(title, "/");
const features = [
  {
    icon: Search,
    title: "Every page, its own identity.",
    text: "Page titles, descriptions, and canonical URLs that belong to the page you're on.",
    label: "PAGE METADATA",
    href: "/docs#metadata",
  },
  {
    icon: Map,
    title: "Make your pages discoverable.",
    text: "A sitemap built from your routes, plus production-aware robots settings.",
    label: "SITEMAP & ROBOTS",
    href: "/sitemap.xml",
  },
  {
    icon: ImageIcon,
    title: "Look good when you get shared.",
    text: "Dynamic Open Graph images with a real preview you can open and inspect.",
    label: "SOCIAL IMAGES",
    href: "/api/og",
  },
  {
    icon: Braces,
    title: "Give your content context.",
    text: "Structured data examples for your website, articles, and breadcrumbs.",
    label: "STRUCTURED DATA",
    href: "/examples/articles/canonical-urls",
  },
  {
    icon: FileCode2,
    title: "Start with something useful.",
    text: "A journal and product page. Read the source, change the content, make it yours.",
    label: "REAL EXAMPLES",
    href: "/examples",
  },
  {
    icon: Globe2,
    title: "Your site. Your configuration.",
    text: "Set your production URL once. Preview deployments stay out of the index.",
    label: "DEPLOYMENT DEFAULTS",
    href: "/docs#deployment",
  },
];
export default function Home() {
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteName,
          url: baseURL,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          name: siteName,
          codeRepository: repository,
          programmingLanguage: ["TypeScript", "JavaScript"],
          license: `${repository}/blob/main/LICENSE`,
          version: "1.0.0",
          description:
            "An open-source Next.js starter with inspectable SEO examples.",
        }}
      />
      <section className="shell hero">
        <div className="hero-copy">
          <Link className="release-label" href="/docs#whats-new">
            <span className="release-dot" /> v1.0 is here{" "}
            <span className="release-separator">/</span> Built on Next.js 16{" "}
            <ArrowUpRight size={13} />
          </Link>
          <h1>
            A head start
            <br />
            for your next
            <br />
            <span>search result.</span>
          </h1>
          <p>
            Ship your Next.js site with SEO foundations in place. Metadata,
            sitemaps, social images, and examples you can make your own.
          </p>
          <div className="hero-buttons">
            <a className="button button-blue" href={deployURL}>
              <span aria-hidden="true">▲</span> Deploy to Vercel{" "}
              <ArrowUpRight size={16} />
            </a>
            <a className="button button-outline" href={templateURL}>
              Use template <ArrowRight size={16} />
            </a>
          </div>
          <div className="hero-note">
            <span>MIT licensed</span>
            <i /> No account required to explore
          </div>
        </div>
        <div className="hero-preview">
          <SeoStudio />
          <div className="preview-footnote">
            <span className="mini-mark">↗</span> What you build deserves to be
            found.
          </div>
        </div>
      </section>
      <div className="stack-strip">
        <div className="shell stack-inner">
          <span>SMALL STACK. SOLID FOUNDATIONS.</span>
          <div>
            <strong>◒ Next.js 16</strong>
            <strong>⚛ React 19</strong>
            <strong>
              <b className="ts-mark">TS</b> TypeScript
            </strong>
            <strong>≈ Tailwind CSS</strong>
          </div>
        </div>
      </div>
      <section className="shell section" id="features">
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE ESSENTIALS, INCLUDED</span>
            <h2>
              Less setup.
              <br />
              More of your idea.
            </h2>
          </div>
          <p>
            The pieces you would otherwise wire up yourself.
            <br />
            Ready to read, run, and change.
          </p>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, ...feature }, i) => (
            <Link
              href={feature.href}
              className="feature-card"
              key={feature.title}
            >
              <div className="feature-top">
                <span className="feature-icon">
                  <Icon size={22} strokeWidth={1.65} />
                </span>
                <span>0{i + 1}</span>
              </div>
              <span className="eyebrow small">{feature.label}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <ArrowUpRight className="card-arrow" size={18} />
            </Link>
          ))}
        </div>
      </section>
      <section className="examples-section">
        <div className="shell section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">MORE THAN A LANDING PAGE</span>
              <h2>
                Working examples.
                <br />
                Useful starting points.
              </h2>
            </div>
            <Link className="text-link" href="/examples">
              Explore all examples <ArrowRight size={17} />
            </Link>
          </div>
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
                  <h3>The journal</h3>
                  <p>Static articles · dynamic metadata · Article schema</p>
                </div>
                <ArrowUpRight size={22} />
              </div>
            </Link>
            <Link className="example-card" href="/examples/product">
              <div className="product-cover">
                <span className="product-cover-label">
                  LAUNCHKIT / OPEN SOURCE
                </span>
                <div className="mock-checklist">
                  <span>
                    ✓ <b>Give every page a title</b>
                  </span>
                  <span>
                    ✓ <b>Set a canonical URL</b>
                  </span>
                  <span>
                    ○ <b>Share your next idea</b>
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
                  <h3>The product page</h3>
                  <p>Product storytelling · breadcrumbs · social cards</p>
                </div>
                <ArrowUpRight size={22} />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="shell section quickstart">
        <div>
          <span className="eyebrow">FROM REPO TO YOUR SITE</span>
          <h2>
            Your next project,
            <br />
            three steps away.
          </h2>
          <Link className="text-link" href="/docs">
            Read the quickstart <ArrowRight size={17} />
          </Link>
        </div>
        <ol className="steps">
          <li>
            <span>01</span>
            <div>
              <h3>Make it yours</h3>
              <p>
                Create a repository from the template. Install the dependencies
                with pnpm.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Set your site identity</h3>
              <p>
                Add your domain, title, and description in the environment
                configuration.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Deploy. Inspect. Share.</h3>
              <p>
                Deploy to Vercel, inspect the SEO output, and start building
                your own content.
              </p>
            </div>
          </li>
        </ol>
      </section>
      <AuthorProjects />
      <section className="shell final-cta">
        <span className="eyebrow">YOUR IDEA IS NEXT</span>
        <h2>
          Build something
          <br />
          worth finding.
        </h2>
        <a className="button button-blue" href={deployURL}>
          Start with this template <ArrowUpRight size={17} />
        </a>
        <p>Free and open source. Yours to build on.</p>
      </section>
    </main>
  );
}
