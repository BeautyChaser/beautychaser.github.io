# Deploying a Vue 3 personal blog to GitHub Pages

A Vue 3 project can be deployed with **GitHub Pages and GitHub Actions**. This reference walks through a typical **Vue 3 + Vite** setup.

---

## 1. Choose the repository type

There are two common GitHub Pages arrangements.

### Option A: a personal-site repository

Use a repository named:

```text
YOUR_USERNAME.github.io
```

For the GitHub username `BeautyChaser`, the example repository is:

```text
BeautyChaser.github.io
```

The site address is:

```text
https://BeautyChaser.github.io/
```

For a site served at the domain root, set Vite's base path to:

```js
base: '/'
```

### Option B: a project repository

For a repository named:

```text
my-blog
```

The site address becomes:

```text
https://BeautyChaser.github.io/my-blog/
```

In that arrangement, configure the base path as:

```js
base: '/my-blog/'
```

---

## 2. Verify the production build

Run these commands in the Vue project directory:

```bash
npm install
npm run build
```

A successful default build produces:

```text
dist/
```

Preview the production version locally:

```bash
npm run preview
```

Vite's default build output directory is `dist`.

---

## 3. Configure Vite

A minimal `vite.config.js` might contain:

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
```

### Personal-site repository

For `BeautyChaser.github.io`:

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',
})
```

The default value of `base` is `/`, so it can also be omitted.

### Project repository

For `my-blog`:

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/my-blog/',
})
```

Match the repository name in the path, including its capitalization.

---

## 4. Configure Vue Router

GitHub Pages serves static files and does not provide general server-side route rewrites.

With:

```js
createWebHistory()
```

Refreshing a nested URL such as `/article/example` can produce a `404`.

Hash routing avoids this issue. Edit:

```text
src/router/index.js
```

or:

```text
src/router/index.ts
```

For example:

```js
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // ...
  ],
})

export default router
```

An address then looks like:

```text
https://BeautyChaser.github.io/#/articles
```

The fragment stays in the browser, so refreshing the article still requests the site's entry document.

If you retain `createWebHistory()`, you need an additional fallback arrangement, such as a `404.html` script. Hash routing is a simpler starting point for a personal blog.

---

## 5. Add a deployment workflow

Create:

```text
.github/
└── workflows/
    └── deploy.yml
```

The workflow from this reference is:

```yaml
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
      url: ${{ steps.deployment.outputs.page_url }}

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
```

If the default branch is `master`, replace:

```yaml
branches:
  - main
```

with:

```yaml
branches:
  - master
```

---

## 6. Commit and push the project

If Git has not been initialized:

```bash
git init
git add .
git commit -m "Initial Vue blog"
git branch -M main
git remote add origin https://github.com/BeautyChaser/BeautyChaser.github.io.git
git push -u origin main
```

For a project repository, the remote URL would instead be:

```bash
git remote add origin https://github.com/BeautyChaser/my-blog.git
```

If the project already has a remote:

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push
```

---

## 7. Enable GitHub Pages

In the repository settings, follow:

```text
Settings
→ Pages
→ Build and deployment
→ Source
→ GitHub Actions
```

Open the **Actions** tab and look for:

```text
Deploy Vue Blog to GitHub Pages
```

After the workflow completes successfully, find the published address under **Settings → Pages**.

---

## 8. Example project structure

```text
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
```

---

## 9. Common problems

### Blank page or missing JavaScript and CSS

Check the base path. A personal-site repository usually uses:

```js
base: '/'
```

A project repository named `my-blog` uses:

```js
base: '/my-blog/'
```

A relative base path:

```js
base: './'
```

requires understanding how relative resource URLs behave. This site's own build deliberately uses a relative base with static output at the repository root; the surrounding article notice distinguishes that setup from this general reference.

### `npm ci` fails in GitHub Actions

The repository must contain:

```text
package-lock.json
```

Generate and commit the lockfile locally:

```bash
npm install
git add package-lock.json
git commit -m "Add package lock"
git push
```

For Yarn, the corresponding workflow steps could be:

```yaml
- name: Install dependencies
  run: yarn install --frozen-lockfile

- name: Build project
  run: yarn build
```

### Homepage works, but refreshing an article gives a 404

This is the usual mismatch between `createWebHistory()` and static hosting. Use:

```js
createWebHashHistory()
```

### Images work locally but disappear after deployment

Do not reference source files directly in rendered HTML:

```html
<img src="/src/assets/test.png">
```

Import the asset in the Vue component:

```vue
<script setup>
import testImage from '@/assets/test.png'
</script>

<template>
  <img :src="testImage" alt="test">
</template>
```

For files in `public`, account for the deployment subpath rather than hardcoding a site-root URL.

---

## 10. Deployment pattern in this reference

For the example username `BeautyChaser`:

```text
Repository: BeautyChaser.github.io
Address: https://BeautyChaser.github.io/
Vite base: /
Router: createWebHashHistory()
Deployment: GitHub Actions
Build directory: dist
```

After configuration, an update follows the normal Git workflow:

```bash
git add .
git commit -m "Update blog"
git push
```

GitHub Actions then rebuilds and publishes the site.
