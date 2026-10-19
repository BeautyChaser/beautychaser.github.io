<script setup>
import { computed, ref } from 'vue'
import { searchNotes } from '@/data/notes.js'
import { t, noteCount } from '@/i18n.js'

const query = ref('')
const isOpen = ref(false)
const results = computed(() => searchNotes(query.value))
const showResults = computed(() => isOpen.value && Boolean(query.value.trim()))

function onFocusOut(event) {
  if (!event.currentTarget.contains(event.relatedTarget)) isOpen.value = false
}
</script>

<template>
  <div class="search-container" @focusin="isOpen = true" @focusout="onFocusOut" @keydown.esc="isOpen = false">
    <form class="search-field" role="search" :aria-label="t('搜索研究笔记', 'Search notes')" @submit.prevent="isOpen = true">
      <span class="search-symbol" aria-hidden="true">⌕</span>
      <input v-model="query" type="search" :aria-label="t('搜索文章标题与正文', 'Search titles and content')" :placeholder="t('搜索标题与正文…', 'Title / content…')" autocomplete="off" aria-controls="note-search-results" :aria-expanded="showResults" @input="isOpen = true">
      <button type="submit" class="search-submit" :aria-label="t('搜索', 'Search')">↵</button>
    </form>
    <div v-if="showResults" id="note-search-results" class="search-results">
      <div class="result-heading" role="status">{{ noteCount(results.length) }} <span>{{ t('标题 + 正文检索', 'Titles + full text') }}</span></div>
      <ul v-if="results.length">
        <li v-for="note in results" :key="note.slug">
          <a :href="note.href" @click="isOpen = false">
            <span class="result-category">{{ note.titleMatch ? t('标题命中', 'Title match') : t('正文命中', 'Content match') }}</span>
            <strong>{{ note.title }}</strong>
            <p>{{ note.excerpt }}</p>
          </a>
        </li>
      </ul>
      <p v-else class="empty-search">{{ t('没有找到相关笔记，试试其他关键词。', 'No notes found. Try another keyword.') }}</p>
    </div>
  </div>
</template>

<style scoped>
.search-container { position: relative; width: 100%; min-width: 0; font-family: var(--mono); }
.search-field { display: flex; align-items: center; gap: 8px; height: 36px; padding: 0 10px; border: 1px solid #d8d3c5; background: #eae7dc77; }
.search-field:focus-within { background: var(--paper-light); border-color: #9b9a77; }
.search-symbol { color: var(--olive); font-size: 1.3rem; }
input { min-width: 0; flex: 1; width: 100%; padding: 0; border: 0; outline: 0; background: transparent; color: var(--ink); font-size: 1rem; }
input::placeholder { color: #928c79; }
input:focus-visible { outline: 0; }
.search-submit { border: 0; padding: 4px; color: #958f7b; background: none; cursor: pointer; }
.search-results { position: absolute; top: calc(100% + 12px); right: 0; z-index: 110; width: min(440px, calc(100vw - 40px)); max-height: min(420px, calc(100vh - 160px)); max-height: min(420px, calc(100dvh - 160px)); overflow-y: auto; border: 1px solid #ccc6b3; background: #fcfaf4; box-shadow: 4px 6px 0 #d8d2c377, 0 12px 26px #302b2214; }
.result-heading { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px; padding: 14px 18px; color: var(--olive); font-size: 0.9rem; border-bottom: 1px solid var(--rule); }
.result-heading span { color: var(--muted); font-size: 0.8rem; }
ul { margin: 0; padding: 0; list-style: none; }
li + li { border-top: 1px solid var(--rule); }
li a { display: block; padding: 18px; text-decoration: none; }
li a:hover, li a:focus-visible { background: #eeebdf; }
.result-category { display: block; margin-bottom: 8px; color: #7d765f; font-size: 0.8rem; }
strong { display: block; font: 500 1.05rem/1.6 var(--serif); }
li p { margin: 10px 0 0; color: #686354; font: 0.95rem/1.8 var(--serif); overflow-wrap: anywhere; }
.empty-search { margin: 0; padding: 24px 18px; color: var(--muted); font-size: 0.95rem; line-height: 1.8; }
@media (max-width: 950px) {
  .search-container { grid-column: 1 / -1; grid-row: 2; padding-bottom: 10px; }
  .search-field { height: 44px; }
  .search-results { top: calc(100% - 4px); width: 100%; }
}
@media (max-width: 600px) {
  .search-container { grid-row: 3; }
  .search-results { max-height: min(420px, calc(100dvh - 195px)); }
}
</style>
