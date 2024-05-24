<script lang="ts" setup>
// import type { NuxtLink } from '#build/components';
</script>

<template>
  <main class="notes">
    <h1>
      <NuxtLink to="/">Home</NuxtLink>
    </h1>
    <h2>Content</h2>
    <slot></slot>
  </main>
</template>

<style scoped>
.notes {
  display: flex;
  flex-direction: column;
  line-height: 200%;
  margin: 24px;
}
</style>
