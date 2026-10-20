# 项目背景与结构

## 身份与内容方向

- 中文定位：**跨领域计算物理与 Physical AI 系统架构师**。
- 英文定位：**Cross-domain Computational Physics & Physical AI Systems Architect**。
- 站点品牌沿用 `Callingforwind` / `CFW.`。
- 定位用于首页主标题、英文副标题、网页标题与描述。它是用户确认的目标与定位，不代表任何未经提供的任职或成果证明。
- 延续参考项目的纸张网格、木纹联系区和动态背景设计。

## 仓库与技术栈

- Git remote：`https://github.com/BeautyChaser/beautychaser.github.io.git`。
- 默认维护分支：`main`。
- 正式站点：`https://callingforwind.top/index.html`；GitHub Pages 地址 `https://beautychaser.github.io/` 跳转至此。
- Vue 3、Vite 8、JavaScript / Vue SFC；部分组件使用 TypeScript 语法。
- Markdown 由 `markdown-it` 渲染；公式使用 KaTeX；代码高亮使用 Prism。
- 包管理器为 npm，使用 `package-lock.json` 锁定依赖，换机使用 `npm ci`。
- Node 版本约束以 `package.json` 的 `engines` 为准。

## 目录映射

| 路径 | 职责 | 是否直接编辑 |
| --- | --- | --- |
| `src/index.html` | 开发 HTML 入口、标题、描述、favicon 引用 | 是 |
| `src/main.js` / `src/App.vue` | 应用入口与整体页面结构 | 是 |
| `src/components/Page/HomePage.vue` | 首页身份定位、背景与标题布局 | 是 |
| `src/components/WebHeader.vue` | 品牌、搜索框与导航标题 | 是 |
| `src/components/WebSearch.vue` | 标题与正文全文搜索、结果片段与文章入口 | 是 |
| `src/data/notes.js` | 自动扫描 Markdown、解析标题摘要、检索排序与 News 列表 | 是 |
| `src/data/content.js` | 配对译文、生成内容目录与双语检索，包含可独立测试的纯函数 | 是 |
| `src/i18n.js` | 全站语言状态、文案选择、日期、语言链接与偏好保存 | 是 |
| `src/components/WebMain.vue` | 首页与文章内容区域 | 是 |
| `src/components/NewsStrip.vue` / `src/components/Page/NewsPage.vue` | 首页跨平台更新栏与独立 News 页面 | 是 |
| `src/data/news.js` / `src/data/news-core.js` | 动态快照刷新、合并、本地化与链接校验 | 是 |
| `config/news-sources.json` / `config/news-manual.json` | 用户确认的平台主页、订阅源与手工条目 | 是 |
| `scripts/sync-news.mjs` / `scripts/news-feed.mjs` | 采集公开 RSS/Atom、保留缓存与同步状态 | 是 |
| `public/news-feed.json` / 根目录 `news-feed.json` | 采集快照源文件 / 构建复制的公开快照 | 采集 / 通过构建更新 |
| `.github/workflows/sync-news.yml` | 每 30 分钟采集、构建、提交快照并请求 Pages 更新 | 是 |
| `src/components/Contact.vue` | 联系区与社交账号展示 | 是 |
| `src/components/MarkdownLoader.vue` | Markdown、公式、代码渲染 | 是 |
| `src/components/Page/ContentPage.vue` | 文章正文容器，阅读时按需加载渲染器 | 是 |
| `markdown/` | 自动收录的 Markdown 源文章；README 不作为文章 | 是 |
| `markdown/news/` | 本站动态，文件名含日期，与外站动态一起展示 | 是 |
| `src/assets/` | 源图片和样式 | 是 |
| `public/` | 原样复制的图标与 `.nojekyll` | 是 |
| `vite.config.js` | 源码根目录、相对路径、构建目录与别名 | 是 |
| `scripts/sync-pages.mjs` | 将成功构建的 `dist/` 同步到根目录 | 是 |
| `scripts/check-pages.mjs` | 核对发布文件与 HTML/CSS 资源路径 | 是 |
| `scripts/check-translations.mjs` | 构建前检查所有文章与 News 的双语完整性 | 是 |
| `scripts/content.test.mjs` | 验证译文配对、稳定链接、双语检索和排序 | 是 |
| `index.html` / `assets/` / 根目录图标 | Pages 静态发布物 | 通过构建更新 |
| `.pages-manifest.json` | 生成文件清单与过期输出清理依据 | 自动生成 |
| `dist/` | 本地构建暂存，Git 忽略 | 自动生成 |
| `reference/` / `design_logic/` / `logic.md` | 参考工程保留的设计资料 | 按需 |
| `agent/` / `AGENTS.md` | 换机和换模型维护资料 | 是 |

## 关键设计决策

1. **一个仓库同时保存源码与产物。** 原仓库只有静态输出，现将参考工程源码迁入，今后在本仓库独立维护。
2. **两份 HTML 各司其职。** Vite 的 `root` 指向 `src/`，读取 `src/index.html`；根目录 `index.html` 专供发布，避免源码入口被构建覆盖。
3. **先构建，再同步。** Vite 生成 `dist/` 后才同步至仓库根目录。发布清单用于删除旧版本不再需要的输出。
4. **按分支直接发布。** Pages 使用 `main` + `/ (root)`，不要求在 GitHub 上安装依赖和执行 Vite。
5. **使用相对资源路径。** `base: './'` 避免迁移到仓库子路径后资源错误；favicon 通过 `%BASE_URL%` 引用。
6. **文章与全站搜索自动接入。** `src/data/notes.js` 通过 eager raw glob 读取根目录 `markdown/**/*.md`；一级标题与文件名决定标题，首段形成摘要，标题与正文共同检索。多关键词使用 AND 匹配，标题命中优先。
7. **文章通过 hash 打开。** `#note/<编码后的相对文件路径，不含 .md>` 无需后端路由和 Pages 404 回退，中文文件名与子目录均可用。
8. **阅读器按需加载。** 首页与索引先加载，Markdown/KaTeX 阅读器按需加载；公式使用直接依赖的 KaTeX，配置让插件和页面共享同一 ESM 实例，避免旧间接依赖版本与样式不一致。
9. **全站中英文切换。** 默认中文，顶部切换按钮更新全部界面、文章与元数据，并保存浏览器偏好。URL 中 `?lang=en` / `?lang=zh` 可指定分享语言，优先于已保存偏好；文章 hash 保持不变。
10. **译文按文件配对。** `.md` 或 `.zh.md` 对应中文，`.en.md` 对应英文；数据目录将它们合并为同一篇文章。搜索覆盖两种语言，结果只计一次并以当前语言显示。构建前必须通过双语完整性检查。
11. **保留已有自定义域名。** 远程提交 `c52a983` 添加 `CNAME`，内容为 `callingforwind.top`；已快进同步，发布时保留。GitHub Pages 域名可能跳转到该域名，线上验证需检查最终地址。
12. **独立的跨平台 News。** `#news` 渲染独立页面；首页顶部汇总本站与公开平台最新三条。知乎、bilibili 和领英的真实主页由用户提供。服务端定时采集与浏览器读取公共快照分开，失败保留最近成功内容；领英目前由作者收录，不宣称实时或自动抓取已成功。详见 `NEWS_SYNC.md`。

最初参考工程来自 `D:\ProgramPj\MyWebPage\my_web_page`。该路径仅记录来源，不是构建依赖。原工程中的旧 README 包含强制推送步骤，当前维护不采用该流程。
