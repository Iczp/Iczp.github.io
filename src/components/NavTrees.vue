<script setup lang="ts">
const route = useRoute();

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());

// const navigation = await fetchContentNavigation()

const { navBottomLink, navDirFromPath, navPageFromPath, navKeyFromPath } =
  useContentHelpers();

//one of ['/docs', '/notes']
const dir = navDirFromPath(
  route.fullPath.split('/').slice(0, 2).join('/'),
  navigation.value!
);
// console.log('dir',route.path, dir);

const { items, toggleOpen } = useTrees({
  items: dir,
  // open: (x) => x.open || true,
  action: (x) => {
    x.$isDir = isDir(x);
  },
  active: (item, depth, index, parents) => item._path === route.path,
  // sort: (a, b, depth) => {
  //   if (depth > 1) {
  //     return 0; // a和b位置不变
  //   }
  //   if (a.$isDir && !b.$isDir) {
  //     return -1; // a应该在b前面
  //   } else if (!a.$isDir && b.$isDir) {
  //     return 1; // b应该在a前面
  //   } else {
  //     return 0; // a和b位置不变
  //   }
  // },
});
const navToLink = (item: any) => (!isDir(item) ? item._path : undefined);
const navClick = (item: any) => {
  console.log('navClick', item);
};
</script>

<template>
  <!-- dir {{ dir }} -->
  {{ route.params.slug[0] }}
  <Trees :items="items" class="max-w-72">
    <template v-slot="{ item, depth, index, parents }">
      <h3
        class="flex flex-row justify-between py-1 gap-2"
        :class="{ dir: item.$isDir }"
        @click="toggleOpen(item)"
      >
        <section class="flex flex-row items-center overflow-hidden">
          <div class="px-1.5 text-lg">
            <Dir v-if="item.$isDir" :open="item.$isOpen" />
            <File v-else />
          </div>
          <p class="truncate">
            <NuxtLink
              :to="navToLink(item)"
              @click="navClick(item)"
              class="cursor-pointer"
            >
              <!-- {{ item.$row }} /{{ depth }}.{{ index }}  -->
              {{ item.title }}
              <template v-if="item.$isDir">
                ({{ item.$totalFileCount }})
              </template>
            </NuxtLink>
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
