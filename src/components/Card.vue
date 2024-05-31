<script lang="ts" setup>
const props = defineProps<{
  title?: string;
  description?: string;
}>();
</script>

<template>
  <div class="rounded-lg card">
    <div v-if="$slots.header || title" class="card-header">
      <slot name="header">
        {{ title }}
        <slot name="header-left"></slot>
        <slot name="header-right"></slot>
      </slot>
    </div>
    <div class="card-body">
      <slot>{{ description }}</slot>
    </div>

    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer">
        <slot name="footer-left"></slot>
        <slot name="footer-right"></slot>
      </slot>
    </div>
  </div>
</template>
<style scoped>
.card {
  /* --card-border: 1px solid rgba(35, 51, 74, 0.8);
  display: flex;
  flex-direction: column;
  border: var(--card-border);
  overflow: hidden;
  box-sizing: border-box; */

  @apply flex flex-col border border-gray-200 border-solid rounded-xl overflow-hidden dark:border-gray-800;
}
.card-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretch;
  /* padding: 12px 0; */
  /* min-height: 48px; */
}
.card-header,
.card-footer {
  display: block;
}
.card-header {
  border-bottom: var(--card-border);
}

.card-footer {
  border-top: var(--card-border);
}
</style>
