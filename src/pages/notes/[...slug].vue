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
    <hr />
    <main class="flex flex-row gap-3">
      <div class="sider flex break-all flex-col w-48">
        <h3>$route.params.slug</h3>
        <p>{{ $route.params.slug }}</p>
        <h2>$route.path:{{ $route.path }}</h2>

        <nav>
          <h2>导航</h2>
          <ContentNavigation v-slot="{ navigation }">
            <ul>
              <li v-for="link of navigation" :key="link._path">
                <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
              </li>
            </ul>
          </ContentNavigation>
        </nav>

        <h2>文章列表</h2>
        <main>
          <ContentList path="/notes" v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
              <h3>
                <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
              </h3>
              <p>{{ article.description }}</p>
            </div>
          </ContentList>
        </main>
      </div>

      <div class="content flex">
        <ContentDoc />
      </div>
    </main>
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
