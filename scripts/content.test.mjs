import test from 'node:test'
import assert from 'node:assert/strict'
import { createCatalog, localizeNote, searchCatalog } from '../src/data/content.js'

const catalog = createCatalog({
  'physics/相场.md': '# 相场模型\n\n界面迁移率决定相场动力学。',
  'physics/相场.en.md': '# Phase-field models\n\nInterface mobility determines phase-field dynamics.',
  'engineering.md': '# 系统搭建\n\n这篇笔记也提到相场模型。',
  'engineering.en.md': '# Building systems\n\nThis note also mentions phase-field models.',
  'news/2026-10-19-update.md': '# 网站更新\n\n新增全文搜索。',
  'news/2026-10-19-update.en.md': '# Website update\n\nFull-text search is available.',
  'README.md': '# 维护说明\n\n不应公开收录。',
  'README.en.md': '# Maintenance\n\nNot a published article.',
})

test('translation pairs keep one article identity, stable Unicode URLs, and localized content', () => {
  assert.equal(catalog.length, 3)
  const note = catalog.find(note => note.slug === 'physics/相场')
  const zh = localizeNote(note, 'zh')
  const en = localizeNote(note, 'en')
  assert.equal(zh.href, en.href)
  assert.equal(decodeURIComponent(en.href.slice(6)), 'physics/相场')
  assert.equal(en.title, 'Phase-field models')
  assert.equal(en.translationMissing, false)
  assert(!/[\p{Script=Han}]/u.test(en.description))
})

test('search matches either language once and displays the requested language', () => {
  const result = searchCatalog(catalog, '迁移率', 'en')
  assert.equal(result.length, 1)
  assert.equal(result[0].title, 'Phase-field models')
  assert(result[0].excerpt.includes('mobility'))
  assert.equal(searchCatalog(catalog, 'MOBILITY dynamics', 'zh').length, 1)
  assert.equal(searchCatalog(catalog, 'mobility absent', 'en').length, 0)
  assert.equal(searchCatalog(catalog, '   ', 'en').length, 0)
})

test('title results rank above body matches and normalize dashes and case', () => {
  const result = searchCatalog(catalog, 'PHASE–FIELD', 'en')
  assert.equal(result.length, 2)
  assert.equal(result[0].slug, 'physics/相场')
  assert.equal(result[0].titleMatch, true)
  assert.equal(result[1].titleMatch, false)
})

test('News translations form one dated update', () => {
  const news = catalog.filter(note => note.isNews)
  assert.equal(news.length, 1)
  assert.equal(news[0].date, '2026-10-19')
  assert.equal(localizeNote(news[0], 'en').title, 'Website update')
})

test('missing translations are explicit in development and duplicate versions are rejected', () => {
  const [note] = createCatalog({ 'draft.md': '# 草稿\n\n正文。' })
  assert.equal(localizeNote(note, 'en').translationMissing, true)
  assert.throws(() => createCatalog({ 'note.md': '# 一\n\n正文。', 'note.zh.md': '# 二\n\n正文。' }), /Duplicate zh article/)
})
