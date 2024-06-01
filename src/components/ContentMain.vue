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

// console.log('content');

const { data } = await useAsyncData('home', () =>
  queryContent(route.path).findOne()
);

const tocItems = [
  {
    text: 'Table of contents',
    children: data.value?.body?.toc?.links,
  },
];
</script>

<template>
  <main class="flex flex-row-reverse">
    <section class="fixed">
      <UCard class="bg-transparent">
        <PageToc :items="tocItems" />
      </UCard>
    </section>

    <section class="flex flex-col flex-1">
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
        <UCard class="flex flex-1">
          <NuxtLink v-if="prev" :to="prev._path">{{ prev.title }}</NuxtLink>
        </UCard>
        <UCard class="flex flex-1 justify-end">
          <NuxtLink v-if="next" :to="next._path">{{ next.title }}</NuxtLink>
        </UCard>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
