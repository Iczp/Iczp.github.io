<script lang="ts" setup></script>

<template>
  <h1>
    {{ $slots }}
    {{ $attrs }}
    我是标题H1
    <slot />
  </h1>
</template>
