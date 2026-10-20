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
  const title = textVersions(item.title)
  if (!url || !publishedAt || !Object.keys(title).length) return null
  return {
    id: `${source.id}:${url}`, source: source.id, url, publishedAt, title,
    summary: textVersions(item.summary),
    kind: ['article', 'video', 'post'].includes(item.kind) ? item.kind : 'post',
    origin: item.origin === 'manual' ? 'manual' : 'feed',
  }
}

export function mergePosts(items, sources) {
  const unique = new Map()
  for (const raw of items) {
    const item = normalizePost(raw, sources)
    if (item) unique.set(item.id, { ...unique.get(item.id), ...item })
  }
  const counts = new Map()
  return [...unique.values()].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .filter(item => { const count = (counts.get(item.source) ?? 0) + 1; counts.set(item.source, count); return count <= 100 })
}

export function localizedPost(item, language) {
  const contentLocale = item.title[language] ? language : Object.keys(item.title)[0]
  return {
    ...item, href: item.url, external: true, contentLocale,
    title: item.title[contentLocale], description: item.summary[language] ?? item.summary[contentLocale] ?? '',
    date: item.publishedAt.slice(0, 10),
  }
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
