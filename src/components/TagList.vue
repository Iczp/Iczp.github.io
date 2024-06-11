<script setup lang="ts">
// import { Icon } from '#components'
const { items: list } = await useTags('tags');

const { getAllByTags } = await useNavigationList();

const items = list.map((x) => ({
  ...x,
  count: getAllByTags([x.name]).length,
}));
</script>

<template>
  <!-- <pre>
    {{ items }}
  </pre> -->

  <ul>
    <li v-for="(item,index) in items" :key="item.title">
      <!-- <b v-if="!item.name || index==0">{{ item }}</b> -->
      <slot :item="item">

        
        <a
          :href="`/tags/${item.name}`"
          class="card flex flex-col hover:card-hover"
        >
          <h3 class="flex flex-row items-center text-lg">
            <Icon :icon="item.icon" class="size-6 overflow-hidden" />
            <span class="mx-2">{{ item.title }}</span>
            <span class="text-slate-400">({{ item.count }})</span>
          </h3>
          <p class="text-slate-600">{{ item.description }}</p>
        </a>
      </slot>
    </li>
  </ul>
</template>

<style scoped>
a {
}
</style>
