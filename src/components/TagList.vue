<script setup lang="ts">
const { items: list } = await useTags('tags');

const { getAllByTags } = await useNavigationList();

const items = list.map((x) => ({
  ...x,
  count: getAllByTags([x.name]).length,
}));
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.title">
      <slot :item="item">
        <NuxtLink
          :to="`/tags/${item.name}`"
          class="card flex flex-col hover:card-hover"
        >
          <h3 class="flex flex-row items-center text-lg">
            <Icon :name="item.icon" class="size-6" />
            <span class="mx-2">{{ item.title }}</span>
            <span class="text-slate-400">({{ item.count }})</span>
          </h3>
          <p class="text-slate-600">{{ item.description }}</p>
        </NuxtLink>
      </slot>
    </li>
  </ul>
</template>

<style scoped>
a {
}
</style>
