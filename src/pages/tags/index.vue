<script setup lang="ts"></script>

<template>
  <main class="flex">
    <div class="tags w-full">
      <TagList
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <template v-slot="{ item }">
          <NuxtLink
            :to="`/tags/${item.name}`"
            class="card flex flex-col hover:card-hover p-4"
          >
            <h3 class="flex flex-row items-center text-lg">
              <Icon :name="item.icon" class="size-6" />
              <span class="mx-2">{{ item.title }}</span>
              <span class="text-slate-400">({{ item.count }})</span>
            </h3>
            <p class="text-slate-600">{{ item.description }}</p>
          </NuxtLink>
        </template>
      </TagList>
    </div>
  </main>
</template>

<style scoped>
.tags {
}
</style>
