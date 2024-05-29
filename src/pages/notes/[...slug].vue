<script setup>
const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
);

definePageMeta({
  layout: false,
});

// const contentConfig = $content.config
// console.log(contentConfig)
// const content = ({ page, surround, globals, optons } = useContent());
// const query = queryContent();
</script>

<template>
  <NuxtLayout name="content">
    <template #header> 一些页眉模板内容。 </template>
    
    <NuxtPage />
  </NuxtLayout>
</template>
<style lang="scss">
.sider {
  width: 200px;
}
.content {
  width: 100%;
  // color: aqua;
}
</style>
