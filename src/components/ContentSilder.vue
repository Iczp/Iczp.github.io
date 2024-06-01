<template>
  <main class="flex flex-col flex-shrink-0 break-words">
    <header>
      <h3>$route.params.slug</h3>
      <p>{{ $route.params.slug }}</p>
      <h2>$route.path:{{ $route.path }}</h2>
    </header>

    <section>
      <h2 class="my-4">文单目录</h2>
      <nav>
        <NavTrees />
      </nav>
    </section>

    <!-- <section>
      <h2>文章列表</h2>
      <ContentList path="/" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
          <h3>
            <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
          </h3>
          <p>{{ article.description }}</p>
        </div>
      </ContentList>
    </section> -->
    <footer>footer</footer>
  </main>
</template>
