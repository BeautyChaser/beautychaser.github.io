# Callingforwind

跨领域计算物理与 Physical AI 系统架构师
Cross-domain Computational Physics & Physical AI Systems Architect

此仓库同时保存 Vue/Vite 源码和可直接发布的静态输出。GitHub Pages 的访问入口是仓库根目录的 `index.html`。

## 文件结构

```text
src/
  index.html            # 源码 HTML 入口，修改页面标题、描述等
  main.js               # Vue 入口
  App.vue
  components/           # 页面和组件
  assets/               # 源图片、样式等资源
markdown/               # 自动收录、支持标题和正文搜索的 Markdown 文章
  news/                 # 本站动态，与外站更新一起进入 News
config/                 # 已确认的平台主页、订阅源和手工动态
public/                 # 原样复制到发布目录的图标等文件
scripts/                # 构建输出同步与验证
.github/workflows/      # 链接收录变更后的快照整理与发布
agent/                  # 换电脑、换模型后的维护与交接资料
AGENTS.md               # 后续模型的维护入口
reference/              # 原项目的设计参考
design_logic/           # 原项目的设计说明
dist/                   # 本地构建中间产物，Git 忽略
index.html              # 构建生成的 GitHub Pages 入口，提交到 Git
assets/                 # 构建生成的 JS、CSS、字体等，提交到 Git
.nojekyll               # 让 Pages 直接提供静态文件
.pages-manifest.json    # 记录生成文件，供下次构建清理过期输出
```

修改 `src/`、`public/` 中的源文件。根目录 `index.html`、`assets/` 和发布用图标由构建更新，不要直接编辑。原始参考工程位于 `D:\ProgramPj\MyWebPage\my_web_page`，本仓库已经独立保存构建所需文件。

## 本地开发与构建

需要 Node.js `^20.19.0` 或 `>=22.12.0`。

```shell
npm ci
npm run dev
```

发布前在仓库根目录运行：

```shell
npm run build
npm run check
npm run preview
```

`build` 先生成 `dist/`，成功后同步到仓库根目录，并按清单清理过期输出。构建配置使用相对资源路径 `./`，支持用户站点根路径和仓库子路径。`preview` 通过本地 HTTP 服务预览相同的构建内容；正式访问也使用 HTTP/HTTPS。

## GitHub Pages

1. 将源码和根目录构建输出一起提交、推送到 `main`。
2. 在 GitHub 仓库打开 **Settings → Pages**。
3. **Build and deployment → Source** 选择 **Deploy from a branch**。
4. **Branch** 选择 **main**，目录选择 **/ (root)**，保存。
5. 等待 GitHub Pages 部署完成，访问 <https://beautychaser.github.io/> 或 <https://beautychaser.github.io/index.html>。

此方式直接发布已经提交的根目录静态文件，不需要 GitHub 执行 npm 构建。以后更新内容时，重新运行 `npm run build` 和 `npm run check`，将源码和输出一并提交后正常推送即可。

GitHub Pages 发布目录与入口说明：[GitHub 官方文档](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。Vite 相对路径配置：[Vite 官方文档](https://vite.dev/config/shared-options.html#base)。

## 后续维护

先阅读根目录 `AGENTS.md`，再查看 `agent/README.md` 中的资料索引。项目背景、目录职责、开发发布流程以及最近交接状态均保存在仓库中，换电脑或换模型后可以继续使用。

新增文章直接放入 `markdown/`，以第一个 `# 一级标题` 作为文章标题。放在 `markdown/news/` 下并以日期命名的本站动态会与外站条目一起进入首页 News 栏和独立 News 页面。顶部搜索框支持 Markdown 标题、正文与多个空格分隔的关键词，不需要后端。发布前仍需构建并提交根目录输出，详见 `markdown/README.md`。

页面按手机、平板和桌面自适应。已在 320–1440px 的多个视口以及横屏下验证导航、搜索与文章布局；长公式和表格使用局部横向滚动。

整个网站支持中英文切换，包括文章全文、News、搜索提示与联系区。中文文章使用 `文章.md`，英文使用 `文章.en.md`，配对后按同一篇文章展示；构建前会检查两种版本齐全。语言选择保存在浏览器，分享页面可以使用 `?lang=zh` 或 `?lang=en`。正文约 17px，手机通过重排保证可读性。

联系区左侧保留邮箱和 GitHub，右侧名片仅展示微信、领英和 QQ。知乎、bilibili 和领英的公开主页统一放在 News；「前往主页 ↗」位于各平台卡片右上方。

## 跨平台 News

独立页面为 `index.html?lang=zh#news` / `index.html?lang=en#news`，提供知乎、bilibili、领英与本站更新的时间线、筛选和原文链接。主页配置在 `config/news-sources.json`，作者确认的条目在 `config/news-manual.json`。

以后直接告诉维护 AI「同步这些文章」并附链接即可，由 AI 收录、核实可访问的原文信息、构建和发布。不能读取原文时先保存链接，明确显示收录日期，补充标题后继续更新。批量加入链接可用 `npm run news:add -- "文章链接"`，再运行 `npm run news:sync`、构建和检查。

当前三个平台采用按链接收录，已经关闭每 30 分钟的失败抓取；GitHub 工作流改为收录配置变更或手动触发。浏览器仍能读取最新已发布快照。只有确认可用的公开来源才启用自动订阅。完整流程见 `agent/NEWS_SYNC.md`。

远程仓库保留自定义域名 `callingforwind.top`，由根目录 `CNAME` 配置。GitHub Pages 地址可能跳转到 [正式网站](https://callingforwind.top/index.html)。
