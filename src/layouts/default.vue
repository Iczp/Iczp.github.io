<script lang="ts" setup></script>

<template>
  <AppHeader />
  <!-- <div class="current-position">{{ $route.path }}</div> -->

  <main class="mx-auto max-w-screen-xl px-4 box-border">
    <slot></slot>
  </main>
  <AppFooter class="mx-auto max-w-screen-xl px-4 my-auto box-border mt-4" />
</template>

<style scoped></style>
