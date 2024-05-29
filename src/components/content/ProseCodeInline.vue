<script lang="ts" setup></script>

<template>
  <code class="code-inline" v-bind="$attrs">
    Code inline
    <slot></slot>
  </code>
</template>
<style lang="scss" scoped>
.code-inline {
 
  // display: inline-block;
  // padding: 0.2em 0.25em;
  // margin: auto 0.2em;
  // background-color: rgb(36, 34, 52);
  // color: rgb(34, 219, 80);
  // border-radius: 0.25em;
  @apply inline-block  rounded-md p-0.5 m-0.5  text-sm bg-gray-800;
}
</style>
