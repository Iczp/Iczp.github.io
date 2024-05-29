<script lang="ts" setup>
// import type { NuxtLink } from '#build/components';
</script>

<template>
  <main class="notes flex flex-row gap-6 mx-6">
    <div class="flex flex-col w-56 flex-shrink-0">
      <ContentNavigation />
    </div>

    <div class="flex flex-col flex-1">
      <main class="flex">
        <ContentDoc>
          <template v-slot="{ doc }">
            <article class="w-full space-y-12">
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
    </div>
  </main>
</template>

<style scoped>
.notes {
  display: flex;
}
.content-doc {
  @apply gap-3;
}
</style>
