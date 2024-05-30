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
.backdrop-blur-8 {
  backdrop-filter: blur(8px);
}
.app-header {
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  border-bottom: 1px solid rgb(35, 42, 35);
  margin: auto;
  padding: 12px 24px;
  background-color: rgba(0, 0, 0, 0.565);
  
  z-index: 999; */

  @apply flex flex-row top-0 sticky border-b border-gray-300 z-50 backdrop-blur-8 justify-between items-center  px-3;
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
