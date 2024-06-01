<script setup lang="ts">
import { isDir } from '@/utils/isDir';
const { toc } = useContent();

const route = useRoute();

const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
);

const { navBottomLink, navDirFromPath, navPageFromPath, navKeyFromPath } =
  useContentHelpers();

// const dir = navDirFromPath(route.path, navigation.value);

const { items, toggleOpen } = useTrees({
  items: navigation.value, //![0]?.children,
  action: (x) => {
    x.$isDir = isDir(x);
  },
  active: (item, depth, index, parents) => item._path === route.path,
});

const navToLink = (item: any) => (!isDir(item) ? item._path : undefined);
</script>

<template>
  <div class="page-toc">
    <h2>Table of Contents</h2>

    <Trees :items="items">
      <template v-slot="{ item, depth, index, parents }">
        <h3
          class="flex flex-row justify-between items-center py-1"
          @click="toggleOpen(item)"
        >
          <div class="flex flex-row items-center">
            <Folder v-if="item.$isDir" class="text-base mx-1.5" />
            <File v-else class="text-base mx-1.5" />
            <a :href="navToLink(item)">
              <!-- {{ item.$row }} /{{ depth }}.{{ index }}  -->
              {{ item.title }}
            </a>
          </div>
          <span v-if="item.$isDir">
            <Arrow :dir="item.$isOpen ? 'down' : 'right'" />
          </span>
        </h3>
      </template>
    </Trees>

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

<style lang="scss" scoped></style>
