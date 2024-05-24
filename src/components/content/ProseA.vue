<script lang="ts" setup>
const target = ref('');
const attrs = useAttrs();
const href = attrs.href as string;
if (href.startsWith('http')) {
  target.value = '_blank';
}
</script>

<template>
  <a :target="target" v-bind="$attrs">
    <!-- {{ $slots }} -->
    <!-- {{ $attrs }} -->
    <slot />
  </a>
</template>
