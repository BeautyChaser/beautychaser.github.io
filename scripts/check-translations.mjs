import assert from 'node:assert/strict'
import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createCatalog } from '../src/data/content.js'

const root = fileURLToPath(new URL('../markdown/', import.meta.url))
const documents = {}
async function collect(directory, prefix = '') {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = prefix + entry.name
    if (entry.isDirectory()) await collect(join(directory, entry.name), `${path}/`)
    else if (entry.isFile() && path.endsWith('.md')) documents[path] = await readFile(join(directory, entry.name), 'utf8')
  }
}
await collect(root)
const catalog = createCatalog(documents)
assert(catalog.length > 0, 'No articles found')
for (const note of catalog) {
  for (const language of ['zh', 'en']) {
    assert(note.versions[language], `Missing ${language} translation for ${note.slug}`)
    assert(note.versions[language].title.trim(), `Missing ${language} title for ${note.slug}`)
    assert(note.versions[language].content.trim(), `Missing ${language} content for ${note.slug}`)
  }
}
console.log(`Verified complete Chinese/English versions of ${catalog.length} articles, including News.`)
