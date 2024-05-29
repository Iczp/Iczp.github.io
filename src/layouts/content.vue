<script lang="ts" setup>
// import type { NuxtLink } from '#build/components';
</script>

<template>
  <main class="flex flex-row gap-6 notes">
    <ContentSilder class="w-56" />
    <ContentMain class="flex-1" />
  </main>
</template>

<style scoped>
.notes {
  display: flex;
}
.content-doc {
  @apply gap-3;
}
</style>
