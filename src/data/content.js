const categories = {
  zh: { news: '近况更新', physics: '计算物理', engineering: '工程记录', notes: '研究笔记' },
  en: { news: 'NEWS & UPDATES', physics: 'COMPUTATIONAL PHYSICS', engineering: 'ENGINEERING NOTES', notes: 'FIELD NOTES' },
}

export function normalize(text) {
  return text.normalize('NFKC').toLocaleLowerCase().replace(/[–—−]/g, '-')
}

function plainText(markdown, language) {
  return markdown
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\$\$[\s\S]*?\$\$/g, language === 'en' ? ' [equation] ' : ' [数学公式] ')
    .replace(/\$([^$\n]+)\$/g, '$1')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/```[^\n]*\n/g, '')
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^\s{0,3}#{1,6}\s+/gm, '')
    .replace(/[*_`~>|]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function createCatalog(documents) {
  const grouped = new Map()
  for (const [path, raw] of Object.entries(documents)) {
    const fileName = path.replace('../../markdown/', '')
    if (/(?:^|\/)readme(?:\.(?:zh|en))?\.md$/i.test(fileName)) continue
    const language = fileName.match(/\.(zh|en)\.md$/i)?.[1].toLowerCase() ?? 'zh'
    const slug = fileName.replace(/(?:\.(?:zh|en))?\.md$/i, '')
    const entry = grouped.get(slug) ?? {
      slug, fileName: `${slug}.md`, href: `#note/${encodeURIComponent(slug)}`,
      isNews: slug.startsWith('news/'),
      date: slug.startsWith('news/') ? (slug.match(/\d{4}-\d{2}-\d{2}/)?.[0] ?? '') : '',
      versions: {},
    }
    if (entry.versions[language]) throw new Error(`Duplicate ${language} article: ${slug}`)
    const titleMatch = raw.match(/^#\s+(.+?)\s*#*\s*$/m)
    const title = plainText(titleMatch?.[1] ?? slug.split('/').at(-1), language)
    const content = titleMatch ? raw.replace(titleMatch[0], '').trim() : raw.trim()
    const text = plainText(content, language)
    const paragraph = content.split(/\r?\n\s*\r?\n/).find(part => part.trim() && !/^\s*(?:#|---|```|\$\$|<!--)/.test(part)) ?? text
    const summary = plainText(paragraph, language)
    const limit = language === 'en' ? 200 : 110
    entry.versions[language] = {
      title, content, text,
      description: summary.length > limit ? `${summary.slice(0, limit)}…` : summary,
      searchTitle: normalize(title), searchContent: normalize(`${text} ${content}`),
    }
    grouped.set(slug, entry)
  }
  return [...grouped.values()]
    .map(note => {
      const titles = Object.values(note.versions).map(version => version.title).join(' ')
      return { ...note, categoryKey: note.isNews ? 'news' : /Allen|方程|物理|相场|physics|phase.field/i.test(titles) ? 'physics' : /部署|工程|GitHub|Vue|deployment|engineering/i.test(titles) ? 'engineering' : 'notes' }
    })
    .sort((a, b) => a.fileName.localeCompare(b.fileName, 'zh-CN'))
}

export function localizeNote(note, language) {
  const contentLocale = note.versions[language] ? language : Object.keys(note.versions)[0]
  return {
    ...note, ...note.versions[contentLocale], contentLocale,
    translationMissing: contentLocale !== language,
    category: categories[language][note.categoryKey],
    label: categories[language][note.isNews ? 'news' : 'notes'],
  }
}

export function searchCatalog(catalog, query, language) {
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean)
  if (!terms.length) return []
  return catalog
    .filter(note => terms.every(term => Object.values(note.versions).some(version => version.searchTitle.includes(term) || version.searchContent.includes(term))))
    .map(entry => {
      const note = localizeNote(entry, language)
      const versions = Object.values(entry.versions)
      const titleMatch = terms.some(term => versions.some(version => version.searchTitle.includes(term)))
      const score = terms.reduce((total, term) => total + (note.searchTitle.includes(term) ? 8 : versions.some(version => version.searchTitle.includes(term)) ? 4 : 1), 0)
      const hits = terms.map(term => normalize(note.text).indexOf(term)).filter(index => index >= 0).sort((a, b) => a - b)
      const start = Math.max(0, (hits[0] ?? 0) - 28)
      const length = language === 'en' ? 230 : 140
      const excerpt = `${start > 0 ? '…' : ''}${note.text.slice(start, start + length)}${start + length < note.text.length ? '…' : ''}`
      return { ...note, titleMatch, score, excerpt }
    })
    .sort((a, b) => b.score - a.score || a.fileName.localeCompare(b.fileName, 'zh-CN'))
}
