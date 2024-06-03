<script lang="ts" setup>
// import type { NuxtLink } from '#build/components';
</script>

<template>
  <main class="flex flex-row gap-8 notes my-8">
    <ContentSilder class="w-72 hidden sm:flex" />
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
