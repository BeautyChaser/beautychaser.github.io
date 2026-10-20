<script setup>
import { updates, platforms, platformName, platformMark } from '@/data/news.js'
import { t, formatDate } from '@/i18n.js'
</script>

<template>
  <section id="home-news" class="news-strip" :aria-label="t('各平台最近更新', 'Latest updates across platforms')">
    <div class="strip-heading">
      <a class="news-heading-link" href="#news">NEWS <span>/ {{ t('近况', 'Updates') }}</span><span class="news-dot" aria-hidden="true"></span></a>
      <a class="all-news" href="#news">{{ t('全部动态', 'All updates') }} ↗</a>
    </div>
    <div class="strip-content">
      <div class="platform-links" :aria-label="t('公开平台', 'Public platforms')">
        <a v-for="source in platforms" :key="source.id" :href="source.profileUrl" target="_blank" rel="noopener noreferrer"><span>{{ source.short }}</span> {{ platformName(source.id) }} ↗</a>
      </div>
      <a v-for="item in updates.slice(0, 3)" :key="item.id" class="strip-update" :href="item.href" :target="item.external ? '_blank' : undefined" :rel="item.external ? 'noopener noreferrer' : undefined">
        <span class="strip-date"><span v-if="item.dateKind === 'collected'">{{ t('收录于', 'Added') }} </span><time v-if="item.date" :datetime="item.date">{{ formatDate(item.date) }}</time></span>
        <span class="source-tag">{{ platformMark(item.source) }}</span>
        <span class="update-title" :lang="item.contentLocale === 'en' ? 'en' : 'zh-CN'">{{ item.title }}</span><span class="update-arrow" aria-hidden="true">↗</span>
      </a>
      <p v-if="!updates.length" class="strip-empty">{{ t('最近更新正在收录，欢迎前往各平台主页。', 'Recent updates are being collected. Visit the platform profiles in the meantime.') }}</p>
    </div>
  </section>
</template>

<style scoped>
.news-strip { width: min(1240px, calc(100% - 96px)); margin-inline: auto; display: grid; grid-template-columns: 156px minmax(0, 1fr); gap: 28px; padding-block: 24px; border-bottom: 1px solid var(--rule); }
.strip-heading { display: flex; flex-direction: column; align-items: flex-start; gap: 12px; }
.news-heading-link { display: flex; align-items: center; gap: 10px; min-height: 32px; text-decoration: none; font: 0.95rem/1.6 var(--mono); }
.news-heading-link > span:first-child { font: 0.9rem var(--serif); color: var(--muted); white-space: nowrap; }
.news-dot { flex: 0 0 5px; height: 5px; border-radius: 50%; background: var(--olive); }
.all-news { min-height: 32px; color: var(--olive); font-size: 0.95rem; text-underline-offset: 5px; }
.platform-links { display: flex; flex-wrap: wrap; gap: 6px 24px; margin-bottom: 12px; }
.platform-links a { display: inline-flex; align-items: center; gap: 8px; min-height: 32px; color: #686354; font-size: 0.9rem; text-decoration: none; }
.platform-links a > span { font: 0.8rem var(--mono); color: var(--olive); }
.strip-update { display: grid; grid-template-columns: 118px 44px minmax(0, 1fr) 16px; gap: 16px; align-items: baseline; padding-block: 8px; text-decoration: none; line-height: 1.7; }
.strip-update time { color: #79735f; font: 0.85rem/1.7 var(--mono); }
.strip-date { color: #79735f; font: 0.85rem/1.7 var(--mono); }
.source-tag { color: var(--olive); font: 0.8rem/1.7 var(--mono); }
.update-title { font-size: 1.05rem; overflow-wrap: anywhere; }
.update-arrow { color: var(--olive); }
.strip-update:hover .update-title, .platform-links a:hover { text-decoration: underline; text-underline-offset: 5px; }
.strip-empty { margin: 8px 0; font-size: 1rem; color: var(--muted); }
@media (max-width: 1100px) { .news-strip { width: calc(100% - 40px); } }
@media (max-width: 760px) { .news-strip { grid-template-columns: 1fr; gap: 12px; padding-block: 20px; }.strip-heading { flex-direction: row; justify-content: space-between; align-items: center; }.platform-links { gap: 4px 18px; } }
@media (max-width: 480px) {
  .strip-update { grid-template-columns: auto 1fr auto; gap: 2px 12px; padding-block: 10px; }
  .strip-date { grid-column: 1; grid-row: 1; }.source-tag { grid-column: 2; grid-row: 1; }
  .update-title { grid-column: 1 / 3; grid-row: 2; }.update-arrow { grid-column: 3; grid-row: 2; }
}
</style>
