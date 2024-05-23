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
</script>
<template>
  <ul class="tabs">
    <li
      v-for="(item, index) in props.items"
      :key="index"
      class="tab-item"
      :class="{ active: index == props.current }"
      @click="$emit('change', index)"
    >
      <slot :item="item">
        {{ item }}
      </slot>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.tabs {
  display: flex;
  flex-direction: row;
  // align-items: center;
  font-size: 16px;
  gap: 12px;
  position: relative;
  padding: 0;
  margin: 0;
}

.tabs a:hover {
  color: burlywood;
  text-decoration: none;
}

.tab-item {
  display: flex;
  justify-content: center;
  position: relative;
  list-style: none;
  font-size: 16px;
  padding: 0 8px;
  cursor: pointer;
}

.tab-item::after {
  display: flex;
  content: '';
  background-color: aqua;
  pointer-events: none;
  bottom: 0;
  position: absolute;
  height: 2px;
  border-radius: 5px;
  width: 0;
  transition: width 0.3s linear;
}
.tab-item.active::after,
.tab-item:hover::after {
  width: 100%;
}
.tab-item:hover::after {
  background-color: rgba(0, 255, 255, 0.545);
}

.active {
  color: red;
}
</style>
