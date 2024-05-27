<script lang="ts" setup>
const { menus, current } = useAppNav();

import Tab from './Tab.vue';

const tabChange = (index: number) => {
  current.value = index;
};

const getTarget = (url: string) => {
  let target: string | undefined = undefined;
  if (url?.startsWith('http')) {
    target = '_blank';
  }
  return target;
};
</script>

<template>
  <nav class="app-nav">
    <Tab :items="menus" :current="current" @change="tabChange">
      <template v-slot:item="{ item }" #item>
        <!-- {{ item.title }} -->
        <NuxtLink :to="item.url" :target="getTarget(item.url)">{{
          item.title
        }}</NuxtLink>
      </template>

      <!-- <template v-slot="{ index }">{{ index }}</template> -->
    </Tab>
    <slot></slot>
  </nav>
</template>

<style scoped>
.app-nav {
  display: flex;
}
</style>
