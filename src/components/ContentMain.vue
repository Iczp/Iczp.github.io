<template>
  <main class="flex flex-col">
    <!-- <PageToc /> -->
    <ContentDoc>
      <template v-slot="{ doc }">
        <article
          class="w-full space-y-12 prose prose-dark prose-a:no-underline hover:prose-a:underline dark:prose-invert"
        >
          <ContentRenderer :value="doc" />
        </article>
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
      <template #empty>
        <h1>Document is empty</h1>
      </template>
    </ContentDoc>
  </main>
</template>
