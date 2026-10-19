<script setup>
import MarkdownLoader from '../MarkdownLoader.vue'
defineProps({ content: { type: String, required: true } })
</script>

<template>
  <div class="content-page"><MarkdownLoader :content="content" class="markdown-content" /></div>
</template>

<style scoped>
.content-page { display: flex; justify-content: center; }
.markdown-content { width: 100%; max-width: 820px; min-width: 0; }
</style>
