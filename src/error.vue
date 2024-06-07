<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const handleError = () => {
  // clearError({ redirect: '/' });
};
</script>

<template>
  <div>
    <h2>{{ error.statusCode }}</h2>
    <button @click="handleError">返回首页</button>
    <pre>{{ error }}</pre>
  </div>
</template>
