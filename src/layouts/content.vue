<script lang="ts" setup>
// import type { NuxtLink } from '#build/components';

const { menus, selectedKeys } = useNavs();
</script>

<template>
  <main>
    <h1>Content</h1>
    <slot></slot>
  </main>
</template>

<style scoped>
.app-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  top: 20px;
  border: 1px solid rgb(35, 42, 35);
  margin: 20px;
  border-radius: 12px;
  padding: 12px;
}
.app-main {
  display: flex;
  flex: 1;
}
.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: 0;
  margin: 0;
  font-size: 24px;
  color: greenyellow;
  gap: 4px;
}
.site-title {
  display: flex;
  font-size: 16px;
  padding: 0;
  margin: 0;
}
.site-description {
  display: flex;
  font-size: 12px;
  color: #375749;
  padding: 0;
  margin: 0;
}

.app-footer {
  display: flex;
  justify-content: center;
}
</style>
