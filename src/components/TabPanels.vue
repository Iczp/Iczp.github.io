<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    items: Array<any>;
    current?: number;
  }>(),
  {
    current: 0,
  }
);

const emit = defineEmits<{
  change: [number];
  'update:current': [number];
}>();

const tabIndex = ref(props.current);
const onChange = (index: number) => {
  tabIndex.value = index;
  emit('change', index);
  emit('update:current', index);
};
</script>
<template>
  <Tab
    :items="props.items"
    :current="current"
    @change="onChange"
    class="tab-panels"
  >
    {{ $slots.default?.length }}
  </Tab>
</template>

<style lang="scss" scoped>
.tab-panels {
}

.active {
  color: red;
}
</style>
