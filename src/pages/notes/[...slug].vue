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
const query = queryContent();
</script>

<template>
  <NuxtLayout name="content">
    <template #header> 一些页眉模板内容。 </template>

    <main class="content">
      <!-- $content.config:{{ content }} -->
      <h1>queryContent:{{ query }}</h1>
      <!-- <h2>内容导航: {{ navigation }}</h2> -->
      <!-- <h2>ContentQuery</h2>
    <ContentQuery :path="$route.path" find="dev" v-slot="{ data }">
      <ContentRenderer :value="data" />
    </ContentQuery> -->

      <ContentNavigation v-slot="{ navigation }">
        <ul>
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="`${link._path}`">
              {{ link.title }}
              <a-badge :count="link.children?.length || 0"></a-badge>
            </NuxtLink>
          </li>
        </ul>
      </ContentNavigation>

      <h3>目录</h3>
      <ul>
        <ContentList path="/" v-slot="{ list }">
          <li v-for="article in list" :key="article._path">
            <h3>
              <NuxtLink :to="`${article._path}`">
                {{ article.title }}({{ article._path }})
              </NuxtLink>
            </h3>
            <p>{{ article.description }}</p>
          </li>
        </ContentList>
      </ul>

      <!-- <ContentDoc path="/notes/web/css/selectors" /> -->

      <!-- <ContentDoc path="/web/css/selectors" /> -->

      <h3>$route.params.slug</h3>
      <p>{{ $route.params.slug }}</p>
      <h2>$route.path:{{ $route.path }}</h2>

      <hr />
      <ContentDoc />

      <!-- <ContentDoc v-slot="{ doc }">
      <template>
        <ContentRenderer :value="doc" />
      </template>
    </ContentDoc> -->
    </main>
  </NuxtLayout>
</template>
<style lang="scss">
.content {
  width: 100%;
  // color: aqua;
}
</style>
