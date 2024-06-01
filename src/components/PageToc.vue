<script setup lang="ts">
import { isDir } from '@/utils/isDir';

import Trees from './Trees.vue';
const props = withDefaults(
  defineProps<{
    items: Array<any>;
  }>(),
  {
    items: [],
  }
);

const { toc } = useContent();

const navToLink = (item: any) => (!isDir(item) ? item._path : undefined);

const scrollTo = (item: any) => (!isDir(item) ? item._path : undefined);

const { items } = useTrees({
  items: props.items,
});
</script>

<template>
  <div class="page-toc">
    <h2>Table of Contents</h2>

    <Trees :items="items">
      <template v-slot="{ item, depth, index, parents }">
        <h3
          class="flex flex-row justify-between items-center py-1"
          @click="scrollTo(item)"
        >
          <div class="flex flex-row items-center">
            <Anchor class="text-base mx-1.5" />
            <a :href="navToLink(item)">
              <!-- {{ item.$row }} /{{ depth }}.{{ index }}  -->
              {{ item.text }}
            </a>
          </div>
          <span v-if="item.$isDir">
            <Arrow :dir="item.$isOpen ? 'down' : 'right'" />
          </span>
        </h3>
      </template>
    </Trees>
  </div>
</template>

<style lang="scss" scoped></style>
