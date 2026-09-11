## 快速开始

使用 Node.js 22 与 pnpm 11.24.0。通过 **Use template** 创建自己的仓库，或者克隆源码：

```bash
git clone https://github.com/wangrunlin/seo-nextjs-starter.git
cd seo-nextjs-starter
pnpm install
cp .env.example .env.local
pnpm dev
```

打开 `http://localhost:3000`。本地浏览不需要配置外部服务。发布自己的站点前，请替换示例内容、品牌、作者项目链接及仓库按钮。

## 站点配置

本地使用 `.env.local`，Vercel 使用项目环境变量。公开配置发生变化后需重新构建。

```dotenv
NEXT_PUBLIC_SITE_NAME="我的网站"
NEXT_PUBLIC_TITLE="清晰具体的首页标题"
NEXT_PUBLIC_DESCRIPTION="一句对访客有用的网站介绍。"
NEXT_PUBLIC_URL="https://example.com"
```

`NEXT_PUBLIC_URL` 必须是完整的 HTTP(S) 源站地址，不包含路径或查询参数。地址无效时会清楚报错。留空时，Vercel 生产构建使用 `VERCEL_PROJECT_PRODUCTION_URL`，预览构建使用 `VERCEL_URL`，本地构建使用 localhost，不回退到作者域名。

Google Analytics 可选。需要时将 `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` 设置为自己的 ID；模板不预置作者统计 ID。作者链接是可编辑内容，不是强制外链。

## 页面元数据

使用内置辅助函数，为每个页面设置标题、描述、canonical、Open Graph URL 和分享图：

```tsx
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "关于团队",
  "/about",
  "认识正在打造产品的团队。",
);
```

canonical 包含当前页面路径。文章使用 `generateMetadata` 与静态生成的 slug；可查看[文章示例](/examples/articles)。不改变内容的追踪参数不应改变首选 URL。

首页预览只是设计示例，不预测排名，也不保证与搜索引擎实际展示完全一致。

## 站点地图与索引

`src/app/sitemap.ts` 列出公开页面和文章，新建页面时应同步维护。文章日期来自实际内容，一般页面不在每次构建时虚构修改日期。

`robots.txt` 允许抓取，使爬虫能读取页面级指令。预览与本地构建输出 `noindex` 和空 sitemap，robots.txt 不声明 sitemap。生产构建默认允许索引，可用 `NEXT_PUBLIC_INDEXABLE=false` 关闭。索引指令不能保护私密数据。

仅实际存在的两份文档 `/docs`、`/docs/zh` 设置双向 `hreflang`，其他示例页面只有英文。

## 分享图与结构化数据

打开[分享图接口](/api/og?title=Your%20next%20idea)，查看真实的 1200×630 图片。标题最多 100 字符；每个页面的 metadata 使用对应标题生成分享图地址。

JSON-LD 与可见内容对应：首页包含 WebSite 和 SoftwareSourceCode，文章包含 Article，文章及产品页包含 BreadcrumbList。不添加虚构评分、价格或评论数；插入 HTML 前会转义 `<`。

## 示例页面

- [Fieldnotes 文章集](/examples/articles)：文章列表与静态详情页，包含逐页 metadata 与 Article schema。
- [LaunchKit](/examples/product)：带临时交互清单的产品页示例，不需要后端或结账流程。
- [关于](/about)：有独立 canonical 和标题的简单页面。

文章数据位于 `src/content/articles.ts`。清单仅作临时交互演示，刷新后重置；可根据自己的项目改造。

## 部署与验证

通过 Vercel 按钮部署，或把仓库连接到现有项目。保持 Node.js 22、包管理器与 `package.json` 一致。在 Production 环境设置正式域名；Vercel 自动提供预览域名变量。

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm start
# 在第二个终端验证正在运行的网站：
pnpm test:seo
```

`test:seo` 检查真实 HTML 响应、逐页 canonical/OG、metadata、索引、sitemap、JSON-LD、链接、404 和 PNG 图片。设置 `SEO_CHECK_URL` 可验证可访问的部署地址。

使用自定义域名时，在 Vercel 选择主域名，并让其他别名保留路径跳转到主域名。模板没有硬编码跳转到作者网站。发布后检查生产部署和实际 HTML；构建成功不等于公开网站已验证。

## 从 0.2 升级

1.0 升级 Next.js 与 React，以 ESLint CLI 替代 `next lint`，加入 CI 和针对性 SEO 检查，修复逐页 canonical 与部署域名解析，并增加双语文档、文章/产品示例、分享图和可视化 SEO 预览。

升级时保留自己的生产环境变量和内容，重点检查 `src/config.ts`、metadata 导出、sitemap 与 Markdown 链接。MIT 授权不变。

[GitHub 源码](https://github.com/wangrunlin/seo-nextjs-starter) · [English documentation](/docs)
