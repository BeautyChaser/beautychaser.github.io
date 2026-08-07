var e=`# Vue 3 项目部署到 GitHub Pages 作为个人博客

可以直接使用 **GitHub Pages + GitHub Actions** 部署 Vue 3 项目。下面按照最常见的 **Vue 3 + Vite** 项目说明完整流程。

---

## 一、确定博客仓库类型

GitHub Pages 有两种常见部署方式。

### 方案 A：个人主页仓库（推荐）

仓库名必须是：

\`\`\`text
你的GitHub用户名.github.io
\`\`\`

例如 GitHub 用户名是 \`BeautyChaser\`：

\`\`\`text
BeautyChaser.github.io
\`\`\`

网站地址为：

\`\`\`text
https://BeautyChaser.github.io/
\`\`\`

这种方式适合作为正式个人博客，Vite 的 \`base\` 使用：

\`\`\`js
base: '/'
\`\`\`

### 方案 B：普通项目仓库

例如仓库名为：

\`\`\`text
my-blog
\`\`\`

网站地址为：

\`\`\`text
https://BeautyChaser.github.io/my-blog/
\`\`\`

这种方式要求 Vite 的 \`base\` 设置为：

\`\`\`js
base: '/my-blog/'
\`\`\`

---

## 二、确认项目能够正常构建

在 Vue 项目根目录运行：

\`\`\`bash
npm install
npm run build
\`\`\`

构建成功后，项目根目录应该生成：

\`\`\`text
dist/
\`\`\`

可以在本地检查生产版本：

\`\`\`bash
npm run preview
\`\`\`

Vite 默认将构建结果输出到 \`dist\` 目录。

---

## 三、配置 \`vite.config.js\`

假设当前文件内容如下：

\`\`\`js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
\`\`\`

### 情况 1：仓库名是 \`BeautyChaser.github.io\`

配置为：

\`\`\`js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',
})
\`\`\`

\`base\` 默认值就是 \`/\`，因此也可以省略。

### 情况 2：仓库名是 \`my-blog\`

配置为：

\`\`\`js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/my-blog/',
})
\`\`\`

这里的仓库名必须与 GitHub 仓库名称完全一致，包括大小写。

---

## 四、配置 Vue Router

GitHub Pages 本质上是静态文件托管，不提供常规服务器路由重写。

如果使用：

\`\`\`js
createWebHistory()
\`\`\`

直接刷新 \`/article/example\` 等子页面时，可能出现 \`404\`。

对于 GitHub Pages，最简单稳定的方法是使用 Hash 路由。

修改：

\`\`\`text
src/router/index.js
\`\`\`

或者：

\`\`\`text
src/router/index.ts
\`\`\`

示例：

\`\`\`js
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // ...
  ],
})

export default router
\`\`\`

最终地址可能类似：

\`\`\`text
https://BeautyChaser.github.io/#/articles
\`\`\`

虽然地址中带有 \`#\`，但刷新子页面时不会出现 GitHub Pages \`404\`。

如果坚持使用：

\`\`\`js
createWebHistory()
\`\`\`

则需要额外制作 \`404.html\` 回退脚本。个人博客初期通常没有必要增加这层复杂度。

---

## 五、创建 GitHub Actions 部署文件

在项目根目录创建：

\`\`\`text
.github/
└── workflows/
    └── deploy.yml
\`\`\`

在 \`deploy.yml\` 中填写：

\`\`\`yaml
name: Deploy Vue Blog to GitHub Pages

on:
  push:
    branches:
      - main

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v6

      - name: Setup Node.js
        uses: actions/setup-node@v6
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Configure GitHub Pages
        uses: actions/configure-pages@v5

      - name: Upload dist
        uses: actions/upload-pages-artifact@v4
        with:
          path: ./dist

      - name: Deploy GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
\`\`\`

如果默认分支是 \`master\`，将：

\`\`\`yaml
branches:
  - main
\`\`\`

改为：

\`\`\`yaml
branches:
  - master
\`\`\`

---

## 六、提交项目到 GitHub 仓库

如果项目还没有初始化 Git：

\`\`\`bash
git init
git add .
git commit -m "Initial Vue blog"
git branch -M main
git remote add origin https://github.com/BeautyChaser/BeautyChaser.github.io.git
git push -u origin main
\`\`\`

如果使用普通项目仓库：

\`\`\`bash
git remote add origin https://github.com/BeautyChaser/my-blog.git
\`\`\`

如果项目已经存在远程仓库，只需要：

\`\`\`bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push
\`\`\`

---

## 七、在 GitHub 开启 Pages

进入 GitHub 仓库页面：

\`\`\`text
Settings
→ Pages
→ Build and deployment
→ Source
→ GitHub Actions
\`\`\`

随后进入：

\`\`\`text
Actions
\`\`\`

查看工作流：

\`\`\`text
Deploy Vue Blog to GitHub Pages
\`\`\`

工作流运行成功后，可以在：

\`\`\`text
Settings → Pages
\`\`\`

看到博客地址。

---

## 八、推荐的项目目录结构

\`\`\`text
my-blog/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   ├── router/
│   │   └── index.js
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── ArticlesView.vue
│   │   └── AboutView.vue
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
\`\`\`

---

## 九、常见错误

### 1. 页面空白，JS 或 CSS 加载 404

通常是 \`base\` 配置错误。

个人主页仓库：

\`\`\`js
base: '/'
\`\`\`

普通仓库 \`my-blog\`：

\`\`\`js
base: '/my-blog/'
\`\`\`

通常不建议随意写成：

\`\`\`js
base: './'
\`\`\`

除非明确理解相对资源路径可能带来的影响。

---

### 2. GitHub Actions 中 \`npm ci\` 报错

\`npm ci\` 要求仓库中存在：

\`\`\`text
package-lock.json
\`\`\`

先在本地执行：

\`\`\`bash
npm install
git add package-lock.json
git commit -m "Add package lock"
git push
\`\`\`

如果项目使用 Yarn，可以将工作流中的安装和构建步骤改为：

\`\`\`yaml
- name: Install dependencies
  run: yarn install --frozen-lockfile

- name: Build project
  run: yarn build
\`\`\`

---

### 3. 主页能打开，刷新文章页面出现 404

这是 \`createWebHistory()\` 与 GitHub Pages 静态托管不匹配导致的。

可以改为：

\`\`\`js
createWebHashHistory()
\`\`\`

这是最简单稳定的方案。

---

### 4. 图片在开发环境正常，部署后不显示

不要直接写：

\`\`\`html
<img src="/src/assets/test.png">
\`\`\`

组件内应该导入资源：

\`\`\`vue
<script setup>
import testImage from '@/assets/test.png'
<\/script>

<template>
  <img :src="testImage" alt="test">
</template>
\`\`\`

如果图片放在 \`public\` 目录，需要特别注意普通仓库部署时的子路径问题，避免硬编码错误的站点根路径。

---

## 十、推荐的最终方案

以 GitHub 用户名 \`BeautyChaser\` 为例：

\`\`\`text
仓库：BeautyChaser.github.io
地址：https://BeautyChaser.github.io/
Vite base：/
路由：createWebHashHistory()
部署方式：GitHub Actions
构建目录：dist
\`\`\`

以后每次更新博客只需要：

\`\`\`bash
git add .
git commit -m "Update blog"
git push
\`\`\`

GitHub Actions 会自动重新构建并发布网站。
`;export{e as default};