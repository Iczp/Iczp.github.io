<script lang="ts" setup>
const props = defineProps<{
  text?: string | undefined;
}>();

const copyContent = () => {
  console.log('copyContent');
  title.value = 'Copied!';
  name.value = 'ic:baseline-check';

  message.success({ content: 'Copied!', duration: 2, key: 'copy-content' });
  setTimeout(() => {
    name.value = 'ic:baseline-content-copy';
    title.value = 'Copy!';
  }, 1000);
};
const title = ref('Copy');
const name = ref('ic:baseline-content-copy');
</script>

<template>
  <Icon :name="name" @click="copyContent" :title="title" />
  <!-- <Icon name="ic:baseline-check" /> -->
</template>
