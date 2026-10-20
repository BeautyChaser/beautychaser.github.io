# 平台动态维护

## 页面与数据

- 首页顶栏由 `src/components/NewsStrip.vue` 展示跨平台最新三条和平台主页入口。
- `index.html?lang=zh#news` / `index.html?lang=en#news` 是独立 News 页面，由 `NewsPage.vue` 渲染，支持平台筛选、原文链接、刷新和空状态。
- 本站动态继续维护在 `markdown/news/`，保持中文 `.md` / 英文 `.en.md` 配对和全文检索。
- 平台账号、短标记、允许的原文域名、订阅地址在 `config/news-sources.json`。当前账号由用户于 2026-10-20 明确提供：
  - 知乎：<https://www.zhihu.com/people/zhu-yao-mei-zhui>，名称 Callingforwind，短标记 `ZH`。
  - bilibili：<https://space.bilibili.com/354151470>，名称 Callingforwind。
  - 领英：<https://www.linkedin.com/in/jinfeng-zhao-641647296/>，名称 Jinfeng Zhao。
- 不将 `account.bilibili.com/account/home` 账号设置页用作公开主页，不猜测其他用户 URL。
- `config/news-manual.json` 是作者确认的外站条目；默认空数组，没有伪造的样例新闻。
- `public/news-feed.json` 为采集源文件；构建复制成根目录 `news-feed.json`，后者不直接编辑。
- `src/data/news-core.js` 负责链接验证、去重、日期和语言；`news.js` 将外站条目与本站动态合并供两个页面共用。

## 自动同步的实际含义

```shell
npm run news:sync
npm run build
npm run check
```

`scripts/sync-news.mjs` 在服务端读取 RSS/Atom，通过 RSSHub 订阅知乎文章、B 站视频和图文。采集只保留标题、最多 240 字摘要、日期、类型和原文 URL，不转发整篇外站内容。外站标题/摘要保留原语言，若作者提供译文可按当前界面语言选择；界面文案仍完整双语。

`.github/workflows/sync-news.yml` 按 UTC 每小时第 17、47 分钟执行（约每 30 分钟），可从 GitHub Actions 手动运行。定时任务在默认分支生效，GitHub 调度可能延迟；公开仓库长期无活动也可能停用 schedule，需要在 Actions 中重新启用。定时同步不是实时推送。

任务安装锁定依赖、采集、构建并检查，将源快照和根目录输出一起正常提交到 `main`。仅授予仓库内容与 Pages 写权限，不使用个人令牌。并发推送若遇到非快进错误，任务停止，下一次从最新 `main` 重试；不要强制推送。

GitHub 不会因 `GITHUB_TOKEN` 创建的提交自动构建 Pages，因此任务显式请求分支 Pages 构建。网站在线时还会读取配置中的 GitHub Raw 公共快照，避免动态完全依赖 Pages 重建；保留发布快照作为回退。访客打开页面、切回页面或每 5 分钟会检查一次数据，按钮可以立即检查现有快照。浏览器刷新不会直接抓取知乎/B 站，也不会立即启动后台采集。

本地 `localhost`/`127.0.0.1` 与开发模式不读取 GitHub Raw，确保预览使用本地最新数据。换仓库或分支后同步修改 `liveFeedUrl`。新版本不会被旧快照覆盖。

## 访问限制与故障处理

- 2026-10-20 本机联网验证：公共 RSSHub 知乎/B 站请求返回 403 或连接错误，尚未成功导入这些账号的外站条目。不要将页面/测试通过当作外站订阅已经可用；以快照中的各平台状态和真实条目为准。
- 收集失败时保留之前成功的条目和成功时间，显示同步暂不可用；部分来源失败使用 partial；只有有效空订阅才显示没有公开更新。网页取快照失败也保留已显示内容。
- 可在仓库 Settings → Secrets and variables → Actions → Variables 配置公开可用的 `RSSHUB_BASE_URL`，替换默认实例，保留上述路由。仅使用自有或获准的订阅服务，不存放平台账号密码或 Cookie，也不绕过验证码和登录限制。
- 手工运行且本机 Node 24 使用既有受信网络代理时，可用 `node --use-env-proxy scripts/sync-news.mjs`。普通网络和 GitHub runner 不需要此选项；不要关闭 TLS 校验。
- 领英个人动态读取是受限权限，当前未实现自动抓取。保留主页入口，由作者提供条目；只有存在适用且获准的订阅源时再接入 `feeds`，不能显示为已经自动同步。
- 知乎目前订阅的是个人文章；如需回答/想法等内容，接入实际可用的公开订阅并验证，不能将文章订阅描述成覆盖所有知乎活动。
- 新平台可以添加配置与公开订阅，原文链接必须位于其允许域名内。微信/QQ 私人联系账号不作为公开文章源。

## 收录一条外站动态

向 `config/news-manual.json` 的数组中添加真实条目。以下是格式说明，URL 和标题须替换为作者确认的真实内容，不直接发布本例：

```json
{
  "source": "linkedin",
  "url": "https://www.linkedin.com/posts/替换为真实动态地址",
  "publishedAt": "2026-10-20T08:00:00+08:00",
  "kind": "post",
  "title": { "zh": "已确认的中文标题", "en": "Confirmed English title" },
  "summary": { "zh": "作者提供的摘要。", "en": "An excerpt supplied by the author." }
}
```

`source` 为平台 ID，`kind` 可为 `article`、`video` 或 `post`；`title` 至少一种真实语言，未翻译时按原语言展示，不伪造机器翻译。`publishedAt` 必须为真实发布时间，明确时区。手工条目可更新与删除，采集不覆盖手工译文。运行同步、构建、检查后正常提交；手工配置推送也会触发同步任务。

## 验证依据

- `npm run check` 包含 RSS/Atom 解析、失败保留、部分失败、排序/去重、链接安全、手工双语与删除测试。
- 页面测试应区分真实快照和仅用于本地的测试数据；后者不得写入公开 `public/news-feed.json`。
- [GitHub GITHUB_TOKEN 与 Pages 说明](https://docs.github.com/en/actions/concepts/security/github_token)
- [请求 Pages 构建](https://docs.github.com/en/rest/pages/pages#request-a-github-pages-build)
- [GitHub 定时事件及其限制](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule)
- [领英官方读取权限说明](https://learn.microsoft.com/en-us/linkedin/marketing/lms-faq)
- [RSSHub 知乎文章路由](https://github.com/DIYgod/RSSHub/blob/master/lib/routes/zhihu/posts.ts)、[B 站视频路由](https://github.com/DIYgod/RSSHub/blob/master/lib/routes/bilibili/video.ts)、[B 站图文路由](https://github.com/DIYgod/RSSHub/blob/master/lib/routes/bilibili/article.ts)
