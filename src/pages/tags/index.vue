<script setup lang="ts">
const { items: list } = await useTags('tags');

const { getAllByTags } = await useNavigationList();

const items = list.map((x) => ({
  ...x,
  count: getAllByTags([x.name]).length,
}));
</script>

<template>
  <main>
    <h1>Link:Index</h1>

    <div class="tags">
      <ul
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <li v-for="item in items" :key="item.title" class="">
          <NuxtLink :to="`/tags/${item.name}`" class="card flex flex-col">
            <h3 class="flex flex-row items-center text-lg">
              <Icon :name="item.icon" class="size-6" />
              <span class="mx-2">{{ item.title }}</span>
              <span class="text-slate-400">({{ item.count }})</span>
            </h3>
            <p class="text-slate-600">{{ item.description }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
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
