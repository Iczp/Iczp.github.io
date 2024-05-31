<script lang="ts" setup>
const countries = ['United States', 'Canada', 'Mexico'];

const country = ref(countries[0]);
</script>

<template>
  <div
    class="container flex flex-col rounded-lg border border-color overflow-hidden my-3"
  >
    <header class="flex flex-row justify-between p-2">
      <div class="flex flex-row items-center gap-1">
        <MdiCodeJson />
        <!-- <span class="tag-item language">{{ $attrs.language }}</span> -->
        <span class="tag-item filename">{{ $attrs.filename }}</span>
      </div>
      <div class="flex flex-row items-center">
        <ContentCopy />
      </div>
    </header>

    <main class="code-content">
      <pre class="break-words break-all m-0 rounded-none"><slot></slot></pre>
    </main>
    <!-- <footer class="flex flex-row justify-between p-2"></footer> -->
  </div>
</template>

<style lang="scss" scoped>
.border-color {
  @apply border-gray-300 dark:border-gray-700;
}

pre code .line {
  white-space: pre-wrap;
}

header {
  @apply flex flex-row justify-between items-center p-4 gap-4;
}
.title-left {
  @apply flex gap-4 flex-row items-center;
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
