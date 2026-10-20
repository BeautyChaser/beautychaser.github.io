# 开发、发布与换机维护

## 在新电脑开始

1. 安装 Git 和满足 `package.json` 中 `engines.node` 的 Node.js。
2. 克隆 `https://github.com/BeautyChaser/beautychaser.github.io.git`，进入仓库。
3. 阅读根目录 `AGENTS.md` 和本目录资料。
4. 执行 `npm ci`，再执行 `npm run dev`。

不需要复制旧电脑的 `node_modules/`、`dist/`、npm 缓存或编辑器配置。仓库所在磁盘和文件夹名称可以改变；配置与构建脚本不依赖 `D:\blog`。

## 日常修改

```shell
git status --short
npm ci
npm run dev
```

依赖没有变化且已经安装时，可以直接开发。主要编辑位置见 `PROJECT_CONTEXT.md`。修改网页标题和描述使用 `src/index.html`；修改定位展示使用 `src/components/Page/HomePage.vue`。

文章放在根目录 `markdown/`，支持子目录与中文文件名。`src/data/notes.js` 自动扫描并打包内容，以首个一级标题作为标题，缺省时使用文件名，并生成摘要、笔记列表和搜索索引，不需要手工登记。`README.md` 作为维护说明排除。

每篇文章写中文 `.md` 和英文 `.en.md` 两份，文件路径主体保持一致。News 也使用同样配对规则。`scripts/check-translations.mjs` 会在构建前阻止缺少译文的版本发布。`src/i18n.js` 提供 `t(中文, English)`，新增界面文字也要提供两种版本。

本站动态放在 `markdown/news/YYYY-MM-DD-标题.md`，与外站条目一起进入首页顶部和独立的 `#news` 页面，本站正文仍可搜索。平台账号、自动同步、手工收录与访问限制见 `NEWS_SYNC.md`。头部搜索同时匹配 Markdown 标题与完整正文，关键词用空格分隔，必须全部命中，标题匹配优先。保存文件后开发服务器更新内容；正式网站需重新构建并发布。

检索与内容都在静态页面中，文章数量较大时再考虑拆分索引或引入专用搜索方案。当前不依赖数据库和后端。

## 生成与验证发布物

```shell
npm run build
npm run check
npm run preview
```

- `build`：构建至 `dist/`，再同步至根目录；保留源码与维护资料，清理清单内的旧输出。
- `check`：运行内容/双语搜索测试，检查译文完整性，再检查清单文件与 `dist/` 字节一致、根入口已编译、HTML/CSS 引用指向实际文件，并拒绝站点根绝对路径。
- `preview`：通过本地 HTTP 预览构建结果，访问终端输出的地址。

检查页面标题、中英文定位、图标、动态背景和联系区；涉及布局时同时检查窄屏。验证根目录发布文件时应使用普通静态 HTTP 服务；不要只依赖开发服务器，因为开发服务器会处理源文件与回退路径。

双语检查应覆盖首页、News、搜索结果、两种正文、页面标题/描述、辅助标签、切换后的刷新与偏好保存；使用 `?lang=en` 和 `?lang=zh` 验证分享链接。正文字号约 17px，搜索输入至少 16px，中文与英文都需要检查窄屏溢出。

根目录 `assets/` 专用于编译输出，不存放手工编写的源文件。手工维护的图标、图片放在 `public/` 或 `src/assets/`。不要向 `public/` 放入与源码配置、`agent/` 或根目录维护文件重名的输出。

## 提交与 GitHub Pages

1. 确认构建和检查通过。
2. 检查 `git diff` 与 `git status`，将源码、维护资料、根目录产物和 `.pages-manifest.json` 一并提交。排除依赖、缓存和用途不明的文件。
3. 正常推送 `main`，不要强制覆盖远程历史。
4. 仓库 **Settings → Pages → Source** 选择 **Deploy from a branch**，分支 **main**，目录 **/ (root)**。
5. 等待 Pages 部署完成，访问 `https://beautychaser.github.io/index.html`。

仓库已有 `CNAME` 指向 `callingforwind.top`，需保留，并验证最终页面 `https://callingforwind.top/index.html`。正常推送前先同步远程改动；不要用强制推送覆盖远程的域名或其他配置。

本地构建通过与 GitHub 已上线是不同状态。只有推送、部署成功并验证线上页面后，才能在交接文档中记录“已上线”。

平台采集任务另见 `.github/workflows/sync-news.yml`。它会自动提交最新快照和构建结果，后续手工推送前要先检查远程是否有新的自动提交；不要强制覆盖。Pages 的源码分支与根目录发布方式保持不变。

## 常见问题

| 现象 | 排查与处理 |
| --- | --- |
| 本地开发正常，线上还是旧页面 | 重新构建，确认根目录输出已提交，检查 Pages 部署状态与浏览器缓存 |
| 页面空白或资源 404 | 检查发布目录是否 `/ (root)`、根入口是否引用 `./assets/`，运行 `npm run check` |
| 换仓库名后图标或样式失效 | 保持 `base: './'`，排查手写的 `/assets/...` 等绝对路径 |
| 检查提示缺少 `dist/` | 先运行 `npm run build`；`dist/` 不随 Git 分发 |
| npm 安装失败 | 检查 Node 版本、网络和 npm registry；保留锁文件，不把删除锁文件当作默认修复 |
| Markdown 文件新增后找不到 | 确认文件名、glob 范围和文章入口，重新构建 |
| 搜索没有结果 | 确认文章在 `markdown/`，不是 README；多个词必须都命中，检查是否重新构建并发布 |
| News 未展示 | 确认位于 `markdown/news/`，文件名遵循日期前缀；首页只展示最近三条，其余仍可检索 |
| 构建提示缺少中文/英文版本 | 为同一文章补齐 `.md` / `.en.md`，不要将两个版本登记为两篇文章 |
| 页面纹理加载失败 | 原样式引用 `transparenttextures.com` 外部纹理，检查网络；如需离线支持再将资源本地化 |

## 每次交接

更新 `HANDOFF.md`：记录日期、实际修改、已运行的验证、未完成项和部署状态。结构或流程改变时同时修订长期文档，避免下一位维护者依赖过时说明。
