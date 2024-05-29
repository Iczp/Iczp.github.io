<script lang="ts" setup>
const setctions = ref([
  {
    title: '站点地址',
    description: '“工欲善其事，必先利其器”',
    items: [
      {
        url: '/sitemap.xml',
        title: '站点地图',
        target: '_blank',
      },
      {
        url: 'https://www.tasao.com',
        title: 'Tasao.com',
        target: '_blank',
      },
    ],
  },
  {
    title: 'VScode插件',
    description: '“工欲善其事，必先利其器”',
    items: [
      {
        url: 'https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss',
        title: 'bradlc.vscode-tailwindcss',
        target: '_blank',
      },
      {
        url: 'https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense',
        title: 'windicss-intellisense',
        target: '_blank',
      },
      {
        url: 'https://marketplace.visualstudio.com/items?itemName=Nuxt.mdc',
        title: 'Nuxt.mdc',
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
      {
        url: 'https://www.nuget.org/packages?q=IczpNet',
        title: 'Nuget',
        target: '_blank',
      },
    ],
  },
  {
    title: '友情链接',
    description: '“工欲善其事，必先利其器”',
    items: [
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
      {
        url: 'https://icones.js.org/collection/mdi',
        title: 'Materia Icons',
        target: '_blank',
      },
    ],
  },
]);
</script>

<template>
  <footer class="app-footer">
    <UCard>
      <main class="grid grid-cols-4 gap-6 border-dark-300">
        <section v-for="(section, index) in setctions">
          <h3 class="text-cyan-100">{{ section.title }}</h3>
          <p class="text-cyan-900">{{ section.description }}</p>
          <ul>
            <li v-for="item in section.items" :key="item.url" class="py-1">
              <a :href="item.url" :target="item.target">{{ item.title }}</a>
            </li>
          </ul>
        </section>
      </main>
    </UCard>
    <Copyright />
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
