<script setup>
import WebSearch from '@/components/WebSearch.vue'
import { computed } from 'vue'
import { locale, t, setLocale } from '@/i18n.js'
const navigation = computed(() => [
  { href: '#home', label: t('首页', 'Home'), index: '00' },
  { href: '#news', label: 'News', index: 'N' },
  { href: '#systems', label: t('系统视角', 'Systems'), shortLabel: t('系统', 'Work'), index: '01' },
  { href: '#notes', label: t('研究笔记', 'Notes'), shortLabel: t('笔记', 'Notes'), index: '02' },
  { href: '#contact', label: t('联系', 'Contact'), shortLabel: t('联系', 'Mail'), index: '03' },
])
</script>

<template>
  <header class="web-header">
    <div class="header-inner">
      <a class="brand" href="#home" :aria-label="t('Callingforwind 首页', 'Callingforwind home')">
        <span class="brand-mark">CFW<span>.</span></span>
        <span class="brand-caption">CALLINGFORWIND<br><span>{{ t('物理 · 计算 · 系统', 'PHYSICS · COMPUTATION · SYSTEMS') }}</span></span>
      </a>
      <WebSearch />
      <nav :aria-label="t('主导航', 'Main navigation')">
        <a v-for="item in navigation" :key="item.href" :href="item.href" :aria-label="item.label">
          <span class="nav-index">{{ item.index }}</span><span class="nav-label">{{ item.label }}</span><span class="nav-label-short">{{ item.shortLabel || item.label }}</span>
        </a>
      </nav>
      <div class="language-switch" role="group" :aria-label="t('网站语言', 'Site language')">
        <button type="button" lang="zh-CN" :aria-pressed="locale === 'zh'" aria-label="切换为中文" @click="setLocale('zh')">中</button>
        <button type="button" lang="en" :aria-pressed="locale === 'en'" aria-label="Switch to English" @click="setLocale('en')">EN</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.web-header { position: sticky; top: 0; z-index: 100; border-bottom: 1px solid var(--rule); background: #f4f1e8ed; backdrop-filter: blur(14px); }
.header-inner { width: min(1240px, calc(100% - 96px)); min-height: 82px; margin: 0 auto; display: grid; grid-template-columns: auto minmax(160px, 220px) 1fr auto; align-items: center; gap: 24px; }
.brand { display: flex; align-items: center; gap: 18px; text-decoration: none; }
.brand-mark { font: bold 2rem/1 Georgia, serif; letter-spacing: -0.07em; }
.brand-mark span { color: var(--olive); }
.brand-caption { font: 0.6rem/1.8 var(--mono); letter-spacing: 0.1em; }
.brand-caption span { color: var(--muted); font-size: 0.5rem; }
nav { display: flex; justify-content: flex-end; gap: 24px; }
nav a { display: inline-flex; align-items: center; min-height: 44px; padding: 10px 0; text-decoration: none; font-size: 0.85rem; white-space: nowrap; }
nav a:hover { color: var(--olive); }
.nav-index { margin-right: 7px; color: #9b9686; font: 0.6rem var(--mono); }
.nav-label-short { display: none; }
.brand-caption { font-size: 0.8rem; letter-spacing: 0.04em; }
.brand-caption span { font-size: 0.75rem; }
nav a { font-size: 1rem; }
.nav-index { font-size: 0.75rem; }
.language-switch { display: flex; align-items: center; border: 1px solid var(--rule); }
.language-switch button { min-width: 36px; min-height: 40px; padding: 4px 6px; border: 0; background: transparent; color: var(--muted); cursor: pointer; font: 0.85rem var(--mono); }
.language-switch button[aria-pressed='true'] { color: var(--paper-light); background: var(--olive); }
.language-switch button:hover { box-shadow: inset 0 0 0 1px var(--olive); }
@media (max-width: 1100px) {
  .header-inner { width: calc(100% - 40px); min-height: 74px; gap: 20px; }
  .brand-caption { display: none; }
  nav { gap: 20px; }
}
@media (max-width: 950px) {
  .header-inner { grid-template-columns: auto minmax(0, 1fr) auto; column-gap: 18px; row-gap: 0; padding-top: 8px; }
  .brand, nav, .language-switch { margin-bottom: 8px; }
  nav { grid-column: 2; grid-row: 1; }
  .language-switch { grid-column: 3; grid-row: 1; }
}
@media (max-width: 480px) {
  .header-inner { width: calc(100% - 32px); min-height: 68px; column-gap: 8px; }
  .brand-mark { font-size: 1.4rem; }
  nav { gap: 8px; }
  nav a { font-size: 0.95rem; }
  .nav-index { display: none; }
  .nav-label { display: none; }
  .nav-label-short { display: inline; }
  .language-switch button[aria-pressed='true'] { display: none; }
  .language-switch button { min-width: 38px; min-height: 42px; }
}
@media (max-width: 600px) {
  .header-inner { grid-template-columns: 1fr auto; column-gap: 16px; }
  .brand { grid-column: 1; grid-row: 1; margin-bottom: 0; }
  .brand-mark { font-size: 1.75rem; }
  .language-switch { grid-column: 2; grid-row: 1; margin-bottom: 0; }
  nav { grid-column: 1 / -1; grid-row: 2; justify-content: space-between; gap: 8px; margin-bottom: 0; }
  nav a { font-size: 0.95rem; }
  .nav-index { display: none; }
}
</style>
