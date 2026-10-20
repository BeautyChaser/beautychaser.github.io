import test from 'node:test'
import assert from 'node:assert/strict'
import { parseFeed, collectNews } from './news-feed.mjs'
import { canonicalPostUrl, mergePosts, localizedPost, parseSnapshot } from '../src/data/news-core.js'

const source = { id: 'zhihu', hosts: ['zhuanlan.zhihu.com'], feeds: [{ url: 'https://feed.example/articles', language: 'zh', kind: 'article' }] }
const linkedIn = { id: 'linkedin', hosts: ['www.linkedin.com'], feeds: [] }
const sources = [source, linkedIn]
const item = { source: 'zhihu', url: 'https://zhuanlan.zhihu.com/p/123?utm_source=share', title: { zh: '相场与物理' }, summary: { zh: '模型与计算' }, publishedAt: '2026-10-19T08:00:00Z', kind: 'article' }
const empty = { version: 1, sources: [], items: [] }
const rss = '<rss version="2.0"><channel><title>Updates</title><item><title>相场 &amp; 计算</title><link>https://zhuanlan.zhihu.com/p/123</link><pubDate>Mon, 19 Oct 2026 08:00:00 GMT</pubDate><description><![CDATA[<p>一篇<strong>文章</strong></p>]]></description></item></channel></rss>'

test('RSS and Atom parse real dates and safe links, without exposing HTML', () => {
  const [post] = parseFeed(rss, source, source.feeds[0])
  assert.equal(post.title.zh, '相场 & 计算')
  assert.equal(post.publishedAt, '2026-10-19T08:00:00.000Z')
  assert(!post.summary.zh.includes('<'))
  const atom = '<feed xmlns="http://www.w3.org/2005/Atom"><entry><title>Physics</title><link rel="self" href="https://feed.example/123"/><link rel="alternate" href="https://zhuanlan.zhihu.com/p/124"/><published>2026-10-20T01:00:00Z</published><summary>Models</summary></entry></feed>'
  assert.equal(parseFeed(atom, source, source.feeds[0])[0].url, 'https://zhuanlan.zhihu.com/p/124')
})

test('collector keeps last good items and success time when a feed fails', async () => {
  const previous = { sources: [{ id: 'zhihu', lastSuccessAt: '2026-10-19T09:00:00.000Z' }], items: mergePosts([item], sources) }
  const next = await collectNews({ sources, manual: [], previous, fetchFeed: async () => { throw new Error('HTTP 403') }, now: '2026-10-20T09:00:00.000Z' })
  assert.equal(next.items.length, 1)
  assert.equal(next.sources[0].status, 'unavailable')
  assert.equal(next.sources[0].lastSuccessAt, previous.sources[0].lastSuccessAt)
  assert.equal(next.sources[1].status, 'manual')
  assert.equal(next.sources[1].lastSuccessAt, null)
})

test('partial source failures preserve existing posts, deduplicate and sort by publication', async () => {
  const mixed = { ...source, feeds: [...source.feeds, { url: 'https://feed.example/unavailable', language: 'zh', kind: 'post' }] }
  const previous = { ...empty, items: mergePosts([{ ...item, url: 'https://zhuanlan.zhihu.com/p/99', publishedAt: '2026-10-18' }, item], sources) }
  const next = await collectNews({ sources: [mixed], manual: [], previous, fetchFeed: async url => { if (url.endsWith('unavailable')) throw new Error('Unavailable'); return rss } })
  assert.equal(next.sources[0].status, 'partial')
  assert.equal(next.items.length, 2)
  assert.equal(next.items[0].url, 'https://zhuanlan.zhihu.com/p/123')
})

test('reject unsafe links, malformed or non-feed XML, invalid dates and entity declarations', () => {
  for (const url of ['javascript:alert(1)', 'https://zhuanlan.zhihu.com.evil.test/p/1', 'https://password@zhuanlan.zhihu.com/p/1']) assert.equal(canonicalPostUrl(url, source.hosts), '')
  for (const xml of ['<html>Forbidden</html>', '<rss><channel>', '<!DOCTYPE rss><rss/>', rss.replace('Mon, 19 Oct 2026 08:00:00 GMT', 'not-a-date'), rss.replace('https://zhuanlan.zhihu.com/p/123', 'javascript:alert(1)')]) assert.throws(() => parseFeed(xml, source, source.feeds[0]))
  assert.equal(mergePosts([{ ...item, publishedAt: 'bad-date' }], sources).length, 0)
  assert.throws(() => parseSnapshot({ version: 2, sources: [], items: [] }, sources))
})

test('curated posts can be translated and removed, original-language titles are explicit', async () => {
  const manual = { source: 'linkedin', url: 'https://www.linkedin.com/posts/example-123', title: { zh: '系统笔记', en: 'Systems notes' }, publishedAt: '2026-10-20', summary: {}, origin: 'manual' }
  const next = await collectNews({ sources: [linkedIn], manual: [manual], previous: empty, fetchFeed: async () => { throw new Error('should not fetch LinkedIn') } })
  assert.equal(localizedPost(next.items[0], 'en').title, 'Systems notes')
  assert.equal(localizedPost(mergePosts([item], sources)[0], 'en').contentLocale, 'zh')
  const removed = await collectNews({ sources: [linkedIn], manual: [], previous: next, fetchFeed: async () => '' })
  assert.equal(removed.items.length, 0)
})
