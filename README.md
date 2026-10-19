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
  news/                 # 首页顶部 News 动态，按日期命名
public/                 # 原样复制到发布目录的图标等文件
scripts/                # 构建输出同步与验证
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

新增文章直接放入 `markdown/`，以第一个 `# 一级标题` 作为文章标题。放在 `markdown/news/` 下并以日期命名的文章会进入首页最上方的 News 栏。顶部搜索框支持标题、正文与多个空格分隔的关键词，不需要后端。发布前仍需构建并提交根目录输出，详见 `markdown/README.md`。

页面按手机、平板和桌面自适应。已在 320–1440px 的多个视口以及横屏下验证导航、搜索与文章布局；长公式和表格使用局部横向滚动。

整个网站支持中英文切换，包括文章全文、News、搜索提示与联系区。中文文章使用 `文章.md`，英文使用 `文章.en.md`，配对后按同一篇文章展示；构建前会检查两种版本齐全。语言选择保存在浏览器，分享页面可以使用 `?lang=zh` 或 `?lang=en`。正文约 17px，手机通过重排保证可读性。

联系区已加入知乎账号 **Callingforwind**，支持展示和复制账号名。

远程仓库保留自定义域名 `callingforwind.top`，由根目录 `CNAME` 配置。GitHub Pages 地址可能跳转到 [正式网站](https://callingforwind.top/index.html)。
