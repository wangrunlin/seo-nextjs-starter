import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import MarkdownContent from "./MarkdownContent";
import AuthorProjects from "./AuthorProjects";
const sections = [
  ["Quickstart", "快速开始", "quickstart"],
  ["Configuration", "站点配置", "configuration"],
  ["Metadata", "页面元数据", "metadata"],
  ["Indexing", "站点地图与索引", "indexing"],
  ["Social images", "分享图与结构化数据", "social-images"],
  ["Examples", "示例页面", "examples"],
  ["Deployment", "部署与验证", "deployment"],
  ["What's new", "从 0.2 升级", "whats-new"],
];
export default function DocsPage({ language }: { language: "en" | "zh" }) {
  const zh = language === "zh";
  const content = fs.readFileSync(
    path.join(process.cwd(), `src/content/docs.${language}.md`),
    "utf8",
  );
  return (
    <main id="main">
      <section className="shell page-hero">
        <span className="eyebrow">DOCUMENTATION / V1.0</span>
        <h1>{zh ? "从配置到上线。" : "From setup to your next launch."}</h1>
        <p>
          {zh
            ? "理解模板的每一个 SEO 决策，检查实际输出，然后改成自己的站点。"
            : "Understand the SEO decisions, inspect the output, and make this starter your own."}
        </p>
        <div className="inline-links">
          <Link
            href="/docs"
            hrefLang="en"
            aria-current={!zh ? "page" : undefined}
          >
            English
          </Link>
          <Link
            href="/docs/zh"
            hrefLang="zh-CN"
            aria-current={zh ? "page" : undefined}
          >
            简体中文
          </Link>
        </div>
      </section>
      <div className="shell docs-layout">
        <nav className="docs-nav" aria-label={zh ? "文档目录" : "On this page"}>
          <strong>{zh ? "本页内容" : "ON THIS PAGE"}</strong>
          {sections.map(([en, cn, id]) => (
            <a href={`#${id}`} key={id}>
              {zh ? cn : en}
            </a>
          ))}
        </nav>
        <article className="prose" lang={zh ? "zh-CN" : "en"}>
          <MarkdownContent content={content} />
        </article>
      </div>
      <AuthorProjects />
    </main>
  );
}
