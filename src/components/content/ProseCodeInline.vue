<script lang="ts" setup>


</script>

<template>
  <code class="code-inline">
    Code inline
    <slot />
  </code>
</template>
<style lang="scss" scoped>
.code-inline {
  padding: 0.2em 0.25em;
  margin: auto 0.2em;
  background-color: rgb(36, 34, 52);
  // color: rgb(34, 219, 80);
  border-radius: 0.25em;
}
</style>
