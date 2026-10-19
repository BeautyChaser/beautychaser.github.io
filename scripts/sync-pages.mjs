import { copyFile, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('../', import.meta.url))
const distRoot = join(projectRoot, 'dist')
const manifestPath = join(projectRoot, '.pages-manifest.json')
// These names belong to the source project and must never be published over.
const reservedNames = new Set([
  'src', 'public', 'scripts', 'agent', 'markdown', 'node_modules', 'dist', 'reference', 'design_logic',
  'package.json', 'package-lock.json', 'vite.config.js', 'tsconfig.json',
  'jsconfig.json', 'readme.md', 'agents.md', 'logic.md', '-w',
])

async function listFiles(directory, prefix = '') {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const path = prefix + entry.name
    if (entry.isDirectory()) {
      files.push(...await listFiles(join(directory, entry.name), `${path}/`))
    } else if (entry.isFile()) {
      files.push(path)
    } else {
      throw new Error(`Unsupported build entry: ${path}`)
    }
  }
  return files.sort()
}

function validatePath(path) {
  if (typeof path !== 'string' || path.includes('\\') || path.includes(':') ||
      path.split('/').some(part => !part || part === '.' || part === '..')) {
    throw new Error(`Invalid output path: ${path}`)
  }
  const name = path.split('/')[0].toLowerCase()
  if (reservedNames.has(name) || (name.startsWith('.') && path !== '.nojekyll')) {
    throw new Error(`Build output conflicts with source files: ${path}`)
  }
}

const files = await listFiles(distRoot)
if (!files.includes('index.html') || !files.includes('.nojekyll')) {
  throw new Error('Build output must contain index.html and .nojekyll')
}

let previousFiles
try {
  previousFiles = JSON.parse(await readFile(manifestPath, 'utf8'))
} catch (error) {
  if (error.code !== 'ENOENT') throw error
  // First migration: all existing assets/ files are the old compiled output.
  previousFiles = (await listFiles(join(projectRoot, 'assets'), 'assets/'))
}
if (!Array.isArray(previousFiles)) throw new Error('Invalid Pages manifest')
for (const path of [...files, ...previousFiles]) validatePath(path)

// Publish resources first and the entry point last, only after Vite succeeds.
for (const path of [...files.filter(path => path !== 'index.html'), 'index.html']) {
  const destination = join(projectRoot, path)
  await mkdir(dirname(destination), { recursive: true })
  await copyFile(join(distRoot, path), destination)
}
const currentFiles = new Set(files)
for (const path of previousFiles) {
  if (!currentFiles.has(path)) await rm(join(projectRoot, path), { force: true })
}
await writeFile(manifestPath, `${JSON.stringify(files, null, 2)}\n`)
console.log(`Published ${files.length} files to the repository root (index.html).`)
