<script setup>
import { computed, ref } from 'vue'
import { platforms, updates, platformName, platformMark, platformStates, newsCollectedAt, refreshingNews, newsConnectionFailed, refreshNews } from '@/data/news.js'
import { locale, t, formatDate } from '@/i18n.js'

const selected = ref('all')
const filters = computed(() => [
  { id: 'all', label: t('全部', 'All') },
  ...platforms.map(source => ({ id: source.id, label: platformName(source.id) })),
  { id: 'site', label: t('本站', 'This website') },
])
const filtered = computed(() => selected.value === 'all' ? updates.value : updates.value.filter(item => item.source === selected.value))
const count = id => id === 'all' ? updates.value.length : updates.value.filter(item => item.source === id).length
const status = id => platformStates.value.find(source => source.id === id)?.status
const lastSuccess = id => platformStates.value.find(source => source.id === id)?.lastSuccessAt
const hasAutomaticFeeds = platforms.some(source => source.feeds.length)
function stamp(value) {
  return new Intl.DateTimeFormat(locale.value === 'zh' ? 'zh-CN' : 'en', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Asia/Shanghai' }).format(new Date(value))
}
function stateLabel(id) {
  if (!platforms.find(source => source.id === id)?.feeds.length || status(id) === 'manual') return t('由本人按文章链接更新', 'Updated by the author from article links')
  if (status(id) === 'unavailable') return t('同步暂不可用，可前往主页查看', 'Sync unavailable; visit the profile for updates')
  if (status(id) === 'partial') return t('部分更新暂不可用', 'Some updates are temporarily unavailable')
  if (status(id) === 'ok') return count(id) ? t('已同步公开更新', 'Public updates synced') : t('暂未发现公开更新', 'No public updates found')
  return t('主页已连接 · 等待同步', 'Profile connected · Awaiting sync')
}
</script>

<template>
  <div id="news" class="news-page">
    <a class="back-home" href="#home">← {{ t('返回首页', 'Back home') }}</a>
    <header class="news-intro">
      <p class="eyebrow">NEWS / {{ t('各处的记录', 'ACROSS PLATFORMS') }}</p>
      <h1>{{ t('近况与平台更新', 'News & updates') }}<span>.</span></h1>
      <p class="intro-copy">{{ t('知乎的思考、bilibili 的分享、领英的近况，以及这个网站的更新。在这里汇合，从这里前往原文。', 'Thoughts on Zhihu, sharing on bilibili, updates on LinkedIn, and notes from this website. Collected here, with links to the originals.') }}</p>
    </header>

    <section class="source-grid" :aria-label="t('我的公开平台', 'My public platforms')">
      <article v-for="source in platforms" :key="source.id" class="source-card">
        <a class="source-profile" :href="source.profileUrl" target="_blank" rel="noopener noreferrer">
          <span class="source-monogram" aria-hidden="true">{{ source.short }}</span>
          <span class="source-identity"><strong>{{ platformName(source.id) }}</strong><span>{{ source.handle }}</span></span>
          <span class="profile-visit">{{ t('前往主页', 'Visit profile') }} ↗</span>
        </a>
        <p class="source-state">{{ stateLabel(source.id) }}</p>
        <p v-if="lastSuccess(source.id)" class="source-date">{{ t('最近同步', 'Last synced') }} <time :datetime="lastSuccess(source.id)">{{ stamp(lastSuccess(source.id)) }}</time></p>
      </article>
    </section>

    <section class="updates-section" aria-labelledby="updates-title">
      <div class="updates-heading"><h2 id="updates-title">{{ t('最近更新', 'Recent updates') }}</h2><button class="refresh-button" type="button" :disabled="refreshingNews" @click="refreshNews"><span aria-hidden="true">↻</span> {{ refreshingNews ? t('正在刷新…', 'Refreshing…') : t('刷新动态', 'Refresh updates') }}</button></div>
      <div class="filters" role="group" :aria-label="t('按平台筛选动态', 'Filter updates by platform')">
        <button v-for="filter in filters" :key="filter.id" type="button" :aria-pressed="selected === filter.id" @click="selected = filter.id">{{ filter.label }} <span>{{ count(filter.id) }}</span></button>
      </div>
      <p class="collection-note">{{ hasAutomaticFeeds ? t('可用订阅源提供自动更新，其他文章由本人按链接收录。外站标题与摘要保留原语言。', 'Available feeds provide automatic updates; other articles are collected by the author from links. External titles and excerpts keep their original language.') : t('这里收录本人提供的文章与视频链接，点击条目前往原文。完整更新可在各平台主页查看。', 'Articles and videos are collected here from links supplied by the author. Open an entry to view the original, or visit each profile for all updates.') }}</p>
      <p v-if="newsCollectedAt" class="collection-date">{{ hasAutomaticFeeds ? t('最近检查', 'Last checked') : t('最近整理', 'Last curated') }} <time :datetime="newsCollectedAt">{{ stamp(newsCollectedAt) }}</time> · {{ t('北京时间', 'Beijing time') }}</p>
      <p v-if="newsConnectionFailed" class="connection-notice" role="status">{{ t('暂时无法获取更新，仍可查看已收录内容和平台主页。', 'Updates could not be refreshed. Saved entries and platform profiles remain available.') }}</p>
      <div aria-live="polite" class="results-status">{{ t(`共 ${filtered.length} 条动态`, `${filtered.length} ${filtered.length === 1 ? 'update' : 'updates'}`) }}</div>
      <ol v-if="filtered.length" class="update-list">
        <li v-for="item in filtered" :key="item.id" class="update-row">
          <div class="update-date"><span v-if="item.dateKind === 'collected'">{{ t('收录于', 'Added') }}</span><time v-if="item.date" :datetime="item.date">{{ formatDate(item.date) }}</time><span>{{ platformMark(item.source) }}</span></div>
          <div class="update-copy">
            <p class="update-meta">{{ platformName(item.source) }}<span aria-hidden="true"> / </span>{{ item.kind === 'video' ? t('视频', 'Video') : item.kind === 'post' ? t('动态', 'Post') : t('文章', 'Article') }}</p>
            <h3><a :href="item.href" :target="item.external ? '_blank' : undefined" :rel="item.external ? 'noopener noreferrer' : undefined" :lang="item.contentLocale === 'en' ? 'en' : 'zh-CN'">{{ item.title }} <span aria-hidden="true">↗</span></a></h3>
            <p v-if="item.description" class="update-summary" :lang="item.contentLocale === 'en' ? 'en' : 'zh-CN'">{{ item.description }}</p>
            <p v-if="item.titlePending" class="collection-note">{{ t('已收录文章链接，标题信息待补充，可直接前往原文查看。', 'Article link saved. Its title is not available yet; open the original to read it.') }}</p>
            <a class="read-original" :href="item.href" :target="item.external ? '_blank' : undefined" :rel="item.external ? 'noopener noreferrer' : undefined">{{ item.external ? t('阅读原文', 'View original') : t('阅读站内记录', 'Read this note') }} ↗</a>
          </div>
        </li>
      </ol>
      <div v-else class="empty-updates"><span aria-hidden="true">∴</span><h3>{{ t('这里还没有收录的更新。', 'No updates collected here yet.') }}</h3><p>{{ t('可以先前往上方的平台主页查看。后续收录的文章和视频会出现在这里。', 'Visit the profiles above in the meantime. New articles and videos will appear here as they are collected.') }}</p><button type="button" @click="selected = 'all'">{{ t('查看全部动态', 'Show all updates') }} ↗</button></div>
    </section>
  </div>
</template>

<style scoped>
.news-page { width: min(1120px, calc(100% - 96px)); margin-inline: auto; padding-block: 36px 96px; }
.back-home { display: inline-block; min-height: 44px; color: var(--olive); text-decoration: none; font-size: 1rem; }
.news-intro { padding-block: 34px 42px; max-width: 760px; }
h1 { margin: 18px 0; font-size: clamp(2rem, 4.5vw, 3.4rem); line-height: 1.35; font-weight: 500; letter-spacing: -0.04em; }h1 > span { color: var(--olive); }
.intro-copy { margin: 0; font-size: 1.1rem; line-height: 1.95; color: #686354; }
.source-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); background: #fcfaf47a; border: 1px solid var(--rule); }
.source-card { min-width: 0; padding: 26px; }.source-card + .source-card { border-left: 1px solid var(--rule); }
.source-profile { display: grid; grid-template-columns: 48px minmax(0, 1fr) auto; align-items: center; gap: 3px 12px; text-decoration: none; }.source-monogram { grid-column: 1; grid-row: 1 / 3; display: grid; place-items: center; height: 48px; border: 1px solid #a5a084; color: var(--olive); font: 1.05rem var(--mono); }
.source-identity { display: contents; }.source-identity strong { grid-column: 2; grid-row: 1; min-width: 0; overflow-wrap: anywhere; font-size: 1.15rem; font-weight: 500; }.source-identity > span { grid-column: 2 / 4; grid-row: 2; color: var(--muted); font: 0.85rem/1.6 var(--mono); overflow-wrap: anywhere; }
.profile-visit { grid-column: 3; grid-row: 1; color: var(--olive); font-size: 1rem; line-height: 1.6; text-decoration: underline; text-underline-offset: 5px; text-align: right; max-width: 6.5rem; }.source-state { margin: 20px 0 8px; font-size: 0.95rem; line-height: 1.75; color: #686354; }.source-date { margin: 8px 0; font-size: 0.85rem; color: var(--muted); }
.updates-section { margin-top: 54px; }.updates-heading { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 24px; }h2 { margin: 0; font-size: 1.6rem; font-weight: 500; }
.refresh-button { display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; min-height: 44px; font-size: 0.95rem; color: var(--olive); border: 1px solid var(--rule); background: #fcfaf477; cursor: pointer; }.refresh-button:disabled { color: var(--muted); cursor: wait; }.refresh-button > span { font-size: 1.3rem; }
.filters { display: flex; gap: 8px 12px; flex-wrap: wrap; }.filters button { min-height: 44px; padding: 8px 16px; border: 1px solid var(--rule); background: transparent; color: var(--ink); font-size: 1rem; cursor: pointer; }.filters button[aria-pressed='true'] { color: var(--paper-light); background: var(--olive); border-color: var(--olive); }.filters button > span { margin-left: 8px; font: 0.85rem var(--mono); opacity: 0.8; }
.collection-note { max-width: 780px; margin: 24px 0 8px; font-size: 0.95rem; line-height: 1.85; color: var(--muted); }.collection-date { font-size: 0.85rem; color: var(--muted); }.connection-notice { padding: 12px 16px; border-left: 2px solid var(--olive); background: #e9e6d8; font-size: 1rem; }
.results-status { margin: 28px 0 12px; color: var(--muted); font: 0.85rem/1.6 var(--mono); }.update-list { margin: 0; padding: 0; list-style: none; border-top: 1px solid var(--rule); }
.update-row { display: grid; grid-template-columns: 126px minmax(0, 1fr); gap: 30px; border-bottom: 1px solid var(--rule); padding-block: 30px; }.update-date { display: flex; flex-direction: column; gap: 12px; padding-top: 4px; color: #79735f; font: 0.85rem/1.8 var(--mono); }.update-date > span { color: var(--olive); }
.update-meta { margin: 0; font: 0.85rem/1.7 var(--mono); color: var(--olive); }.update-meta > span { color: #b2ac97; }h3 { margin: 10px 0; font-size: 1.3rem; line-height: 1.65; font-weight: 500; }h3 a { text-decoration: none; overflow-wrap: anywhere; }h3 a:hover { text-decoration: underline; text-underline-offset: 5px; }h3 a > span { color: var(--olive); margin-left: 8px; }
.update-summary { margin: 10px 0; font-size: 1.0625rem; line-height: 1.9; color: #686354; overflow-wrap: anywhere; }.read-original { display: inline-block; padding-top: 8px; min-height: 44px; font-size: 0.95rem; color: var(--olive); text-underline-offset: 5px; }
.empty-updates { padding: 42px 28px; border: 1px dashed #bbb59f; background: #fcfaf44d; text-align: center; }.empty-updates > span { color: var(--olive); font-size: 2rem; }.empty-updates p { max-width: 540px; margin: 12px auto; font-size: 1.05rem; line-height: 1.9; color: var(--muted); }.empty-updates button { margin-top: 12px; border: 0; border-bottom: 1px solid var(--olive); padding: 8px 0; min-height: 44px; background: transparent; color: var(--olive); font-size: 1rem; cursor: pointer; }
@media (max-width: 1100px) { .news-page { width: calc(100% - 40px); }.source-card { padding: 20px; }.source-grid { grid-template-columns: 1fr; }.source-card + .source-card { border-left: 0; border-top: 1px solid var(--rule); } }
@media (max-width: 760px) { .source-state { margin-top: 14px; }.news-intro { padding-block: 24px 32px; }.updates-section { margin-top: 38px; } }
@media (max-width: 480px) { .news-page { width: calc(100% - 32px); padding-top: 24px; }.source-profile { grid-template-columns: 40px minmax(0, 1fr) auto; column-gap: 10px; }.source-monogram { height: 40px; }.profile-visit { max-width: 6rem; }.updates-heading { flex-wrap: wrap; }.update-row { grid-template-columns: 1fr; gap: 10px; padding-block: 24px; }.update-date { flex-direction: row; gap: 16px; }.filters { gap: 8px; }.filters button { padding-inline: 12px; }.empty-updates { padding-inline: 18px; } }
</style>
