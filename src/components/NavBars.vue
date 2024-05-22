<script setup lang="ts">
// const router = useRouter();
// console.log('router', router);
const route = useRoute();
console.log('route', route);
const activeKey = ref('1');
const url = useRequestURL();

const counter = ref(0);
const onClick = (e: any) => {
  e.preventDefault();
  counter.value++;
  console.log('click', e);
  return false;
};
</script>
<template>
  <!-- <client-only>
    <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
  </client-only> -->

  <div>
    <p>URL is: {{ url }}</p>
    <p>Path is: {{ url.pathname }}</p>
  </div>

  <!-- <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2" force-render
      >Content of Tab Pane 2</a-tab-pane
    >
    <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
  </a-tabs> -->
</template>

<style>
.nav-tabs {
  font-size: 16px;
}

.active {
  color: red;
}
</style>
