<script lang="ts" setup>
// import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();

</script>

<template>
  <!-- <div>
    <NuxtWelcome />
    <h1>Hello World!</h1>
  </div> -->

  <!-- <NuxtPage /> -->

  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
