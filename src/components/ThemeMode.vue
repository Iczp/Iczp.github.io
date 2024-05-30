<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <botton @click="toggleDark()">
    <LightMode v-if="isDark" />
    <NightMode v-else />
  </botton>
</template>
