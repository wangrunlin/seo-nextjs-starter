# SEO Next.js 启动模板

[![中文](https://img.shields.io/badge/中文-Click_here-brightgreen?style=for-the-badge)](README-zh.md)
[![English](https://img.shields.io/badge/English-Click_here-brightgreen?style=for-the-badge)](README.md)

[![GitHub][GitHub]][GitHub URL]
[![GitHub stars][Stars]][Stars URL]
[![GitHub forks][Forks]][Forks URL]
[![GitHub issues][Issues]][Issues URL]
[![GitHub license][License]][License URL]
[![Last Commit][Last Commit]][Last Commit URL]

[![使用此模板][Use This Template]][Use This Template URL]

[![使用 Vercel 部署][Deploy with Vercel]][Deploy with Vercel URL]

## 预览

您可以在 [SEO Next.js 启动模板预览][Preview URL] 查看应用程序的实时预览。

## 使用此模板

您可以通过点击下面的按钮使用此模板创建自己的项目：

[![使用此模板][Use This Template]][Use This Template URL]

## 关于此模板

SEO Next.js 启动模板旨在帮助开发人员快速设置一个强大且对 SEO 友好的 Web 应用程序，使用 Next.js。此模板为构建优化搜索引擎和性能的应用程序提供了坚实的基础。

### 特性

- 服务器端渲染以提高 SEO
- 静态站点生成以实现快速性能
- 动态路由以实现灵活导航
- 内置 CSS 和 Sass 支持
- API 路由以实现后端功能

## 使用此模板的入门指南

要开始使用此模板，请按照以下步骤操作：

1. 克隆仓库。
2. 使用 `pnpm install` 安装依赖。
3. 根据提供的 `.env.example` 文件创建 `.env` 文件并填写您自己的值。
4. 可选，您可以直接编辑 `src/config.ts` 文件以设置您的配置值。
5. 使用 `pnpm dev` 运行开发服务器。

## 谁在使用此模板

此模板旨在为希望快速设置 SEO 友好应用程序的开发人员和团队提供支持。以下是一些使用此模板或类似设置的项目和公司的示例：

- [Toolbox Hub](https://toolbox-hub.com) - 在线工具箱 | 免费且实用的在线工具集合
- [楼梯计算器](https://stair-calculator.net) - 楼梯计算器专业版：精确设计与施工测量

### 提交您的网站

如果您使用此模板创建了项目并希望分享，请在 [提交您的网站](https://github.com/wangrunlin/seo-nextjs-starter/issues/new?assignees=wangrunlin&labels=website%2C+submission&template=submit-website.yml&title=%5BWebsite+Submission%5D%3A+) 问题中提交您的网站链接。

## 环境变量

您可以使用环境变量配置您的应用程序。`.env.example` 文件包含以下变量：

```dotenv
# 替换为您自己的网站名称
NEXT_PUBLIC_SITE_NAME="SEO Next.js 启动模板"

# 替换为您自己的标题
NEXT_PUBLIC_TITLE="SEO Next.js 启动模板 - 一个为 SEO 优化的 Next.js 项目启动模板"

# 替换为您自己的描述
NEXT_PUBLIC_DESCRIPTION="一个简单易用的启动模板，用于构建符合最佳实践和性能的 SEO 优化 Next.js 应用程序。"

# 替换为您自己的 URL
NEXT_PUBLIC_URL="https://example.com"

# <可选> 如果您想使用 Google Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID="your-google-analytics-id"
```

## Vercel 环境变量

如果您将应用程序部署到 Vercel，您可以直接在 Vercel 仪表板中设置环境变量。请按照以下步骤操作：

1. 转到您的 Vercel 仪表板并选择您的项目。
2. 导航到“设置”选项卡。
3. 向下滚动到“环境变量”部分。
4. 点击“添加”以创建新的环境变量。
5. 输入变量名称（例如，`NEXT_PUBLIC_SITE_NAME`）及其对应值。
6. 对所有需要设置的环境变量重复此操作。
7. 添加变量后，重新部署您的应用程序以应用更改。

有关在 Vercel 中配置环境变量的更多信息，请参阅 [Vercel 环境变量文档][Vercel Environment Variables]。

## 技术细节

### 元数据管理

在 Next.js 中，您可以使用各种约定管理元数据，包括 `robots.ts`、`sitemap.ts` 和 `layout.tsx` 中的布局元数据。这使您能够定义应用程序如何与搜索引擎和社交媒体平台交互。有关更多详细信息，请参阅 [Next.js 元数据文档][Next.js Metadata Documentation]。

### Open Graph 图像生成

为了优化社交媒体图像生成，您可以使用 Vercel 的 `@vercel/og` 库。此库允许您使用 HTML 和 CSS 创建动态 Open Graph 图像，从而增强您的内容在社交媒体平台上的展示效果。有关更多信息，请查看 [Open Graph 图像生成文档][Open Graph Image Generation Documentation]。

## SEO 资源

有关 SEO 最佳实践和指南的更多信息，请查看 [Ahrefs SEO 指南][Ahrefs SEO Guide]。

## 部署

您可以通过单击按钮轻松将应用程序部署到 Vercel。点击下面的按钮开始：

[![使用 Vercel 部署][Deploy with Vercel]][Deploy with Vercel URL]

## 文档

有关更多信息，请查看官方 Next.js 文档 [nextjs.org/docs](https://nextjs.org/docs)。

## 贡献

我们欢迎贡献！如果您想为此项目做出贡献，请遵循仓库中的指南。

## 许可证

此项目根据 MIT 许可证进行许可。

[Stars]: https://img.shields.io/github/stars/wangrunlin/seo-nextjs-starter?style=for-the-badge
[Stars URL]: https://github.com/wangrunlin/seo-nextjs-starter/stargazers
[Forks]: https://img.shields.io/github/forks/wangrunlin/seo-nextjs-starter?style=for-the-badge
[Forks URL]: https://github.com/wangrunlin/seo-nextjs-starter/forks
[Issues]: https://img.shields.io/github/issues/wangrunlin/seo-nextjs-starter?style=for-the-badge
[Issues URL]: https://github.com/wangrunlin/seo-nextjs-starter/issues
[License]: https://img.shields.io/github/license/wangrunlin/seo-nextjs-starter?style=for-the-badge
[License URL]: https://github.com/wangrunlin/seo-nextjs-starter/blob/main/LICENSE
[Last Commit]: https://img.shields.io/github/last-commit/wangrunlin/seo-nextjs-starter?style=for-the-badge
[Last Commit URL]: https://github.com/wangrunlin/seo-nextjs-starter/commits/main
[GitHub]: https://img.shields.io/badge/GitHub-wangrunlin%2Fseo--nextjs--starter-blue?style=for-the-badge&logo=github
[GitHub URL]: https://github.com/wangrunlin/seo-nextjs-starter
[Use This Template]: https://img.shields.io/badge/Use_this_template-Click_here-brightgreen?style=for-the-badge
[Use This Template URL]: https://github.com/new?template_name=seo-nextjs-starter&template_owner=wangrunlin
[Deploy with Vercel]: https://vercel.com/button
[Deploy with Vercel URL]: https://vercel.com/templates/next.js/seo-starter
[Preview URL]: https://seo-nextjs-starter.vercel.app/
[Vercel Environment Variables]: https://vercel.com/docs/projects/environment-variables
[Next.js Metadata Documentation]: https://nextjs.org/docs/app/api-reference/file-conventions/metadata
[Open Graph Image Generation Documentation]: https://vercel.com/docs/functions/og-image-generation
[Ahrefs SEO Guide]: https://ahrefs.com/seo
