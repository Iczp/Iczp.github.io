<script setup lang="ts">
const { toc } = useContent();

const route = useRoute();

const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
);

const { navBottomLink, navDirFromPath, navPageFromPath, navKeyFromPath } =
  useContentHelpers();

const dir = navDirFromPath(route.path, navigation.value);
</script>

<template>
  <div class="page-toc">
    <h2>Table of Contents [0].children</h2>

    <Trees :items="navigation">
      <template v-slot="{ item, depth, index }">
        <h3>
          <ContentCopy :content="item.path" class="mr-1" />
          <a :href="navBottomLink(item)">
            {{ depth }}.{{ index }} {{ item.title }}
          </a>
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
