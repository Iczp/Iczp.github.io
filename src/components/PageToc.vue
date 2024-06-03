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
const isOpen = ref(true);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="page-toc">
    <h2 class="flex flex-row justify-between items-center  gap-4 sm:max-w-64" @click="toggleOpen">
      <span class="truncate text-ellipsis"> Table of Contents</span>
      <Arrow :dir="isOpen ? 'down' : 'right'" class="ml-1" />
    </h2>
    <Trees v-if="isOpen" :items="items" class="mt-2 sm:max-w-64">
      <template v-slot="{ item, depth, index, parents, row }">
        <h3
          class="flex flex-row justify-between items-center py-1"
          @click="scrollTo(item)"
        >
          <div class="flex flex-row items-center overflow-hidden">
            <!-- {{ item.$row }} -->
            <div>
              <ListAlt v-if="item.$row == 1" class="text-base mx-1.5" />
              <Anchor v-else class="text-base mx-1.5" />
            </div>

            <a
              :href="`#${item.id}`"
              class="truncate cursor-pointer"
            >
              <!-- {{ item }} -->
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
