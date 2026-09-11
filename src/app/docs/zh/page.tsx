import DocsPage from "@/components/DocsPage";
import { baseURL } from "@/config";
import { pageMetadata } from "@/lib/seo";
export const metadata = {
  ...pageMetadata(
    "中文文档",
    "/docs/zh",
    "配置 Next.js 网站的 metadata、索引、分享图与示例，验证实际 SEO 输出。",
  ),
  alternates: {
    canonical: `${baseURL}/docs/zh`,
    languages: {
      en: `${baseURL}/docs`,
      "zh-CN": `${baseURL}/docs/zh`,
      "x-default": `${baseURL}/docs`,
    },
  },
};
export default function Docs() {
  return <DocsPage language="zh" />;
}
