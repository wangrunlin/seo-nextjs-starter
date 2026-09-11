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

待记录最终提交、CI、Preview、生产 SHA、Release 与 Vercel 模板条目结果。此处不把本地构建成功当作已上线。
