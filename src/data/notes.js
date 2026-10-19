import { computed } from 'vue'
import { locale } from '../i18n.js'
import { createCatalog, localizeNote, searchCatalog } from './content.js'

const documents = import.meta.glob('../../markdown/**/*.md', {
  query: '?raw', import: 'default', eager: true,
})

export const catalog = createCatalog(documents)
export const notes = computed(() => catalog.map(note => localizeNote(note, locale.value)))
export const news = computed(() => notes.value.filter(note => note.isNews).sort((a, b) => b.fileName.localeCompare(a.fileName)))
export const searchNotes = query => searchCatalog(catalog, query, locale.value)
