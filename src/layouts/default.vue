<script lang="ts" setup></script>

<template>
  <AppHeader />
  <!-- <div class="current-position">{{ $route.path }}</div> -->

  <main class="p-6 my-auto">
    <slot></slot>
  </main>
  <AppFooter class="px-6 my-auto" />
</template>

<style scoped></style>
