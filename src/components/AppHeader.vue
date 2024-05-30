<script lang="ts" setup>
const { menus, current } = useAppNav();

const tabChange = (index: number) => {
  current.value = index;
};

const handleMessage = () => {
  message.info('This is a normal message');
};
const isDark = useDark();
const toggleDark = useToggle(isDark);
const toggleTheme = () => {
  console.log(isDark.value);
};
</script>

<template>
  <header class="app-header">
    <Logo />
    <AppNav />
    <section class="flex flex-row gap-3 header-extra">
      <a>login</a>

      <ClientOnly>
        <a href="/_tailwind" target="_blank">Tailwind</a>
      </ClientOnly>

      <ThemeMode />
    </section>
  </header>
  <!-- <slot></slot> -->
</template>

<style scoped>
.app-header {
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  border-bottom: 1px solid rgb(35, 42, 35);
  margin: auto;
  /* border-radius: 12px; */
  padding: 12px 24px;
  /* background-color: rgb(13, 8, 34); */
  background-color: rgba(0, 0, 0, 0.565);
  backdrop-filter: blur(8px);
  z-index: 999;
}
.app-header::after {
  content: '';
  position: absolute;
  filter: blur(12px);
}

.app-main {
  display: flex;
  flex: 1;
}

.header-extra {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
