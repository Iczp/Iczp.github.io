<script lang="ts" setup>
const { menus, current } = useAppNav();

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
        <a :href="item.url" :target="item.target">{{ item.title }}</a>
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
