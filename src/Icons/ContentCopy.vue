<script lang="ts" setup>
import { message } from 'ant-design-vue';
const props = defineProps<{
  content?: string | undefined;
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
  <span title="复制" class="cursor-pointer">
    <Icon :name="name" @click="copyContent" :title="title" />
  </span>
  <!-- <Icon name="ic:baseline-check" /> -->
</template>
