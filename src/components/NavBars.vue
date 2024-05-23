<script setup lang="ts">
// const router = useRouter();
// console.log('router', router);
const route = useRoute();
console.log('route', route);
const activeKey = ref('1');
const url = ref(useRequestURL());

const counter = ref(0);
const onClick = (e: any) => {
  e.preventDefault();
  counter.value++;
  console.log('click', e);
  return false;
};
</script>
<template>
  <nav>NavBars</nav>
</template>

<style lang="scss">
.nav-tabs {
  font-size: 16px;
}

.active {
  color: red;
}
</style>
