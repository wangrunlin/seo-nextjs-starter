# SEO Next.js Starter 升级与再推广计划

日期：2026-09-11。状态：用户已批准整体升级、提交推送和 Vercel 同步；以下保留批准时的调查与计划。实际交付、验证和外部同步状态见 `v1-release-review.zh-CN.md`。

## 推荐方向

把项目升级为「带可运行 SEO 示例、可检查输出、可直接部署的 Next.js 开源启动模板」。保留 Next.js App Router、TypeScript、Tailwind 和已有 Vercel 收录，不换技术栈。优先让开发者能确认 SEO 配置正确，再通过截图、教程与模板目录带动采用和作者产品访问。

目标用户：独立开发者、小团队，以及要发布产品站、内容站、工具站的开发者。首轮控制在约 2–3 个开发工作日，随后用 7–14 天验证推广；这是工作量估算，Vercel 收录页人工更新等待另计。

本轮 README：保留 Toolbox Hub，移除 Stair Calculator，加入 H3Run、H3MaxLive、Image 2.5，使用“作者的其他项目”标题。这样保留推广入口，也不暗示三个产品都由本模板构建。英文、中文逐项对应；徽章、图像和部署按钮保留。

## 现状与证据

核验基线：main `a9837a047bc0cf08cd3c24f3f64b3a7071530058`，最后代码提交 2025-12-08；本地 HEAD 与 GitHub API 一致。仓库是 Public template，39 Stars、3 Forks、4 个未关闭 Issue，未列出 GitHub Releases。数字仅代表本次核验时间。[仓库](https://github.com/wangrunlin/seo-nextjs-starter)

| 范围 | 当前事实 | 影响与处理 |
| --- | --- | --- |
| 版本 | package 为 0.2.1；Next 15.2.6、React 19.0.0；Next 配套包仍为 15.2.3 | 先升级与验证框架组合；package、锁文件、README、Release 对齐 |
| 安全 | `pnpm audit --json` 返回 Critical 2、High 38、Moderate 26、Low 5 | 这是依赖树报告，不等于 71 个可利用的线上漏洞；优先排查 Next 运行时风险，区分 Windows、Image Optimization 等适用条件 |
| 正式域名 | `seo-nextjs.alin.run` 与 `seo-nextjs-starter.vercel.app` 的首页、docs、about 均可访问；当前 canonical 指向前者 | 推荐继续用 `seo-nextjs.alin.run` 作为 canonical 主站，避免无必要的域名迁移；后者保留为 Vercel demo 入口，安排逐路径重定向/规范化 |
| canonical | `/docs`、`/about` 都指向同一个首页 URL | 改为各自页面 URL；修正页面级 title、description、OG URL |
| URL 配置 | `src/config.ts` 用 `NEXT_PUBLIC_VERCEL_URL` 判断，却读取 `VERCEL_PROJECT_PRODUCTION_URL` | 统一服务端生产域名解析；显式站点 URL 优先，校验协议与有效性；防止 `https://undefined` 和克隆后指向作者域名 |
| sitemap | 只列首页与 about，漏 docs；lastModified 用构建时 `new Date()` | 纳入实际可索引路由；内容更新时间有依据才填写，不把构建时间当编辑时间 |
| docs | 构建时直接读取英文 README；有两个 H1；中文相对链接 `/README-zh.md` 实测 404 | 文档与仓库入口分开，修正文档标题和相对文件链接；真正提供对应译文路由后再配 hreflang |
| 结构化数据 | 三个页面未发现 JSON-LD | 添加与页面可见内容一致的 WebSite / SoftwareSourceCode；文章示例用 Article、BreadcrumbList；不加虚构评分 |
| OG 与 icon | OG API 可访问，但内容只是站名；layout icon 使用 `?<generated>` 占位写法 | 做可复用品牌卡与逐页面标题，使用 Next 文件约定，核验实际输出 |
| 外链 | GitHub README、Vercel 收录页的项目链接带 `nofollow`；自有 docs 渲染器也统一添加 `nofollow` | GitHub/Vercel 属性由平台决定；自有站按链接关系处理。多个入口有曝光与引荐价值，不预先承诺权重或排名 |
| 视觉 | 首页是长标题、蓝色渐变、三张泛化功能卡；缺少 SEO 配置示例和模板截图；Header 暗色样式不完整 | 突出 SEO 成果预览和部署动作，保留图形、品牌标识、截图，而非改成纯文本 |
| 工程 | 无 CI workflow；`lint` 仍为 `next lint`；未固定 engines / packageManager | 升级 Next 16 时改 ESLint CLI；增加最少的 lint、typecheck、build 和 SEO 输出检查 |

代码证据：`src/config.ts`、`src/app/layout.tsx`、`src/app/sitemap.ts`、`src/app/robots.ts`、`src/app/docs/page.tsx`、`src/components/MarkdownContent.tsx`、`src/components/Header.tsx`、`src/app/api/og/route.tsx`。当前 `/api/og` 返回 200。

依赖审计原始输出：本地 `/private/tmp/seo-nextjs-starter-audit-20260911.json`。其中两条 Critical 均关联 Next：Windows 托管条件下的 [GHSA-p293-qw3h-jr36](https://github.com/advisories/GHSA-p293-qw3h-jr36)，以及 AVIF 图片优化条件下的 [GHSA-2xp9-vwfh-vxw4](https://github.com/advisories/GHSA-2xp9-vwfh-vxw4)。未对生产站做漏洞利用测试，不能据此宣称生产已被利用。

## 版本与工程升级

以下 latest 来自 2026-09-11 npm registry 元数据，是计划基线；实施当天重新查询，并检查组合兼容性，不直接批量执行 update latest。查询来源示例：[Next](https://registry.npmjs.org/next/latest)、[React](https://registry.npmjs.org/react/latest)、[TypeScript](https://registry.npmjs.org/typescript/latest)、[ESLint](https://registry.npmjs.org/eslint/latest)、[pnpm](https://registry.npmjs.org/pnpm/latest)。

| 项目 | 当前锁定 | 本次查得 latest | 建议 |
| --- | --- | --- | --- |
| Next.js | 15.2.6 | 16.3.4 | 优先升级至经审计和构建验证的稳定 16.x 补丁 |
| React / React DOM | 19.0.0 | 19.3.0 | 同步升级、保持版本匹配 |
| @next/third-parties / eslint-config-next | 15.2.3 | 16.3.4 | 与 Next 同步 |
| Tailwind / PostCSS 插件 | 4.0.15 | Tailwind 4.3.3 | 保留 v4，插件同步验证 |
| TypeScript | 5.8.2 | 7.0.2 | 独立验证主版本迁移；无必要不与框架升级一次混改 |
| ESLint | 9.23.0 | 10.10.0 | 先恢复可用的 ESLint CLI，确认 Next 配置兼容后再升主版本 |
| pnpm | 未在 packageManager 固定 | 12.3.4 | 固定一个本地、CI、Vercel 均验证通过的版本，避免默认版本漂移 |

Next 16 的 Node 最低要求为 20.9；项目应固定在 Vercel 与 CI 支持的 Node LTS，并同步 engines、类型定义与安装说明。官方升级流程包括 `next lint` → ESLint CLI；使用升级指南检查 Turbopack 与配置变化。[Next 16 升级指南](https://nextjs.org/docs/app/guides/upgrading/version-16)

执行拆分：

1. 框架及直接依赖、配置修复、锁文件更新；最小 CI 验证独立通过。
2. SEO 行为与文档示例；少量回归覆盖真实错误，不为纯样式编写重复实现的测试。
3. 视觉与上线资料；最后创建一致的版本标记与 Release。

版本建议：README-only 不升 package 版本。整体升级验收后统一发布 `v1.0.0`，将其定位为首个完整、可验证的 SEO 版本；使用 CHANGELOG、迁移说明与 GitHub Release，不因为宣传称“第二版”就直接跳到 v2。若整体升级延期，先做有明确修复内容的维护版，避免让安全更新等待视觉设计。

## SEO 的核心交付

核心应是拿来可用的配置与示例，不是罗列 Next.js 的通用能力。

- 一个明确的站点配置入口：站名、正式域名、默认标题、默认描述、社交图；生产/Preview 的 canonical 与索引策略分开。采用者不需要编辑多处常量。
- 每页自引用 canonical、独立 title/description/OG；不存在页面返回真实 404。筛选、查询参数的 canonical 策略写清楚。
- sitemap、robots 与真实路由保持一致；Preview 不进入正式 sitemap；设置 noindex 时允许爬虫读取该指令。
- 三个小型可运行示例：首页、内容列表/文章详情、产品或工具介绍页；包括动态 metadata、面包屑、内容更新时间、OG 和内链。保留已有 `/docs`、`/about` 可达。
- 文档展示“配置代码 → HTML/搜索结果预览 → 如何验证”，重点覆盖部署换域名、页面 metadata、OG、sitemap、robots、JSON-LD、Preview 索引。
- SEO 验证以生产响应为依据，不只看客户端 DOM；关键断言覆盖无 JS 可读正文、正确 canonical/OG、可抓取链接、状态码与资源。
- 国际化先保持英文演示 + 完整中文 README。仅在真实翻译路由上线后添加双向 hreflang，不把 README 切换按钮当作网站国际化实现。
- 自有 docs 中，维护者撰写的普通外链保留 `noopener noreferrer`，按实际关系决定是否加 nofollow；用户内容和赞助分别处理，不动 GitHub/Vercel 平台行为。[Google 外链关系说明](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links)

README 的功能列表同步改成实际具备的功能；例如当前没有 Sass 依赖，不继续泛称开箱即用 Sass。MIT 授权保持不变。

## 视觉方向

推荐「轻量开发者工具站 + 可视化 SEO 示例」：白/浅灰底、炭黑正文、电蓝强调色，保留 Next.js / GitHub / Vercel 图标和现有徽章。桌面内容宽度约 1120–1200px，手机单列；深色模式统一覆盖导航、正文、卡片和代码。

首页结构：

1. 顶栏：品牌、Examples、Docs、GitHub、Deploy 按钮；移动菜单可键盘操作并正确标注展开状态。
2. 首屏左右两列：左侧简洁定位与主 CTA；右侧真实可运行的 metadata、搜索结果预览和 OG 卡切换。预览清楚标明示例，不模拟真实 Google 排名或流量。
3. “What ships with the starter”：用 4–6 张紧凑功能卡展示 canonical、sitemap、OG、schema、内容示例、部署；卡片都链接到对应示例或文档。
4. 三步启动：创建模板、填写站点配置、部署。主 CTA 为 Deploy to Vercel，次 CTA 为 Use GitHub Template / View Demo。
5. 可运行页面预览与文档入口；性能数据只有实际测量后展示，并写明日期与环境。
6. 底部作者项目：保留三个产品 logo 与短描述；不挤占模板首屏，也不强制采用者在成品站保留外链。

拟用英文文案及完整中文对照（计划文案，待实际能力完成后发布）：

| 英文 | 中文 |
| --- | --- |
| Ship your Next.js site with SEO foundations in place. | 发布 Next.js 网站，从一开始就配好 SEO 基础。 |
| A lightweight starter with page metadata, sitemaps, social images, and practical examples you can inspect and adapt. | 轻量启动模板，内置页面元数据、站点地图、社交分享图，以及可检查、可修改的实用示例。 |
| Deploy to Vercel | 部署到 Vercel |
| Use GitHub Template | 使用 GitHub 模板 |
| Explore SEO Examples | 查看 SEO 示例 |
| Projects from the Author | 作者的其他项目 |

交付视觉资产：README 首页截图、Vercel 缩略图、1200×630 社交图，统一色彩与版本文案。使用实际页面截图，不另做与成品不一致的宣传稿。首轮不需要动画视频或新设计系统。

## 外链更新与 Vercel 收录维护

| 入口 | README 更新的影响 | 验收方法 |
| --- | --- | --- |
| 英文/中文 GitHub README | 提交到 main 后可显示三条项目链接 | 公开页面 href 与目标站回读；记录 nofollow |
| 演示站 `/docs` | 代码在构建时读取 README；要新部署成功才更新 | 确認实际部署 SHA、SSR 链接与页面内容 |
| Vercel 模板页 | 当前展示旧 README 内容；自动同步周期/机制未证实 | 更新后访问原收录 URL，逐条确认；若仍旧，走模板维护/支持流程申请更新，保留原 slug |

[Vercel 现有收录页](https://vercel.com/templates/next.js/seo-starter) 的 Stair 与 Toolbox 链接本次均带 `nofollow noopener noreferrer`；GitHub 为 `nofollow`。因此可以争取多个可点击入口与引荐流量，但不能简单算成多个独立引荐域名，更不能保证传递排名权重。

保留原 `seo-starter` slug 与公开演示地址，避免重建条目丢失已有传播路径。更新资料包包含：仓库、实际演示、英文标题/简介、当前截图、框架版本、变更摘要。标题和缩略图是独立资料，不假设修改 README 会同时更新它们。官方社区有维护者请求修改既有模板资料的记录，但不代表当前自动同步规则。[Vercel 模板维护讨论](https://community.vercel.com/t/request-to-modify-specific-fields-in-my-documentation-template-vercel-template/839)

## 再推广安排

先发布一次有完整演示的升级，再把同一套材料拆成几个有用的技术内容。模板使用、文档访问、有效产品点击是目标；Stars 只是辅助信号。

| 时间 | 工作 | 渠道与交付 |
| --- | --- | --- |
| 开发第 1 天 | 版本与 SEO 错误修复、CI、配置说明 | 仓库与隔离 Preview；先保证新用户可安装、可部署 |
| 开发第 2–3 天 | 新视觉、实际示例、双语 README、截图、回归 | 完整 v1.0 候选、Vercel 更新资料包 |
| 发布当天 | Release、迁移说明、演示站与收录页核验 | GitHub / 自有个人网站；在用户确认发布内容后更新 Vercel 资料 |
| 第 1–3 天 | 英文升级帖 + 中文实践文章 | 个人 X + 王润林个人站；分享最具体的 canonical/OG 示例，导向文档与 GitHub |
| 第 4–7 天 | 一篇 Next.js SEO 配置教程 + 一次示例拆解 | 自有文档作原文；挑选一个实际适合的开发者社区分发，先核对当前自推广规则 |
| 第 8–14 天 | 收集实际部署反馈，补首批使用案例，修复文档卡点 | 邀请 3–5 位开发者试用；联系 Next.js/Tailwind 资源维护者或 newsletter，具体外部消息另行审阅 |

首轮不把 Product Hunt 当作关键路径，不开付费推广，不增加注册、邮件收集、后台或专门的营销自动化。已有 GitHub、Vercel、个人站与 X 足够验证这轮升级。

拟定文章题目：

- “Next.js SEO Starter: Metadata, Sitemaps, and Social Images That Work Together.” / “让 Metadata、Sitemap 与社交分享图协同工作的 Next.js SEO 模板。”
- “Why every page should not canonicalize to your homepage.” / “为什么不能把所有页面的 canonical 都指向首页。”
- “From GitHub template to a deployed site: a practical SEO checklist.” / “从 GitHub 模板到网站上线：一份实用 SEO 检查表。”

推广实验与指标：以当前 39 Stars / 3 Forks 为公开基线，发布前另取有权限的流量数据；未获得的下载/部署/访问数记为未知。先邀请 3–5 人完成独立部署，记录从模板创建到正确配置域名的步骤与卡点。观察 14 天内 Docs 访问、Deploy/Use Template 点击、实际成功部署反馈、提交案例及三个产品的引荐访问。

在自有演示站可使用现有可选 GA 记录 `deploy_click`、`template_click`、`docs_view`、`author_project_click`；不把维护者的分析 ID 默认带入别人克隆的项目。跨渠道链接只对自有可控页面安排统一 UTM，保留无追踪参数的 canonical。点击不是成功部署，Fork 也不是采用量；14 天后按真实转化决定继续教程分发还是优先修复上手体验。

## 发布验收与回退

- 两份 README 中无 Stair 旧链接，三个产品的名称、URL、英文中文含义一致。
- 新 clone 无现成 `.env` 也能按说明启动；生产域名由使用者设置；可选分析为空时不加载维护者统计。
- 固定环境下 frozen install、lint、typecheck、build 通过；审计区分运行时和开发依赖，记录未解决问题的适用条件。
- `/`、`/docs`、`/about`、新示例、404、sitemap、robots、OG 的状态与 metadata 正确；中文文档入口不再 404。
- 320px、390px 与桌面视口、键盘导航、深浅色、图片加载与长代码块均可用。
- Core Web Vitals / Lighthouse 在公开候选站实际测量后记录，不预先声称“100 分”；发现实际瓶颈再优化。
- 正式发布时核对远程 HEAD、CI、Preview 和目标 Vercel 项目；发布后检查生产 SHA、公开页面和 Vercel 原收录页，三者分开记录。
- 框架升级、SEO 行为、视觉内容分别保留聚焦提交；生产异常可回退到已验证部署，保留原域名、URL 和模板 slug。

本计划的历史基线已由 v1 实施更新。外部推广文案见 `relaunch-copy.zh-CN.md`；真实发布与收录状态以 `v1-release-review.zh-CN.md` 为准。
