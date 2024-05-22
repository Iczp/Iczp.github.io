import { generateCss } from './src/hooks/antd';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    // typeCheck: true,
    // strict: true,
  },
  srcDir: 'src/',
  components: {
    /**
     * 要禁用自动导入的话，components.dirs设置为空数组
     * 但请注意，这不会影响模块添加的组件
     */
    // dirs: [],
    global: true,
    dirs: ['~/components'],
  },
  app: {
    baseURL: '/',
    buildAssetsDir: 'static',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        // {
        //   rel: 'stylesheet',
        //   href: '/css/antd.min.css', // 引用生成的静态样式文件
        // },
        {
          rel: 'stylesheet',
          href: '/css/style.css', // 引用生成的静态样式文件
        },
      ],
      script: [
        // { src: 'https://hm.baidu.com/hm.js?2262f0ef72fa0d0c3a1fbd3c1e3087cc' },
      ],
    },
  },
  experimental: {
    payloadExtraction: false, // 取消生成 _payload.js
  },
  hooks: {
    'build:done': async () => {
      // const { default: generateCss } = await import('./src/hooks/antd');
      await generateCss();
    },
  },
  plugins: [
    // { src: '~/plugins/baidu-analytics', mode: 'client' }
  ],
  modules: [
    '@nuxtjs/i18n',
    // '@nuxtjs/robots',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@ant-design-vue/nuxt',
    // 'nuxt-icon',
    '@nuxt/content',
  ],
  content: {
    api: {
      baseURL: '/api/content',
    },
    // documentDriven: true,
    // sources: {
    //   content: {
    //     driver: 'fs',
    //     prefix: '/notes', // All contents inside this source will be prefixed with `/notes`
    //     base: resolve(__dirname, 'content/notes'),
    //   },
    // },
    // contentHead: true,
    highlight: {
      // Theme used in all color schemes.
      // theme: 'github-light',
      // OR
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai',
      },
    },
  },
  antd: {
    icons: [],
  },
});
