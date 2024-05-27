<script setup>
// const { data: navigation } = await useAsyncData('navigation', () =>
//   fetchContentNavigation()
// );

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

    <main class="content">
      <h3>$route.params.slug</h3>
      <p>{{ $route.params.slug }}</p>
      <h2>$route.path:{{ $route.path }}</h2>
      <hr />
      <ContentDoc />

    </main>
  </NuxtLayout>
</template>
<style lang="scss">
.content {
  width: 100%;
  // color: aqua;
}
</style>
