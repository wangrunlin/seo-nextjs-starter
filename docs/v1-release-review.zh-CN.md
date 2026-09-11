# v1.0 发布验收

日期：2026-09-11。用户已授权整体升级、提交推送与 Vercel 同步。公开提交信息使用英文 Conventional Commits，延续仓库历史。

## 已实现

- Next.js 16.3.4、React 19.3.0、Tailwind 4.3.3；固定 Node 22 与 pnpm 11.24.0，保留 TypeScript 5。
- 重做首页视觉，保留徽章与部署按钮，加入真实首页截图、图标、可编辑 SEO 预览和作者项目卡片。
- 逐页 canonical/title/description/OG/Twitter；文章、网站与面包屑 JSON-LD；1200×630 动态分享图。
- 文章列表、两篇示例文章、带交互检查表的产品页，以及英中文档路由。
- 修复 README 中文入口、文档 sitemap、继承首页 canonical、Vercel 域名回退和普通文档外链的 blanket nofollow。
- 本地与 Preview noindex，生产显式域名；不向使用者默认配置写入作者域名或分析 ID。
- 双语 README、CHANGELOG、迁移说明、HTTP SEO 验证脚本与 GitHub Actions。

## 验证记录

- Node 22.23.2：lint、类型检查、6 项站点配置测试、生产构建通过。
- 本地实际 HTTP 响应：137 项检查通过，覆盖 9 个页面、canonical/OG、双语关联、文档锚点、sitemap/robots、JSON-LD、作者外链、真实 404、PNG 及旧路由重定向。生产索引配置与本地 noindex 配置均验证过。
- 完整 pnpm audit：2026-09-11 返回 critical/high/moderate/low 均为 0；这是当时 registry 审计结果，不是永久安全保证。
- 浏览器检查：桌面、390px、320px，主题切换、预览 tabs、手机菜单、检查表交互。修复 320px 文档代码块撑宽页面，复核 scrollWidth 等于 viewport。
- 不展示未经测量的 Lighthouse/CWV 分数。性能测量与公开部署记录在发布后补充。

## 配置与边界

- 生产项目沿用 `wangrunlins-projects/seo-nextjs-starter`，Node 22；生产 origin 配置为 `https://seo-nextjs.alin.run`。
- 保留原 `seo-starter` Vercel 收录 slug 与演示地址。Git 自动部署与模板市场的内容同步独立验收。
- 现有可选 GA 配置保留；本轮没有加入新的统计账号。自定义点击事件属于可选后续实验。
- 没有发布 X/社区推广帖、发送试用邀请或购买推广。文案包已准备，可在后续授权后分发。
- 依赖、页面及文档升级可通过恢复旧 Git 提交与 Vercel 已验证部署回退；没有数据库迁移。

## 外部发布状态

- 功能提交：`003978acef9e4cdbccc9f6b0bbf9d4ae149bbb37`，已推送 main；提交标题为英文 Conventional Commits。
- GitHub CI：候选 [34560442138](https://github.com/wangrunlin/seo-nextjs-starter/actions/runs/34560442138) 与 main [34560553382](https://github.com/wangrunlin/seo-nextjs-starter/actions/runs/34560553382) 均成功。
- Vercel Preview：`dpl_AKXQMR3iLT7ZKwKSG6gyWRB74dcF`，Ready，SHA 对应功能提交。通过已登录浏览器核验 noindex、逐页 canonical 与文档 hreflang；匿名请求会进入 Vercel 认证页，因此不把匿名脚本错误视为站点 SEO 错误，也未关闭保护。
- Vercel Production：`dpl_9yJKVoJpibdPaonHXDoxETBvmGbS`，Ready，SHA 对应功能提交。公开 https://seo-nextjs.alin.run 的 137 项 HTTP SEO 检查通过，生产 indexable=true。
- 原演示别名 `seo-nextjs-starter.vercel.app` 与 `seo-nextjs.wangrunlin.com` 均在平台层 308 到 `seo-nextjs.alin.run`；curl 已验证 `/docs/zh?ref=verification` 的路径及参数保留。
- [GitHub Release v1.0.0](https://github.com/wangrunlin/seo-nextjs-starter/releases/tag/v1.0.0) 已发布，标记对应功能提交。仓库简介与 homepage 同步更新。
- 英文/中文 README 与实际站点均保留三条项目链接。浏览器已确认 H3Run 与 Image 2.5 图标完成加载，普通作者外链为 `noopener noreferrer`。
- Vercel 原收录页仍显示旧 Stair 链接、标题和缩略图。尚未同步；完整英文请求及中文对照见 `relaunch-copy.zh-CN.md`。发送 Support 请求/创建工单的明确授权待用户回复。

## 性能检查的实际范围

公开首页单次 curl：HTTP 200，首字节约 0.488 秒，总响应约 0.542 秒，压缩传输 9,762 字节。该样本来自本机网络，不能当作 CWV 或 Lighthouse 分数。

PageSpeed Insights 公共 API 返回配额耗尽；可用浏览器接口不支持 PerformanceTimeline 方法。因此没有取得可报告的 Lighthouse、LCP、CLS 或 INP 数据。代码保留静态生成、系统字体、延迟加载的固定尺寸作者图片；没有为了一个未取得的分数扩大重构。浏览器交互与实际资源加载已检查。

## Release 正文中文译文

SEO Next.js Starter v1.0 将 SEO 配置和它描述的页面整合在同一个可检查的模板中。版本采用 Next.js 16.3.4、React 19.3.0、Tailwind 4.3.3、Node 22 和 pnpm 11；提供新的响应式深浅色首页、可编辑 SEO 预览、可运行的文章与产品示例、逐页 canonical 与分享信息、动态 PNG、JSON-LD、sitemap/robots 和 Preview noindex。

同时提供英中文档、真实首页截图、迁移说明，以及 H3Run、H3MaxLive、Image 2.5 作者外链。GitHub Actions 检查 lint、类型、配置测试、生产构建和 137 项 HTTP SEO 断言。本地与 CI 通过，Vercel 生产部署及公开 HTTP 检查通过。2026-09-11 的依赖审计为零告警。Vercel 市场条目的编辑更新独立维护，目前待处理。

已有 0.2.x 项目升级前请阅读迁移说明，并把示例内容、生产域名和可选分析 ID 替换为自己的配置。
