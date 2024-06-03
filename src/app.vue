<script lang="ts" setup>
// useDark();

import { onKeyStroke } from '@vueuse/core';

// use `autoRepeat` option
onKeyStroke(
  'A',
  (e) => {
    console.log('Key A pressed');
  },
  { dedupe: true }
);
</script>

<template>
  <!-- <NuxtPage /> -->
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
