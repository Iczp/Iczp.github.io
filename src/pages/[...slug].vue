<script lang="ts" setup>
// const { data: navigation } = await useAsyncData('navigation', () =>
//   fetchContentNavigation()
// );

// definePageMeta({
//   layout: true,
// });

// const contentConfig = $content.config
// console.log(contentConfig)
// const content = ({ page, surround, globals, optons } = useContent());
// const query = queryContent();
</script>

<template>
  <NuxtLayout name="content">
    <NuxtPage />
  </NuxtLayout>
</template>
<style scoped></style>
