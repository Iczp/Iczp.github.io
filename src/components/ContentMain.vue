<script setup lang="ts">
const route = useRoute();
const {
  globals,
  navigation,
  surround,
  page,
  // Computed properties from `page` key
  excerpt,
  toc,
  type,
  layout,
  // Computed properties from `surround` key
  next,
  prev,
} = useContent();

console.log('content');
</script>

<template>
  <main class="flex flex-col">
    <!-- <PageToc /> -->

    toc:{{ toc }} page:{{ page }}

    <ContentDoc :excerpt="true">
      <template v-slot="{ doc }">
        <article
          class="w-full space-y-12 prose prose-dark no-underline prose-headings:no-underline prose-a:no-underline hover:prose-a:underline dark:prose-dark"
        >
          <ContentRenderer :value="doc" />
        </article>
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
      <template #empty>
        <h1>Document is empty</h1>
      </template>
    </ContentDoc>

    <div class="flex flex-row justify-between gap-2">
      <div class="flex flex-1 border border-sky-100 p-4">
        <NuxtLink v-if="prev" :to="prev._path">{{ prev.title }}</NuxtLink>
      </div>
      <div class="flex flex-1 border border-sky-100 justify-end p-4">
        <NuxtLink v-if="next" :to="next._path">{{ next.title }}</NuxtLink>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
