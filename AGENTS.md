# 项目维护入口

本仓库同时保存网站源码和 GitHub Pages 发布产物。开始维护前，依次阅读：

1. `agent/README.md`：维护资料索引。
2. `agent/PROJECT_CONTEXT.md`：身份定位、技术栈和目录结构。
3. `agent/MAINTENANCE.md`：开发、构建、验证、发布及换机流程。
4. `agent/HANDOFF.md`：最近交接状态与尚未完成的事项。
5. 涉及样式时阅读 `agent/STYLE_GUIDE.md`，涉及文章时阅读 `markdown/README.md`。

## 工作约定

- 用户的定位是「跨领域计算物理与 Physical AI 系统架构师」，英文为「Cross-domain Computational Physics & Physical AI Systems Architect」。修改个人介绍时保留这一定位，不虚构经历、成果或资历。
- 编辑 `src/`、`public/` 等源文件。`src/index.html` 是源码入口；根目录 `index.html`、`assets/` 和发布图标是生成物，通过 `npm run build` 更新。
- 网站文章放在根目录 `markdown/`，由构建自动收录。`markdown/news/` 用于本站动态，按日期命名；首页顶部汇总各平台与本站最新动态，`#news` 是独立 News 页面。保持标题和正文的静态全文检索，以及可刷新访问的文章 hash 链接。
- 整个网站必须支持中文/英文切换，包含文章全文、News、搜索、联系区、提示与页面元数据。文章按 `.md`（中文）与 `.en.md`（英文）配对，保持语言切换后链接不变。构建会检查译文完整性。
- 字号优先保证可读性：正文约 17px，搜索输入至少 16px，窄屏通过重新排列适配，不用缩小正文字号来塞入布局。
- 联系区包含知乎账号 `Callingforwind`，图标使用 `ZH`。用户已提供知乎、bilibili、领英公开主页，统一保存在 `config/news-sources.json`，不要猜测或替换账号 URL。
- 平台动态通过公开订阅源定时同步，`config/news-manual.json` 可收录作者提供的条目；不编造动态、标题、日期或翻译，不把失败同步显示成成功或“没有更新”。详见 `agent/NEWS_SYNC.md`，不在前端或仓库中保存平台登录凭据。
- 源码修改后执行 `npm run build` 和 `npm run check`。页面内容或布局有变化时，通过本地 HTTP 服务检查页面。
- 根目录源码和静态输出一起保留、一起提交；不要将根目录替换成一个只有 `dist/` 内容的仓库。
- GitHub Pages 按 `main` 分支的 `/ (root)` 发布。保持 `.nojekyll` 和相对资源路径，入口为根目录 `index.html`。
- 保留用户已有改动与用途不明的文件。正常推送，不使用原项目旧说明中的强制推送流程。
- 结构、命令或发布方式发生变化时，同步更新相关维护文档；任务完成后更新 `agent/HANDOFF.md`，清楚区分已验证、待验证与尚未上线的内容。
- 项目可以独立克隆和构建，不依赖原电脑上的参考文件夹。维护资料只记录公开配置和工作方法，不保存凭据。
