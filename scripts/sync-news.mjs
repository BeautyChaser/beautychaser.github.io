import { readFile, writeFile, rename } from 'node:fs/promises'
import { collectNews } from './news-feed.mjs'
import { parseSnapshot } from '../src/data/news-core.js'

const config = JSON.parse(await readFile(new URL('../config/news-sources.json', import.meta.url), 'utf8'))
const manual = JSON.parse(await readFile(new URL('../config/news-manual.json', import.meta.url), 'utf8'))
const snapshotFile = new URL('../public/news-feed.json', import.meta.url)
let previous = { version: 1, sources: [], items: [] }
try { previous = parseSnapshot(JSON.parse(await readFile(snapshotFile, 'utf8')), config.sources) }
catch (error) { if (error.code !== 'ENOENT') throw error }

async function fetchFeed(value) {
  let url = new URL(value)
  if (url.hostname === 'rsshub.app' && process.env.RSSHUB_BASE_URL) {
    const base = new URL(process.env.RSSHUB_BASE_URL)
    url = new URL(`${base.pathname.replace(/\/$/, '')}${url.pathname}${url.search}`, base.origin)
  }
  if (url.protocol !== 'https:' || url.username || url.password) throw new Error('Feed URL must use public HTTPS')
  const response = await fetch(url, {
    signal: AbortSignal.timeout(20000), headers: { Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml', 'User-Agent': 'Callingforwind-News/1.0' },
  })
  if (!response.ok) throw new Error(`Feed HTTP ${response.status}`)
  if (Number(response.headers.get('content-length')) > 2_000_000) throw new Error('Feed too large')
  const reader = response.body.getReader()
  const chunks = []
  let size = 0
  while (true) {
    const { value: chunk, done } = await reader.read()
    if (done) break
    size += chunk.length
    if (size > 2_000_000) { await reader.cancel(); throw new Error('Feed too large') }
    chunks.push(chunk)
  }
  return Buffer.concat(chunks).toString('utf8')
}

const snapshot = await collectNews({ sources: config.sources, manual, previous, fetchFeed, onFeedError: (id, error) => console.warn(`${id}: ${error.cause?.code ?? error.message}`) })
const temp = new URL('../public/news-feed.json.tmp', import.meta.url)
await writeFile(temp, `${JSON.stringify(snapshot, null, 2)}\n`)
await rename(temp, snapshotFile)
for (const source of snapshot.sources) {
  const count = snapshot.items.filter(item => item.source === source.id).length
  console.log(`${source.id}: ${source.status}; ${count} saved updates`)
}
if (snapshot.sources.some(source => source.status === 'unavailable' || source.status === 'partial')) {
  console.warn('Some public feeds are unavailable. Previous updates were retained; platform profiles remain available.')
}
