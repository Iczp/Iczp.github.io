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
  console.log('toggleTheme', isDark.value);
};
</script>

<template>
  <header
    class="app-header flex flex-col sticky top-0 border-b border-gray-300 z-50 backdrop-blur-8 dark:border-gray-600"
  >
    <main
      class="max-w-screen-xl mx-auto w-full flex flex-row items-center px-4 box-border"
    >
      <Logo />
      <AppNav class="flex flex-1 justify-center" />
      <section class="flex flex-row gap-3 header-extra">
        <ClientOnly>
          <a href="/_tailwind" target="_blank">Tailwind</a>
        </ClientOnly>
        <ThemeMode />
        <a>login</a>

        <LinkGithub href="https://github.com/iczp">GitHub</LinkGithub>
      </section>
    </main>
  </header>
  <!-- <slot></slot> -->
</template>

<style scoped>
.backdrop-blur-8 {
  backdrop-filter: blur(8px);
}
.app-header {
  @apply flex;
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
