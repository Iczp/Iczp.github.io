<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const handleError = () => {
  // clearError({ redirect: '/' });
};
</script>

<template>
  <div class="m-auto p-8 w-full flex flex-col gap-2">
    <h1>{{ error.statusCode }}</h1>
    <h2>{{ error.url }}</h2>
    <h2>{{ error.message }}</h2>
    <button @click="handleError">返回首页</button>
    <div class="" v-html="error.stack"></div>
  </div>
</template>
