<script setup lang="ts">
const route = useRoute();

const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
);

const { navBottomLink, navDirFromPath, navPageFromPath, navKeyFromPath } =
  useContentHelpers();

const { items, toggleOpen } = useTrees({
  items: navigation.value, //![0]?.children,
  action: (x) => {
    x.$isDir = isDir(x);
  },
  active: (item, depth, index, parents) => item._path === route.path,
});
const navToLink = (item: any) => (!isDir(item) ? item._path : undefined);
const navClick = (item: any) => {
  console.log('navClick', item);
};
</script>

<template>
  <Trees :items="items">
    <template v-slot="{ item, depth, index, parents }">
      <h3
        class="flex flex-row justify-between py-1"
        :class="{ dir: item.$isDir }"
        @click="toggleOpen(item)"
      >
        <section class="flex flex-row items-center max-w-48 overflow-hidden">
          <div class="px-1.5 text-lg">
            <Folder v-if="item.$isDir" />
            <File v-else />
          </div>
          <p class="truncate text-ellipsis">
            <a :href="navToLink(item)" @click="navClick(item)">
              <!-- {{ item.$row }} /{{ depth }}.{{ index }}  -->
              {{ item.title }}
            </a>
          </p>
        </section>
        <section v-if="item.$isDir">
          <Arrow
            :dir="item.$isOpen ? 'down' : 'right'"
            class="cursor-pointer"
          />
        </section>
      </h3>
    </template>
  </Trees>
</template>

<style lang="scss" scoped>
.active:not(.dir) a {
  @apply text-blue-600 dark:text-blue-400;
}
</style>
