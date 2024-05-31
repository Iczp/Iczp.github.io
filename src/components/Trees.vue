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
          <slot :item="item" :depth="depth" :index="index">
            {{ item.title }}
          </slot>
        </template>
      </Trees>
    </li>
  </ul>
</template>

<style scoped>
.trees {
  --trees-border-color: #dadada;
  --trees-border-active-color: #91cdee;
  --trees-border-hover-color: #098912;
  --trees-border-hover-active-color: #016410;
  --border-style: dashed;
}

.dark .trees {
  --trees-border-color: #3f3f3f;
  --trees-border-active-color: #91cdee;
  --trees-border-hover-color: #059d0f;
  --trees-border-hover-active-color: #9d18c5;
}

.border-color {
  border-color: var(--trees-border-color);
}
.hover-color {
  border-color: var(--trees-border-hover-color);
}
.active-color {
  border-color: var(--trees-border-active-color);
}

.active-hover-color {
  border-color: var(--trees-border-hover-active-color);
}

ul {
  @apply border-l border-l pl-8;
}

ul[depth='0']>li:only-child>.li{
    @apply pl-0;
}
ul[depth='0']>li:only-child>ul{
    @apply pl-2;
}
ul[depth='0'] {
  @apply p-0 m-0;
}


.li {
  @apply relative  pl-6 h-8 flex items-center;
}
.li::before {
  content: '';
  @apply border-l border-l top-0 bottom-0 absolute left-0 z-20;
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
  @apply border-t border-t top-1/2 bottom-0 absolute left-0 h-0.5 w-4 z-10;
}

ul[depth='0'] > li[index='0'] > .li::before {
  @apply top-1/2;
}

ul,
.li::before,
.li::after {
  @apply border-color;
}

.li:hover::before,
.li:hover::after {
  @apply hover-color;
}

.li.active::before,
.li.active::after {
  @apply active-color;
}

.li.active:hover::before,
.li.active:hover::after {
  @apply active-hover-color;
}


ul[depth='0'] > li:only-child > .li::before,
ul[depth='0'] > li:only-child > .li::after {
  @apply hidden;
}

ul,
.li::before,
.li::after {
  border-style: var(--border-style);
}
</style>
