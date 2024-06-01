<script setup lang="ts">
const { toc } = useContent();

const route = useRoute();

const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
);

const { navBottomLink, navDirFromPath, navPageFromPath, navKeyFromPath } =
  useContentHelpers();

// const dir = navDirFromPath(route.path, navigation.value);

const { items, toggleOpen } = useTrees({
  items: navigation.value![0]?.children,
});
</script>

<template>
  <div class="page-toc">
    <h2>Table of Contents</h2>

    <Trees :items="items">
      <template v-slot="{ item, depth, index, parents }">
        <h3 class="flex flex-row justify-between items-center h-8">
          <a :href="navBottomLink(item)">
            <ContentCopy :content="item.path" class="mr-1" />
            {{ item.$row }} /{{ depth }}.{{ index }} {{ item.title }}
          </a>
          <span
            v-if="item?.children && Number(item?.children.length) > 0"
            @click="toggleOpen(item)"
          >
            <ArrowRight />
          </span>
        </h3>
      </template>
    </Trees>
    <!-- <pre>
      navigation:
      {{ navigation }}
    </pre>

    <pre>
      dir:
      {{ dir }}
      </pre
    > -->
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
