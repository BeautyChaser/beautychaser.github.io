<template>
  <!-- github-markdown-body 是样式类名 -->
  <div class="markdown-body" v-html="renderedHtml"></div>
</template>

<script setup>
import { computed } from 'vue'
import MarkdownIt from 'markdown-it'
// 1. 使用新安装的更稳定的 KaTeX 插件
import mdKatex from '@traptitech/markdown-it-katex'
import katex from 'katex'
import Prism from 'prismjs'

// 引入样式 (顺序很重要：先引入基础样式，再引入公式样式)
import 'github-markdown-css/github-markdown.css'
import 'prismjs/themes/prism-tomorrow.css'
// 必须确保这行存在，它是公式显示正常的关键
import 'katex/dist/katex.min.css'

const props = defineProps({
  content: {
    type: String,
    required: true,
    default: ''
  }
})

// 2. 初始化 markdown-it
const md = new MarkdownIt({
  html: true,        // 允许 HTML 标签
  linkify: true,     // 自动转换链接
  typographer: true, // 启用语义替换
  highlight: function (str, lang) {
    // 处理代码高亮
    if (lang && Prism.languages[lang]) {
      try {
        return Prism.highlight(str, Prism.languages[lang], lang);
      } catch (__) {}
    }
    return ''; // 使用默认转义
  }
})

// 3. 注册新插件并设置参数
md.use(mdKatex, {
  katex,
  blockClass: 'katex-block',
  errorColor: '#cc0000',
  strict: false
})

const renderedHtml = computed(() => {
  return md.render(props.content)
})

</script>

<style>
/* 调整主容器样式 */
.markdown-body {
  box-sizing: border-box;
  color: #333; /* 配合你的草稿纸风格，使用深灰色 */
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: transparent;
  font-family: 'Courier New', Courier, monospace; /* 配合你的数理严谨风格 */
  font-size: 1.0625rem;
  line-height: 1.9;
  overflow-wrap: anywhere;
}

/* === 核心补丁：解决 KaTeX 在 GitHub Markdown 样式下的错位问题 === */

/* 1. 防止 github-markdown 的 line-height 破坏公式对齐 */
.markdown-body .katex {
  font-size: 1.1em !important;
  text-indent: 0 !important;
  white-space: nowrap !important;
}

/* 长行内公式也只在自身滚动，不撑宽手机页面。 */
.markdown-body :not(.katex-display) > .katex {
  display: inline-block;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding-block: 0.2em;
  vertical-align: middle !important;
}

/* 3. 块级公式的容器样式 */
.katex-block {
  margin: 1em 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 10px 0;
}

/* 4. 代码块样式微调 */
.markdown-body pre {
  background-color: #2d2d2d !important;
  border-radius: 4px;
}

/* 移动端适配 */
@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
    background-color: transparent !important;
  }
}
/* 1. 强制清除 GitHub 样式中所有关于表格背景的定义 */
.markdown-body table,
.markdown-body table tr,
.markdown-body table td,
.markdown-body table th {
  background-color: transparent !important; /* 先全部透明 */
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  color: #222 !important; /* 确保文字是黑色的 */
}

.markdown-body blockquote {
  color: #a86e05 !important;
}


/* 2. 给表格整体加一个极淡的纸张感半透明白 */
.markdown-body table {
  background-color: rgba(255, 255, 255, 0.3) !important;
  display: block !important;
  max-width: 100%;
  overflow-x: auto;
  margin-bottom: 16px !important;
  width: 100%;
}

/* 3. 特别处理表头，给它一点点区分度 */
.markdown-body table thead tr {
  background-color: rgba(0, 0, 0, 0.05) !important;
}

/* 4. 强制覆盖 GitHub 的隔行变色 (nth-child) */
.markdown-body table tr:nth-child(2n) {
  background-color: transparent !important;
}

/* 5. 重点排查：如果你的表格还是黑色的，可能是因为 github-markdown 开启了深色模式 */
/* 下面这段代码强制将 Markdown 容器锁定在“浅色模式”样式 */
@media (prefers-color-scheme: dark) {
  .markdown-body {
    --color-canvas-default: transparent !important;
    --color-canvas-subtle: rgba(0,0,0,0.05) !important;
    --color-fg-default: #333 !important;
    --color-border-default: rgba(0,0,0,0.1) !important;
  }
}

/* 6. 如果图片中那个黑块是“代码块”而非表格，请加这段： */
.markdown-body pre,
.markdown-body code {
  background-color: rgba(0, 0, 0, 0.05) !important;
  color: #c7254e !important; /* 典型的代码红，你也可以改别的 */
  border: 1px solid rgba(0,0,0,0.1) !important;
}
</style>
