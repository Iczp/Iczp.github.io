<script setup></script>

<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header">
        <slot name="header-left"></slot>
        <slot name="header-right"></slot>
      </slot>
    </div>
    <div class="card-body">
      <slot></slot>
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
  --card-border: 1px solid rgba(35, 51, 74, 0.8);
  display: flex;
  flex-direction: column;
  border: var(--card-border);
  overflow: hidden;
  box-sizing: border-box;
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
