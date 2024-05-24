<script setup></script>

<template>
  <div class="card">
    <div class="card-header">
      <slot name="header">
        <slot name="header-left"></slot>
        <slot name="header-right"></slot>
      </slot>
    </div>
    <slot></slot>

    <div class="card-footer">
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
}
.card-header {
  display: flex;
  flex-direction: row;
  border-bottom: var(--card-border);
}
</style>
