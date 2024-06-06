<script setup lang="ts">
import { useFetch } from '@vueuse/core';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const { params, query } = route;

const runtimeConfig = await useRuntimeConfig();

const { integrity, api } = runtimeConfig.public.content;

const { list, getAllByTags } = await useNavigationList();

const items = ref(getAllByTags([params.id]));

</script>

<template>
  <main>
    <h1>params :{{ params }}</h1>

    <ul
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <li v-for="item in items" :key="item._path" class="">
        <NuxtLink :to="`/tags/${item.name}`" class="card flex flex-col">
          <h3 class="text-sm">
            <span>{{ item.title }}</span>
          </h3>

          <p class="text-slate-600">{{ item }}</p>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<style lang="scss" scoped>
.card {
  @apply border border-slate-200 rounded-lg p-4 dark:border-slate-700 bg-slate-100 dark:bg-slate-800;
}
.card:hover {
  @apply border-green-100 dark:border-green-700 bg-green-500 bg-opacity-20;
}
</style>
