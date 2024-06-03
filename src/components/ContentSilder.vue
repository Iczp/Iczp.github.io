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

    <footer></footer>
  </main>
</template>
