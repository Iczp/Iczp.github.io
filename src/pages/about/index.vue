<script lang="ts" setup>
const pkg = usePkg();
const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
);

const { data } = await useAsyncData('tags:_tags', () => queryContent('/notes/_tags').find());

const depGroups = ref([
  {
    title: '开发依赖(Dev Dependencies)',
    items: pkg.devDependencies,
  },
  {
    title: '依赖(Dependencies)',
    items: pkg.dependencies,
  },
]);
</script>

<template>
  <main class="flex flex-col gap-4">
    <h1>About:Index</h1>
    navigation:
    <pre>{{ data }}</pre>

    <ul class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <li>
        <UCard> Version: {{ pkg.version }} </UCard>
      </li>
      <li>
        <UCard>
          Author: <a>{{ pkg.author }}</a>
        </UCard>
      </li>
    </ul>

    <UCard v-for="(group, index) in depGroups">
      <template #header>
        <h3 class="flex flex-row items-center">
          <PackageDependencies class="inline-flex mr-2" />
          <span>{{ group.title }}</span>
        </h3>
      </template>
      <ul class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        <li class="flex items-center" v-for="(value, key) in group.items">
          <a
            :href="`https://www.npmjs.com/package/${key}`"
            target="_blank"
            class="inline-flex p-2 mr-2 border-red-300 border-1"
          >
            {{ key }}
          </a>
          <span class="inline-flex text-gray-500">{{ value }}</span>
        </li>
      </ul>
    </UCard>

    <UAlert icon="i-heroicons-command-line" title="Heads up!">
      components
    </UAlert>
  </main>
</template>
