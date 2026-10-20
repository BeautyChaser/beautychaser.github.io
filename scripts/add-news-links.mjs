import { readFile, writeFile } from 'node:fs/promises'
import { addArticleLinks } from '../src/data/news-core.js'

const links = process.argv.slice(2)
if (!links.length) {
  console.error('Usage: npm run news:add -- "https://platform/article-link" ["https://platform/another-link"]')
  process.exitCode = 1
} else {
  const config = JSON.parse(await readFile(new URL('../config/news-sources.json', import.meta.url), 'utf8'))
  const target = new URL('../config/news-manual.json', import.meta.url)
  const existing = JSON.parse(await readFile(target, 'utf8'))
  const next = addArticleLinks(existing, links, config.sources)
  await writeFile(target, `${JSON.stringify(next, null, 2)}\n`)
  console.log(`Saved ${next.length - existing.length} new article links. Existing entries were preserved.`)
}
