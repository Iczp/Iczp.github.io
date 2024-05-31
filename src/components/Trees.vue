<script setup lang="ts">
withDefaults(
  defineProps<{
    items: any[];
    depth?: number;
  }>(),
  {
    depth: 0,
  }
);
</script>

<template>
  <ul class="trees" :depth="depth">
    <li v-for="(item, index) in items" :index="index" :key="index">
      <div class="li" :class="{ active: index == 3 }">
        <slot :item="item" :depth="depth" :index="index">{{ item.title }}</slot>
      </div>

      <Trees
        v-if="Array.isArray(item.children) && item.children.length != 0"
        :items="item.children"
        :depth="depth + 1"
      >
        <template v-slot="{ item, depth, index }">
          <slot :item="item" :depth="depth" :index="index">{{
            item.title
          }}</slot>
        </template>
      </Trees>
    </li>
  </ul>
</template>

<style scoped>

:root{
    --trees-border-color: #e2e8f0;
    --trees-border-active-color: #e2e8f0;
    --trees-border-hover-active-color: #e2e8f0;
}
ul {
  @apply border-l border-l-gray-700 pl-8;
}

.dark ul {
  @apply border-l-gray-700;
}

.li {
  @apply relative  pl-6 h-8 flex items-center;
}
.li::before {
  content: '';
  @apply border-l border-l-gray-700 top-0 bottom-0 absolute left-0 z-20;
}
li:last-child > .li::before {
  @apply h-1/2;
}

ul[depth='0'],
li:last-child > ul {
  @apply border-none;
}
.li::after {
  content: '';
  @apply border-t border-t-gray-700 top-1/2 bottom-0 absolute left-0 h-0.5 w-4 z-10;
}

ul[depth='0'] > li[index='0'] > .li::before {
  @apply top-1/2;
}

.li:hover::before {
  @apply border-l-green-500;
}
.li:hover::after {
  @apply border-t-green-500;
}

.li.active::before {
  @apply border-l-red-500;
}
.li.active::after {
  @apply border-t-red-500;
}

ul[depth='0'] > li:only-child > .li::before,
ul[depth='0'] > li:only-child > .li::after {
  @apply hidden;
}
</style>
