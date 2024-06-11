<script setup lang="ts">
import { formatTags } from '@/utils/formatTags';
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

// const { data } = await useAsyncData('detail', () => {

//   if(!route.path.startsWith('/notes')) {

//     return undefined;
//   }
//   return queryContent(route.path).findOne();
// });

const { items: tags, getInfo: getTag } = await useTags('tags');

const { items: categories, getInfo: getCategory } = await useTags('categories');

// const tagItems = ref(formatTags(data.value?.tags));
// const categoryItems = ref(formatTags(data.value?.categories));

const article = await queryContent(route.path).findOne();
const tocItems = [
  {
    text: 'Table of contents',
    children: article?.body?.toc?.links,
  },
];
</script>

<template>
  <main class="flex relative flex-col sm:flex-row-reverse">
    <section class="z-10 sm:fixed">
      <UCard
        class="bg-transparent dark:bg-transparent backdrop-blur-lg shadow-md drak:shadow-white mb-8 sm:mb-0"
      >
        <PageToc :items="tocItems" />
      </UCard>
    </section>

    <section v-if="article" class="flex flex-col flex-1">
      <!-- page:
      <pre>{{ data }}</pre> -->
      <!-- date: {{ data?.date }} tags: {{ tags }} categories:
          {{ categories }} -->
      <ContentDoc :excerpt="true">
        <template v-slot="{ doc, excerpt }">
          <pre>

            date: {{ article?.date }} 
            <!-- tags: {{ tags }} 
            categories:
          {{ categories }} -->
          </pre>
          <!-- {{ doc }} -->
          <article
            class="w-full space-y-12 prose prose-dark no-underline prose-headings:no-underline prose-a:no-underline hover:prose-a:underline dark:prose-dark"
          >
            <ContentRenderer :value="doc" />
          </article>
        </template>
        <template #not-found>
          <h1>Document not found!!!</h1>
        </template>
        <template #empty>
          <h1>Document is empty</h1>
        </template>
      </ContentDoc>

      <AlignTop />

      <!-- <section class="tags flex flex-row items-center">
        <h3 class="text-lg mr-2">标签</h3>
        <ul class="flex flex-row gap-2">
          <li v-for="item in tags" :key="item">
            <NuxtLink :to="`/tags/${item.name}`">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </section> -->

      <!-- <section class="categories flex flex-row items-center">
        <h3 class="text-lg mr-2">栏目</h3>
        <ul class="flex flex-row gap-2">
          <li v-for="item in categoryItems" :key="item">
            <NuxtLink :to="`/categories/${getCategory(item).name}`">
              {{ getCategory(item).title }}
            </NuxtLink>
          </li>
        </ul>
      </section> -->

      <!-- <div class="categories flex flex-col gap-4"></div> -->

      <div class="flex flex-col justify-between gap-4 sm:flex-row mt-4">
        <!-- <UCard v-if="prev" class="flex flex-1"> -->
        <NuxtLink v-if="prev" :to="prev._path" class="page-item">
          <span class="arrow">
            <Icon name="ic:outline-arrow-back" />
          </span>
          <h3 class="text-lg line-clamp-2">
            {{ prev.title }}
          </h3>
          <p v-if="prev.description">{{ prev.description }}</p>
        </NuxtLink>
        <!-- </UCard>
        <UCard v-if="next" class="flex flex-1 justify-end"> -->
        <NuxtLink v-if="next" :to="next._path" class="page-item">
          <span class="arrow">
            <Icon name="ic:outline-arrow-forward" />
          </span>
          <h3 class="text-lg line-clamp-2">
            {{ next.title }}
          </h3>
          <p v-if="next.description">{{ next.description }}</p>
        </NuxtLink>
        <!-- </UCard> -->
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.page-item {
  @apply flex flex-1 flex-col border border-solid rounded-md p-4 border-gray-200  dark:border-gray-700 dark:bg-gray-800;
}

.page-item:hover {
  @apply hover:border-green-200  hover:dark:border-green-700  hover:text-green-400;
}
.page-item:last-child {
  @apply items-end  text-right;
}

.page-item:hover .arrow {
  @apply bg-green-100 dark:bg-green-700;
}
.arrow {
  @apply rounded-full border flex w-8 h-8 flex-col justify-center items-center border-gray-200  dark:border-gray-600 dark:text-primary-400 bg-gray-200 mr-2 mb-2 dark:bg-gray-700;
}
</style>
