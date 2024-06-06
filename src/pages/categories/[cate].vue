<template>
  <div>
    <input v-model="query" @input="search" placeholder="Search content..." />
    <div v-if="loading">Loading...</div>
    <ul v-if="results.length">
      <li v-for="result in results" :key="result._path">
        <NuxtLink :to="result._path">{{ result.title }}</NuxtLink>
      </li>
    </ul>
    <div v-else>No results found</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { useAsyncData } from '#app'
// import { queryContent } from '@nuxt/content'

const query = ref('')
const results = ref([])
const loading = ref(false)

const search = async () => {
  loading.value = true
  const { data } = await queryContent().where({ _path: { $contains: query.value } }).fetch()
  results.value = data
  loading.value = false
}
</script>

<style scoped>
/* 添加您的样式 */
</style>
