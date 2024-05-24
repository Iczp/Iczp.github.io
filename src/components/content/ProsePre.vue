<script lang="ts" setup></script>

<template>
  <Card class="prose-pre">
    <template #header>
      <div class="pre-title">
        <span class="tab-item language">{{ $attrs.language }}</span>
        <span class="tab-item filename">{{ $attrs.filename }}</span>
      </div>
    </template>
    <pre>{{ $attrs }}</pre>
    <slot name="before" />
    <div class="code-content">
      <pre :class="$attrs.class"><slot></slot></pre>
    </div>
    <slot name="after" />
  </Card>
</template>

<style lang="scss" scoped>
.prose-pre {
  --card-border: 1px solid rgba(35, 51, 74, 0.8);

  display: flex;
  flex-direction: column;
  color: white;
  border-radius: 8px;
  background-color: rgb(5, 9, 25);
}
.code-content {
  // display: flex;
  color: #343a40;

  padding: 10px;
}
.pre-title {
  display: flex;
  flex-direction: row;
  padding: 8px;
  gap: 8px;
}
.tab-item {
  display: flex;
  border: var(--card-border);
  padding: 0 8px;
  border-radius: 4px;
  background-color: rgb(23, 26, 39);
}
.language {
}
</style>
