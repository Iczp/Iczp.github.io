<script setup lang="ts">
const tags = [
  {
    icon: 'i-heroicons-command-line',
    title: 'Vue3',
    description: 'Vue3',
  },
  {
    icon: 'i-heroicons-command-line',
    title: 'Nuxt3',
    description: 'Nuxt3',
  },
];
</script>

<template>
  <main>
    <h1>Link:Index</h1>

    <div class="tags">
      <ul>
        <li v-for="item in tags" :key="item.title" class="card">
          <NuxtLink :to="`/tags/${item.title}`">
            <Icon :name="item.icon" />
            <h3 class="text-xl">{{ item.title }}</h3>
            <p class="text-slate-600">{{ item.description }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>
