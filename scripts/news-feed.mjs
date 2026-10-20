import { XMLParser, XMLValidator } from 'fast-xml-parser'
import { mergePosts, normalizePost, isoDate } from '../src/data/news-core.js'

const list = value => value == null ? [] : Array.isArray(value) ? value : [value]
const text = value => typeof value === 'string' ? value : value?.['#text'] ?? ''
function plain(value) {
  return text(value).replace(/<(?:script|style)\b[^>]*>[\s\S]*?<\/(?:script|style)>/gi, '')
    .replace(/<[^>]*>/g, ' ').replace(/&(?:nbsp|#160);/g, ' ').replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/\s+/g, ' ').trim()
}

export function parseFeed(xml, source, feed) {
  if (typeof xml !== 'string' || xml.length > 2_000_000 || /<!DOCTYPE|<!ENTITY/i.test(xml)) throw new Error('Unsafe feed')
  if (XMLValidator.validate(xml) !== true) throw new Error('Invalid XML')
  const parsed = new XMLParser({ ignoreAttributes: false, removeNSPrefix: true, parseTagValue: false }).parse(xml)
  if (!parsed.rss?.channel && !parsed.feed && !parsed.RDF) throw new Error('Not an RSS or Atom feed')
  const entries = list(parsed.rss?.channel?.item ?? parsed.feed?.entry ?? parsed.RDF?.item)
  if (entries.length > 500) throw new Error('Feed contains too many entries')
  const items = entries.map(entry => {
    const link = typeof entry.link === 'string' ? entry.link : list(entry.link).find(link => !link['@_rel'] || link['@_rel'] === 'alternate')?.['@_href']
    const language = feed.language ?? 'zh'
    const title = plain(entry.title)
    return normalizePost({
      source: source.id, url: link, title: { [language]: title },
      summary: { [language]: plain(entry.description ?? entry.summary ?? entry.encoded ?? entry.content).slice(0, 240) },
      publishedAt: text(entry.pubDate ?? entry.published ?? entry.date ?? entry.updated), kind: feed.kind,
    }, [source])
  })
  // An unexpected response must not masquerade as a successful empty feed.
  if (entries.length && items.some(item => !item)) throw new Error('Feed entries have missing dates, titles, or invalid links')
  return items
}

export async function collectNews({ sources, manual, previous, fetchFeed, now = new Date().toISOString(), onFeedError = () => {} }) {
  const manualItems = manual.map(item => normalizePost({ ...item, origin: 'manual' }, sources))
  if (manualItems.some(item => !item)) throw new Error('Invalid manual news item: check source, HTTPS URL, date and title')
  const collected = await Promise.all(sources.map(async source => {
    const old = previous.sources.find(item => item.id === source.id)
    if (!source.feeds.length) return { state: { id: source.id, status: 'manual', lastAttemptAt: null, lastSuccessAt: null }, items: [] }
    const results = await Promise.allSettled(source.feeds.map(async feed => parseFeed(await fetchFeed(feed.url), source, feed)))
    for (const result of results) if (result.status === 'rejected') onFeedError(source.id, result.reason)
    const successes = results.filter(result => result.status === 'fulfilled')
    return {
      state: {
        id: source.id, status: successes.length === results.length ? 'ok' : successes.length ? 'partial' : 'unavailable',
        lastAttemptAt: now, lastSuccessAt: successes.length ? now : isoDate(old?.lastSuccessAt),
      },
      items: successes.flatMap(result => result.value),
    }
  }))
  return {
    version: 1, generatedAt: now, sources: collected.map(result => result.state),
    items: mergePosts([
      ...previous.items.filter(item => item.origin !== 'manual'),
      ...collected.flatMap(result => result.items), ...manualItems,
    ], sources),
  }
}
