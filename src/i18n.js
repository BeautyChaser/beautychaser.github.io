import { nextTick, ref } from 'vue'

const storageKey = 'cfw-language'

function initialLocale() {
  if (typeof window === 'undefined') return 'zh'
  const requested = new URLSearchParams(window.location.search).get('lang')
  if (requested === 'zh' || requested === 'en') return requested
  try { return localStorage.getItem(storageKey) === 'en' ? 'en' : 'zh' } catch { return 'zh' }
}

export const locale = ref(initialLocale())
export const t = (zh, en) => locale.value === 'en' ? en : zh

export async function setLocale(value) {
  if (!['zh', 'en'].includes(value) || value === locale.value) return
  const scrollTop = window.scrollY
  locale.value = value
  try { localStorage.setItem(storageKey, value) } catch { /* Preferences are optional. */ }
  const url = new URL(window.location.href)
  url.searchParams.set('lang', value)
  window.history.replaceState(window.history.state, '', url)
  await nextTick()
  // Restore after browser scroll anchoring has settled for the translated text.
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
  window.scrollTo({ top: scrollTop, behavior: 'instant' })
}

export function formatDate(value) {
  if (!value) return ''
  if (locale.value === 'zh') return value.replaceAll('-', '.')
  return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T12:00:00Z`))
}

export const noteCount = count => t(`${count} 篇笔记`, `${count} ${count === 1 ? 'note' : 'notes'}`)
