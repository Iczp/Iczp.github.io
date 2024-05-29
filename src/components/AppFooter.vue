<script lang="ts" setup>
import type { link } from 'fs-extra';

const setctions = ref([
  {
    title: '站点地址',
    description: '“工欲善其事，必先利其器”',
    items: [
      {
        url: '/sitemap.xml',
        title: 'Sitemap.xml',
        target: '_blank',
      },
    ],
  },
  {
    title: 'VScode插件',
    description: '“工欲善其事，必先利其器”',
    items: [
      {
        url: '/sitemap.xml',
        title: 'Sitemap.xml',
        target: '_blank',
      },
    ],
  },
  {
    title: '个人链接',
    description: '“工欲善其事，必先利其器”',
    items: [
      {
        url: 'https://github.com/iczp',
        title: 'github',
        target: '_blank',
      },
    ],
  },
  {
    title: '友情链接',
    description: '“工欲善其事，必先利其器”',
    items: [
      {
        url: 'https://www.tasao.com',
        title: 'Tasao.com',
        target: '_blank',
      },
      {
        url: 'https://ui.nuxt.com/components/card',
        title: 'Nuxt-UI',
        target: '_blank',
      },
      {
        url: 'https://tailwindcss.com/docs/letter-spacing',
        title: 'Tailwindcss',
        target: '_blank',
      },
    ],
  },
]);
</script>

<template>
  <footer class="app-footer">
    <main class="flex flex-row gap-6 justify-around border-dark-300 rounded-md">
      <section v-for="(section, index) in setctions">
        <h3>{{ section.title }}</h3>
        <p class="text-dark-400">{{ section.description }}</p>
        <ul>
          <li v-for="item in section.items" :key="item.url" class="py-1">
            <a :href="item.url" :target="item.target">{{ item.title }}</a>
          </li>
        </ul>
      </section>
    </main>
    <section class="copyright flex justify-center p-6">
      <p>
        ©2014-{{ new Date().getFullYear() }} Created by
        <a href="https://www.iczp.net" target="_blank">IczpNet</a>
      </p>
    </section>
  </footer>
</template>

<style scoped>
.app-footer {
  display: flex;
  @apply flex flex-col pt-6 mx-auto;
}
.app-footer a {
  @apply text-green-300;
}
.app-footer a:hover {
  @apply text-green-500 underline;
}
</style>