import { computed, ref } from 'vue'
import config from '../../config/news-sources.json'
import { locale } from '../i18n.js'
import { news as siteNews } from './notes.js'
import { localizedPost, parseSnapshot } from './news-core.js'

export const platforms = config.sources
const snapshot = ref(parseSnapshot({ version: 1, sources: [], items: [] }, platforms))
export const refreshingNews = ref(false)
export const newsConnectionFailed = ref(false)
export const newsCollectedAt = computed(() => snapshot.value.generatedAt)
export const platformStates = computed(() => snapshot.value.sources)
export const platformName = id => platforms.find(source => source.id === id)?.name[locale.value] ?? (locale.value === 'en' ? 'This website' : '本站')
export const platformMark = id => platforms.find(source => source.id === id)?.short ?? 'CFW'
export const updates = computed(() => [
  ...siteNews.value.map(note => ({ ...note, id: `site:${note.slug}`, source: 'site', kind: 'article', contentLocale: locale.value, external: false })),
  ...snapshot.value.items.map(item => localizedPost(item, locale.value)),
].sort((a, b) => (b.publishedAt ?? b.collectedAt ?? b.date ?? '').localeCompare(a.publishedAt ?? a.collectedAt ?? a.date ?? '')))

async function readSnapshot(url) {
  const response = await fetch(url, { cache: 'no-store', signal: AbortSignal.timeout(8000), headers: { Accept: 'application/json' } })
  if (!response.ok) throw new Error('News could not be loaded')
  const content = await response.text()
  if (content.length > 1_000_000) throw new Error('News snapshot too large')
  const next = parseSnapshot(JSON.parse(content), platforms)
  if (!snapshot.value.generatedAt || (next.generatedAt && next.generatedAt >= snapshot.value.generatedAt)) snapshot.value = next
}

export async function refreshNews() {
  if (refreshingNews.value) return
  refreshingNews.value = true
  let success = false
  try {
    try { await readSnapshot(`${import.meta.env.BASE_URL}news-feed.json`); success = true } catch { /* Try the current repository snapshot. */ }
    const local = ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname)
    if (!import.meta.env.DEV && !local && config.liveFeedUrl) {
      try {
        const url = new URL(config.liveFeedUrl)
        url.searchParams.set('v', String(Math.floor(Date.now() / 300000)))
        await readSnapshot(url.href)
        success = true
      } catch { /* Keep the last published snapshot. */ }
    }
    newsConnectionFailed.value = !success
  } finally { refreshingNews.value = false }
}

export function startNewsRefresh() {
  void refreshNews()
  const refreshVisible = () => { if (document.visibilityState === 'visible') void refreshNews() }
  const timer = window.setInterval(refreshVisible, 5 * 60 * 1000)
  document.addEventListener('visibilitychange', refreshVisible)
  return () => { clearInterval(timer); document.removeEventListener('visibilitychange', refreshVisible) }
}
