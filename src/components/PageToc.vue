<script setup lang="ts">
const { toc } = useContent();
</script>

<template>
  <div class="page-toc">
    <h2>Table of Contents</h2>
    <h3>{{ toc }}</h3>
    <ul v-if="toc && toc.links">
      <li v-for="link in toc.links" :key="link.text">
        <a :href="`#${link.id}`">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.page-toc {
}
</style>
