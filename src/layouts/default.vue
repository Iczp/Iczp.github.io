<script lang="ts" setup>
const { menus, current } = useNavs();

const tabChange = (index: number) => {
  current.value = index;
};
</script>

<template>
  <AppHeader />
  <slot></slot>
  <AppFooter />
</template>

<style scoped></style>
