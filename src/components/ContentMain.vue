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
</script>

<template>
  <main class="flex flex-col">
    <PageToc :items="data?.body?.toc?.links" />

    <!-- toc:{{ toc }} page:{{ page }}

    data:{{ data }} -->

    <main>
      <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
        <pre>
          <!-- {{  data }} -->
        <!-- <ContentRenderer :value="data" /> -->
      </pre>
      </ContentQuery>
    </main>

    ----------------
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
  </main>
</template>

<style lang="scss" scoped></style>
