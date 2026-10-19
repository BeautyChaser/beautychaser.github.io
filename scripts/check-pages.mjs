import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import { dirname, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const files = JSON.parse(await readFile(join(root, '.pages-manifest.json'), 'utf8'))
assert(files.includes('index.html'), 'Missing Pages entry point')
assert(files.includes('.nojekyll'), 'Missing .nojekyll')

for (const path of files) {
  const published = await readFile(join(root, path))
  const built = await readFile(join(root, 'dist', path))
  assert(published.equals(built), `Published output differs from dist: ${path}`)
}

const html = await readFile(join(root, 'index.html'), 'utf8')
assert(html.includes('<div id="app"></div>'), 'Missing Vue mount point')
assert(!html.includes('/main.js') && !html.includes('/src/'), 'Entry still references source code')
assert(html.includes('跨领域计算物理与 Physical AI 系统架构师'), 'Missing page title')

async function checkReference(from, url) {
  if (/^(?:https?:|data:|#|mailto:)/i.test(url)) return
  assert(!url.startsWith('/'), `URL will break under a repository subpath: ${url}`)
  const path = resolve(root, dirname(from), decodeURIComponent(url.split(/[?#]/)[0]))
  const relativePath = relative(root, path)
  assert(relativePath !== '..' && !relativePath.startsWith(`..${sep}`), `URL escapes site: ${url}`)
  assert((await stat(path)).isFile(), `Missing resource: ${from} -> ${url}`)
}

for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  await checkReference('index.html', match[1])
}
for (const file of files.filter(path => path.endsWith('.css'))) {
  const css = await readFile(join(root, file), 'utf8')
  for (const match of css.matchAll(/url\(\s*["']?([^\s"')]+)["']?\s*\)/g)) {
    await checkReference(file, match[1])
  }
}
console.log(`Verified ${files.length} published files, entry point, and HTML/CSS resource paths.`)
