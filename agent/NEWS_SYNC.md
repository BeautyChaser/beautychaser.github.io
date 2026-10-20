# News 链接收录与维护

## 用户当前选择的流程

2026-10-20 用户明确调整：不能自动同步的平台，每次由用户直接告诉 AI「同步这些文章」并提供链接，AI 完成收录与发布，不要求用户手工编辑 JSON。

知乎、bilibili、领英当前均采用按链接收录，config/news-sources.json 中的 feeds 为空。原公共 RSSHub 在本机和 GitHub runner 均返回过 403，已移除每 30 分钟的定时抓取。之后只有确认可用的来源才启用其自动读取能力。

## AI 收到「同步」与文章链接后

1. 阅读 AGENTS.md、本文件和 HANDOFF.md，检查 Git 状态及远程新提交，保留用户改动。
2. 区分文章链接与平台主页，使用用户明确提供的文章/视频链接，不将主页当作文章。当前平台身份均由用户确认：
   - 知乎：<https://www.zhihu.com/people/zhu-yao-mei-zhui>，Callingforwind，标记 ZH。
   - bilibili：<https://space.bilibili.com/354151470>，Callingforwind。
   - 领英：<https://www.linkedin.com/in/jinfeng-zhao-641647296/>，Jinfeng Zhao。
3. 读取可公开访问的原文，核实标题、真实发布时间与简短摘要，可提供实际翻译的中英文内容，不复制整篇外站文章。不绕过登录、验证码或访问限制，不保存平台凭据。
4. 可执行批量命令：`npm run news:add -- "真实文章链接" "另一条真实文章链接"`。它自动识别平台、去除跟踪参数并去重，更新 config/news-manual.json。
5. 能核实原文信息时补齐 title、summary 和 publishedAt，保留 collectedAt。无法访问时先仅收录链接：publishedAt 为 null，显示通用链接名称及标题待补充说明，日期明确标为「收录于」，不是发布时间。用户只给链接也能收录；不得为补齐字段编造原文信息。
6. 运行 `npm run news:sync`、`npm run build` 和 `npm run check`，检查首页汇总、独立 News、平台筛选、原文 URL、日期类型与中英文。
7. 按当前会话已经获得的发布授权正常提交、推送 main 并验证正式页面；不得强制推送。更新交接文档，说明收录条数以及哪些原文信息尚未获取。

用户可以直接说：「把这些链接同步到 News：……」。这表示维护网站，不表示在知乎、B 站或领英发布内容或发送消息。

## 目录与界面

- src/components/NewsStrip.vue：首页最新三条。
- src/components/Page/NewsPage.vue：独立的 index.html?lang=zh#news / index.html?lang=en#news，包含筛选、刷新、原文与空状态。
- 三个平台的「前往主页 ↗」位于卡片头部右侧原箭头位置，底部不重复。
- 页脚左侧仅邮箱与 GitHub；右侧名片仅微信、领英、QQ。知乎与 bilibili 放在 News，不加回联系区。
- config/news-sources.json：平台主页、短标记、允许的原文域名、可选的有效订阅。
- config/news-manual.json：用户提供的文章条目。
- scripts/add-news-links.mjs：批量加入链接；scripts/sync-news.mjs：整理手工条目及可用订阅。
- public/news-feed.json：快照源；构建复制为根目录 news-feed.json，后者不直接编辑。
- src/data/news-core.js：校验、去重、日期、缺失元信息与语言；news.js：合并本站动态并刷新快照。
- 本站动态仍在 markdown/news/，保持中文 .md / 英文 .en.md 配对和标题、正文搜索。

## 条目格式

```json
{
  "source": "linkedin",
  "url": "https://www.linkedin.com/posts/真实动态地址",
  "publishedAt": null,
  "collectedAt": "2026-10-20T22:00:00+08:00",
  "kind": "article",
  "title": {},
  "summary": {},
  "origin": "manual"
}
```

此例只说明格式，不作为真实新闻发布。title / summary 可填中文 zh 与英文 en；没有译文时保留原语言。已知发布时间时用它排序；未知时按真实收录时间排序，显示北京时间，并明确日期含义。

## 发布与可选自动来源

.github/workflows/sync-news.yml 在手动运行或收录配置变更时执行，不再有 schedule。任务整理快照、构建、检查并正常提交发布物，再请求 main / (root) 的 Pages 更新。

浏览器打开时、切回页面时和每 5 分钟读取最新公共快照；「刷新动态」读取已发布快照，不会擅自访问平台账号。GitHub 使用 GITHUB_TOKEN 的提交不会自动触发分支 Pages，因此任务显式请求构建，网页也读取配置里的 GitHub Raw 快照并保留本地发布快照回退。换仓库/分支时更新 liveFeedUrl，本地预览只用本地快照。

RSS/Atom 解析能力保留，只对已验证可用、获准的公开来源配置 feeds。若重新启用定时执行，按用户当时的意图设置，不悄悄恢复对失败来源的重复抓取。失败保留最近成功内容，不伪装成成功或空订阅。

自动提交可能由 Linux 构建；同步远程后若要本地字节检查，先运行 npm run build，避免与旧 dist/ 混比。并发推送先同步远程，不强制覆盖。

## 验证与参考

- npm run check 覆盖链接收录/去重、缺失元信息、北京时间收录日期、RSS/Atom、失败保留、手工译文与删除。
- 私有测试数据只放忽略的 .tmp/，不提交为真实外站动态。
- [GitHub GITHUB_TOKEN 与 Pages](https://docs.github.com/en/actions/concepts/security/github_token)
- [请求 Pages 构建](https://docs.github.com/en/rest/pages/pages#request-a-github-pages-build)
- [领英个人动态读取权限](https://learn.microsoft.com/en-us/linkedin/marketing/lms-faq)
