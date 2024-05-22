<script lang="ts" setup>
// const { menus, selectedKeys } = useNavs();
</script>

<template>
  <!-- <main layout="default">
    <AppHeader>
      <NavBars></NavBars>
    </AppHeader>
    <slot />
    <AppFooter>AppFooter</AppFooter>
  </main> -->

  <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />

      <!-- <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item v-for="(item, index) in menus" :key="item.url"
          ><NuxtLink :to="item.url">{{ item.title }}</NuxtLink></a-menu-item
        >
      </a-menu> -->
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>

        <a-breadcrumb-item>{{ $route.path }}</a-breadcrumb-item>
      </a-breadcrumb>
      <NavBars></NavBars>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <slot>Content</slot>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      <a href="https://www.tasao.com" target="_blank">Tasao.com</a> ©2014-{{
        new Date().getFullYear()
      }}
      Created by <a href="https://www.iczp.net" target="_blank">IczpNet</a>
    </a-layout-footer>
  </a-layout>
</template>

<style scoped>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>
