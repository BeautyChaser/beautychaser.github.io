<script setup>
import { watchEffect } from 'vue'
import { locale, t } from '@/i18n.js'
import WebHeader from '@/components/WebHeader.vue'
import WebMain from '@/components/WebMain.vue'
import Contact from '@/components/Contact.vue'
watchEffect(() => { document.documentElement.lang = locale.value === 'en' ? 'en' : 'zh-CN' })
</script>

<template>
  <a class="skip-link" href="#main-content">{{ t('跳转到正文', 'Skip to content') }}</a>
  <div class="page-container">
    <WebHeader />
    <main id="main-content"><WebMain /></main>
    <Contact />
  </div>
</template>

<style scoped>
.page-container { width: 100%; min-height: 100vh; }
main { min-height: calc(100vh - 76px); }
.skip-link { position: fixed; top: -80px; left: 20px; z-index: 1000; padding: 12px 20px; background: var(--paper-light); }
.skip-link:focus { top: 12px; }
</style>
