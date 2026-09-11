import Link from "next/link";
import AuthorProjects from "@/components/AuthorProjects";
import { repository, templateURL } from "@/config";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "About the starter",
  "/about",
  "Why SEO Next.js Starter exists, what it includes, and how to make it your own.",
);
export default function About() {
  return (
    <main id="main">
      <section className="shell page-hero">
        <span className="eyebrow">OPEN SOURCE, BY DESIGN</span>
        <h1>
          A better starting point
          <br />
          for the next idea.
        </h1>
        <p>
          SEO Next.js Starter brings the everyday SEO pieces together in a
          small, readable Next.js project.
        </p>
      </section>
      <article className="shell content-shell prose">
        <h2>Built to be understood.</h2>
        <p>
          A starter should save you setup time and make the important decisions
          easy to inspect. Here, every example connects a working page to its
          metadata, sitemap entry, and social image.
        </p>
        <h2>Created by Leo Wang.</h2>
        <p>
          I build web products and tools. This project is a collection of
          practical foundations for developers who want to spend more time on
          their own content and ideas.
        </p>
        <h2>Yours to change.</h2>
        <p>
          The project is MIT licensed. Keep what helps, replace the demo content
          and branding, and remove author project links if they do not belong on
          your site. Attribution is governed by the MIT license, not a mandatory
          website backlink.
        </p>
        <div className="inline-links">
          <a href={templateURL}>Use the template ↗</a>
          <a href={`${repository}/issues`}>Share feedback ↗</a>
          <Link href="/docs">Read the docs →</Link>
        </div>
      </article>
      <AuthorProjects />
    </main>
  );
}
