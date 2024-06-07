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

// const items = ref([]);
</script>

<template>
  <div class="flex flex-row gap-4">
    <aside class="flex flex-col w-48">
      <!-- <TagNav /> -->

      <TagList class="flex flex-col gap-2">
        <template v-slot="{ item }">
          <NuxtLink
            :to="`/tags/${item.name}`"
            class="flex flex-row justify-between items-center py-1"
          >
            <h3 class="flex flex-row items-center text-sm">
              <Icon :name="item.icon" class="size-4" />
              <span class="mx-2">{{ item.title }}</span>
            </h3>
            <div class="flex flex-row gap-1 items-center">
              <span class="text-slate-400">{{ item.count }}</span>
              <ArrowRight class="size-3" />
            </div>
          </NuxtLink>
        </template>
      </TagList>
    </aside>

    <article class="flex flex-1 flex-col">
      <header>params :{{ params }}</header>

      <section>
        <ul class="grid grid-cols-1 gap-4">
          <li v-for="item in items" :key="item._path" class="">
            <NuxtLink
              :to="`${item._path}`"
              class="card flex flex-col hover:card-hover p-4"
            >
              <div class="flex flex-row justify-between gap-4">
                <aside
                  class="size-24 rounded-md flex justify-center items-center border border-gray-500 border-opacity-20"
                >
                  imag
                </aside>
                <main class="flex flex-1 flex-col gap-1">
                  <h3 class="flex flex-row justify-between items-center ">
                    <div class="text-base">
                      <span>{{ item.title }}</span>
                    </div>
                    <div class="flex flex-row items-center gap-2">
                      <TagItem
                        v-for="tag in item.tags"
                        :value="tag"
                        :key="tag"
                        v-slot="{ tag: tagInfo }"
                      >
                        <Icon v-if="tagInfo.icon" :name="tagInfo.icon" class="size-4" ></Icon>
                        <span v-else>{{ tagInfo.title }}</span>
                      </TagItem>
                    </div>
                  </h3>
                  <div class="text-sm text-gray-600">
                    <p class="line-clamp-2 min-h-10">{{ item.description || item.title }}</p>
                  </div>
                  <div class="flex flex-row-reverse justify-between text-xs py-1">
                    <div v-if="item.date" class="text-green-400">
                      {{ item.date }}
                    </div>
                    <div v-if="item.author" class="text-sky-500">
                      {{ item.author }}
                    </div>
                  </div>
                </main>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>
