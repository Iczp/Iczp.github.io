<script setup lang="ts">
import Folder from './Folder.vue';
import FolderOpen from './FolderOpen.vue';
withDefaults(
  defineProps<{
    open?: boolean | null;
  }>(),
  {
    open: false,
  }
);
</script>
<template>
  <FolderOpen v-if="open" />
  <Folder v-else />
</template>
