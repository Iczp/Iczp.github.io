<script setup lang="ts">
const props = defineProps<{
  value: string;
}>();

const { items: list, getInfo } = await useTags('tags');
const tag = computed(() => getInfo(props.value));
</script>

<template>
  <slot :tag="tag" />
</template>
