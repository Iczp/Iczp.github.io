<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button @click="toggleDark()">
    <LightMode v-if="isDark" />
    <NightMode v-else />
  </button>
</template>
