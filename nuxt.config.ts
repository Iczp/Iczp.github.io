import { generateCss } from './src/hooks/antd';
import { resolve } from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    // typeCheck: true,
    // strict: true,
  },
  srcDir: 'src/',
  // buildDir: './output/',
  imports: {
    autoImport: true,
    presets: [
      // {
      //   from: 'vue-i18n',
      //   imports: ['useI18n'],
      // },
    ],
  },
  components: {
    /**
     * 要禁用自动导入的话，components.dirs设置为空数组
     * 但请注意，这不会影响模块添加的组件
     */
    // dirs: [],
    global: true,
    dirs: ['~/components', '~/FileIcons', '~/Icons'],
  },
  app: {
    baseURL: '/',
    buildAssetsDir: 'static',
    rootId: 'iczp_net',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'stylesheet',
          href: '/css/antd.min.css', // 引用生成的静态样式文件
        },
        // {
        //   rel: 'stylesheet',
        //   href: '/css/scroller.css', // 引用生成的静态样式文件
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
  css: [
    // 'ant-design-vue/dist/antd.css', // 引入 Ant Design 样式
    // '~/assets/css/tailwind.css', //  Tailwind 入口文件
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
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
    { src: '~/plugins/antd.ts', mode: 'client' },
  ],
  vite: {
    resolve: {
      alias: {
        // 'ant-design-vue/es':"ant-design-vue/es",
        // 'ant-design-vue':"ant-design-vue/es"
      },
    },
  },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    // '@nuxtjs/robots',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@ant-design-vue/nuxt',
    'nuxt-icon',
    '@nuxt/content',
    // '@nuxtjs/tailwindcss',
  ],

  content: {
    experimental: {
      clientDB: true,
      search: {},
    },
    api: {
      baseURL: '/api/content',
    },
    // documentDriven: true,
    documentDriven: {
      page: false, // Keep page fetching enabled
      surround: false, // Disable surround fetching
    },
    sources: {
      content: {
        driver: 'fs',
        prefix: '/notes', // All contents inside this source will be prefixed with `/notes`
        base: resolve(__dirname, './content'),
      },
    },
    // contentHead: true,
    highlight: {
      // Theme used in all color schemes.
      // theme: 'github-light',
      // OR
      theme: {
        // Default theme (same as single string)
        // github-light | github-dark
        default: 'github-dark',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai',
      },
      langs: [
        'diff',
        'bash',
        'ts',
        'js',
        'json',
        'css',
        'html',
        'json5',
        'yaml',
        'vue',
      ],
    },
    // markdown: {
    //   toc: {
    //     includeLevel: [2, 3],
    //   },
    // },
  },
  antd: {
    // components: ['Tabs', 'TabsPance', 'Message', 'Notification', 'Button'],
    imports: ['message', 'notification', 'Modal', 'App'],
    // icons: [],
    // extractStyle: true,
  },
  icon: {
    appIcons: [
      {
        prefix: 'my-icon',
        dir: './src/assets/app-icons',
      },
    ],
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
});
