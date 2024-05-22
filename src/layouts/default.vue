<script lang="ts" setup>
import type { NuxtLink } from '#build/components';

const { menus, selectedKeys } = useNavs();
</script>

<template>
  <header class="app-layout-header">
    <section class="header-right">
      <div class="logo">
        <h1 class="site-title">VVLL.net</h1>
        <p class="site-description">Vite Vue Link Lab (链接实验室)</p>
      </div>
    </section>
    <nav class="nav">
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
      </ul>
    </nav>
    <section class="header-right">
      <a>login</a>
    </section>
  </header>
  <main>
    <slot></slot>
  </main>

  <footer>
    <a href="https://www.tasao.com" target="_blank">Tasao.com</a> ©2014-{{
      new Date().getFullYear()
    }}
    Created by <a href="https://www.iczp.net" target="_blank">IczpNet</a>
  </footer>
</template>

<style lang="scss" scoped>
.app-layout-header {
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
.logo {
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
</style>
