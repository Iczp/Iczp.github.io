<script lang="ts" setup>
const { menus, current } = useNavs();

const tabChange = (index: number) => {
  current.value = index;
};
</script>

<template>
  <header class="app-header">
    <section class="header-logo">
      <div class="logo"></div>
      <div class="logo-container">
        <h1 class="site-title">VVLL.net</h1>
        <p class="site-description">
          <span><strong>V</strong>ite</span>
          <span> <strong>V</strong>ue</span>
          <span><strong>L</strong>ink</span>
          <span><strong>L</strong>ab</span>
          <span> (链接实验室)</span>
        </p>
      </div>
    </section>
    <nav class="nav">
      <Tabs :items="menus" :current="current" @change="tabChange">
        <template v-slot="{ item }">
          <!-- {{ item.title }} -->
          <NuxtLink :to="item.url">{{ item.title }}</NuxtLink>
        </template>
      </Tabs>
    </nav>
    <section class="header-extra">
      <a>login</a>
    </section>
  </header>
  <slot></slot>
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
  font-size: 24px;
  padding: 0;
  margin: 0;
}
.site-description {
  display: flex;
  font-size: 12px;
  color: #375749;
  padding: 0;
  margin: 0;
  gap: 4px;
}

.app-footer {
  display: flex;
  justify-content: center;
}

.header-extra {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
