import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  // 源码入口与仓库根目录的发布入口分开，避免构建覆盖源码。
  root: fileURLToPath(new URL('./src', import.meta.url)),
  base: './',
  publicDir: fileURLToPath(new URL('./public', import.meta.url)),
  build: {
    outDir: fileURLToPath(new URL('./dist', import.meta.url)),
    emptyOutDir: true,
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      // The Markdown plugin and the app must share the same KaTeX module.
      { find: /^katex$/, replacement: fileURLToPath(new URL('./node_modules/katex/dist/katex.mjs', import.meta.url)) },
    ],
  },
})
