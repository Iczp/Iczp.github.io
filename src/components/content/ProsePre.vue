<script lang="ts" setup>
const countries = ['United States', 'Canada', 'Mexico'];

const country = ref(countries[0]);
</script>

<template>
  <Card class="my-3">
    <template #header>
      <div class="title-container">
        <div class="title-left">
          <!-- <Icon name="file-icons:yaml-alt2" />
          <Icon name="vscode-icons:file-type-typescript" />
          <Icon name=" codicon:terminal-bash" />
          
          <Icon name=" vscode-icons:file-type-vue" /> -->
          <MdiCodeJson />
          <span class="tag-item language">{{ $attrs.language }}</span>
          <span class="tag-item filename">{{ $attrs.filename }}</span>
        </div>

        <div class="title-right">
          <ContentCopy />
        </div>
      </div>
    </template>
    <!-- <pre>{{ $attrs }}</pre> -->

    <!-- <USelect v-model="country" :options="countries" /> -->
    <slot name="before" />
    <div class="p-3 overflow-x-auto code-content max-sm">
      <pre class="space-x-1 break-words break-all"><slot></slot></pre>
    </div>
    <slot name="after" />
  </Card>
</template>

<style lang="scss" scoped>
pre code .line {
  white-space: pre-wrap;
}
.prose-pre {
  --card-border: 1px solid rgba(35, 51, 74, 0.8);

  display: flex;
  flex-direction: column;
  color: white;
  border-radius: 8px;
}
.code-content {
  // display: flex;
  color: #586878;
  padding: 12px;
  background-color: rgb(15, 15, 27);
}
.title-container {
  @apply flex flex-row justify-between items-center p-4 gap-4;
}
.title-left {
  @apply flex gap-4 flex-row;
}
.title-right {
  display: flex;
  gap: 8px;
  flex-direction: row;
}

.tag-item {
  display: flex;
  border: var(--card-border);
  padding: 0 8px;
  border-radius: 4px;
  background-color: rgb(23, 26, 39);
}

.language {
  font-weight: bold;
}
</style>
