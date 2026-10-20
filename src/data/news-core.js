// Shared by the website and the collector. External text is always rendered as text.
export function canonicalPostUrl(value, hosts) {
  try {
    const url = new URL(value)
    if (url.protocol !== 'https:' || url.username || url.password || !hosts.includes(url.hostname)) return ''
    for (const key of [...url.searchParams.keys()]) {
      if (/^(?:utm_|spm|from$|source$|share_)/i.test(key)) url.searchParams.delete(key)
    }
    url.hash = ''
    return url.href
  } catch { return '' }
}

export function isoDate(value) {
  if (typeof value !== 'string' || !value.trim()) return null
  const time = Date.parse(value)
  return Number.isFinite(time) ? new Date(time).toISOString() : null
}

function textVersions(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {}
  return Object.fromEntries(['zh', 'en'].filter(key => typeof value[key] === 'string' && value[key].trim())
    .map(key => [key, value[key].trim().slice(0, 1000)]))
}

export function normalizePost(item, sources) {
  const source = sources.find(source => source.id === item?.source)
  if (!source) return null
  const url = canonicalPostUrl(item.url, source.hosts)
  const publishedAt = isoDate(item.publishedAt)
  const collectedAt = isoDate(item.collectedAt)
  const manual = item.origin === 'manual'
  const providedTitle = textVersions(item.title)
  const titlePending = item.titlePending === true || !Object.keys(providedTitle).length
  if (!url || (!publishedAt && (!manual || !collectedAt)) || (!manual && titlePending)) return null
  const title = titlePending ? {
    zh: `${source.name?.zh ?? source.id}文章链接`,
    en: `${source.name?.en ?? source.id} article link`,
  } : providedTitle
  return {
    id: `${source.id}:${url}`, source: source.id, url, publishedAt, collectedAt, title, titlePending,
    summary: textVersions(item.summary),
    kind: ['article', 'video', 'post'].includes(item.kind) ? item.kind : 'post',
    origin: manual ? 'manual' : 'feed',
  }
}

export function mergePosts(items, sources) {
  const unique = new Map()
  for (const raw of items) {
    const item = normalizePost(raw, sources)
    if (item) unique.set(item.id, { ...unique.get(item.id), ...item })
  }
  const counts = new Map()
  return [...unique.values()].sort((a, b) => (b.publishedAt ?? b.collectedAt).localeCompare(a.publishedAt ?? a.collectedAt))
    .filter(item => { const count = (counts.get(item.source) ?? 0) + 1; counts.set(item.source, count); return count <= 100 })
}

export function localizedPost(item, language) {
  const contentLocale = item.title[language] ? language : Object.keys(item.title)[0]
  return {
    ...item, href: item.url, external: true, contentLocale,
    title: item.title[contentLocale], description: item.summary[language] ?? item.summary[contentLocale] ?? '',
    date: new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(item.publishedAt ?? item.collectedAt)),
    dateKind: item.publishedAt ? 'published' : 'collected',
  }
}

// A request containing just URLs is enough to save links. Metadata can be added
// after reading the originals; never substitute today's date for publication.
export function addArticleLinks(existing, links, sources, now = new Date().toISOString()) {
  const records = [...existing]
  const known = new Set(existing.map(item => {
    const source = sources.find(source => source.id === item.source)
    return source ? canonicalPostUrl(item.url, source.hosts) : ''
  }))
  for (const value of links) {
    const source = sources.find(source => canonicalPostUrl(value, source.hosts))
    if (!source) throw new Error('Article URL must belong to a configured public platform')
    const url = canonicalPostUrl(value, source.hosts)
    if (new URL(url).pathname.replace(/\/$/, '') === new URL(source.profileUrl).pathname.replace(/\/$/, '')) throw new Error('Provide an article link, not a profile link')
    if (known.has(url)) continue
    const kind = source.id === 'bilibili' && new URL(url).pathname.startsWith('/video/') ? 'video' : 'article'
    records.push({ source: source.id, url, publishedAt: null, collectedAt: now, kind, title: {}, summary: {}, origin: 'manual' })
    known.add(url)
  }
  return records
}

export function parseSnapshot(value, sources) {
  if (value?.version !== 1 || !Array.isArray(value.items) || !Array.isArray(value.sources)) throw new Error('Invalid news snapshot')
  return {
    version: 1, generatedAt: isoDate(value.generatedAt), items: mergePosts(value.items, sources),
    sources: sources.map(source => {
      const saved = value.sources.find(item => item.id === source.id)
      return {
        id: source.id,
        status: ['ok', 'partial', 'unavailable', 'manual'].includes(saved?.status) ? saved.status : 'pending',
        lastAttemptAt: isoDate(saved?.lastAttemptAt), lastSuccessAt: isoDate(saved?.lastSuccessAt),
      }
    }),
  }
}
