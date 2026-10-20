<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted, defineAsyncComponent, watchEffect, h } from 'vue'
import HomePage from '@/components/Page/HomePage.vue'
import NewsPage from '@/components/Page/NewsPage.vue'
import { notes } from '@/data/notes.js'
import { t, formatDate } from '@/i18n.js'

const currentSlug = ref('')
const isNewsPage = ref(window.location.hash === '#news')
const currentNote = computed(() => notes.value.find(note => note.slug === currentSlug.value) ?? null)
const ContentPage = defineAsyncComponent({
  loader: () => import('@/components/Page/ContentPage.vue'),
  delay: 0,
  timeout: 20000,
  loadingComponent: { setup: () => () => h('p', { role: 'status' }, t('正在加载文章…', 'Loading article…')) },
  errorComponent: { setup: () => () => h('p', { role: 'alert' }, t('文章加载失败，请刷新页面重试。', 'Could not load the article. Please refresh to try again.')) },
})

watchEffect(() => {
  const note = currentNote.value
  const identity = t('跨领域计算物理与 Physical AI 系统架构师', 'Cross-domain Computational Physics & Physical AI Systems Architect')
  const pageTitle = isNewsPage.value ? t('近况与平台更新', 'News & updates') : note?.title ?? identity
  document.title = `${pageTitle} | Callingforwind`
  const description = document.querySelector('meta[name="description"]')
  if (description) description.content = isNewsPage.value ? t('Callingforwind 在知乎、bilibili、领英和个人网站的最近更新。', 'Recent updates from Callingforwind on Zhihu, bilibili, LinkedIn, and this website.') : note?.description ?? `Callingforwind — ${identity}.`
})

async function syncLocation() {
  const hash = window.location.hash
  isNewsPage.value = hash === '#news'
  let slug = ''
  if (hash.startsWith('#note/')) {
    try { slug = decodeURIComponent(hash.slice(6)) } catch { /* Invalid fragment: show the home page. */ }
  }
  currentSlug.value = slug
  await nextTick()
  if (isNewsPage.value || currentNote.value) {
    window.scrollTo({ top: 0, behavior: 'instant' })
  } else if (hash) {
    document.getElementById(hash.slice(1))?.scrollIntoView()
  } else {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
}

onMounted(() => {
  window.addEventListener('hashchange', syncLocation)
  void syncLocation()
})
onUnmounted(() => window.removeEventListener('hashchange', syncLocation))
</script>

<template>
  <NewsPage v-if="isNewsPage" />
  <div v-else-if="currentNote" class="article-page">
    <div class="article-heading">
      <a class="back-link" :href="currentNote.isNews ? '#news' : '#notes'">← {{ currentNote.isNews ? t('返回 News', 'Back to News') : t('返回研究笔记', 'Back to notes') }}</a>
      <p class="eyebrow">{{ currentNote.category }} / {{ currentNote.date ? formatDate(currentNote.date) : currentNote.label }}</p>
      <h1>{{ currentNote.title }}</h1>
      <p v-if="currentNote.slug === 'vue3-github-pages-blog-deployment'" class="article-context">
        {{ t('这篇文章保留通用部署参考。本网站当前采用根目录静态文件发布，具体维护步骤请以仓库 README 为准。', 'This article is a general deployment reference. This site publishes static files from the repository root; see the repository README for its current maintenance steps.') }}
      </p>
      <p v-if="currentNote.translationMissing" class="article-context" role="status">{{ t('这篇文章暂时只有英文版本。', 'This article is currently available in Chinese only.') }}</p>
    </div>
    <div :lang="currentNote.contentLocale === 'en' ? 'en' : 'zh-CN'"><ContentPage :key="currentNote.slug" :content="currentNote.content" /></div>
  </div>
  <HomePage v-else />
</template>

<style scoped>
.article-page { width: min(1020px, calc(100% - 64px)); margin: 0 auto; padding: 56px 0 100px; }
.article-heading { max-width: 820px; margin: 0 auto 30px; }
.article-heading h1 { margin: 20px 0 32px; font-size: clamp(1.65rem, 3vw, 2.65rem); line-height: 1.5; font-weight: 500; }
.back-link { display: inline-block; margin-bottom: 32px; color: var(--olive); font-size: 1rem; text-decoration: none; }
.article-context { padding: 16px 20px; border-left: 2px solid var(--olive); background: #e9e6d8; font-size: 1rem; line-height: 1.8; }
@media (max-width: 600px) { .article-page { width: calc(100% - 28px); padding-top: 32px; } }
</style>
