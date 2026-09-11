import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { repository } from "@/config";
const chineseIds: Record<string, string> = {
  快速开始: "quickstart",
  站点配置: "configuration",
  页面元数据: "metadata",
  站点地图与索引: "indexing",
  分享图与结构化数据: "social-images",
  示例页面: "examples",
  部署与验证: "deployment",
  "从 0.2 升级": "whats-new",
};
export default function MarkdownContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ href, children }) => {
          const resolved = href?.match(/^README(?:-zh)?\.md$/)
            ? href === "README-zh.md"
              ? "/docs/zh"
              : "/docs"
            : href?.match(/^(src\/|\.env|LICENSE)/)
              ? `${repository}/blob/main/${href}`
              : href;
          return (
            <a
              href={resolved}
              {...(resolved?.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {children}
            </a>
          );
        },
        h2: ({ children }) => {
          const label = String(children);
          return (
            <h2
              id={
                chineseIds[label] ||
                label
                  .toLowerCase()
                  .replace(/[’']/g, "")
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-|-$/g, "")
              }
            >
              {children}
            </h2>
          );
        },
        table: ({ children }) => (
          <div className="table-scroll">
            <table>{children}</table>
          </div>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
