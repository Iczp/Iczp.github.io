import { generateCss } from './src/hooks/antd';
import { resolve } from 'path';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  router: {
    // base: '/',
    // base: '/nuxt-antd/',
  },

  ssr: true,
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
        // {
        //   rel: 'stylesheet',
        //   href: '/css/style.css', // 引用生成的静态样式文件
        // },
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
    // '@pinia/nuxt',
    '@ant-design-vue/nuxt',
    'nuxt-icon',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    // 'nuxt-anchorscroll',
  ],

  content: {
    navigation: {
      fields: ['author', 'date', 'tags', 'categories', 'description', 'title'],
    },
    experimental: {
      // stripQueryParameters: true,
      // advanceQuery: true,
      clientDB: true,
      search: {
        indexed: false,
        options: {
          fields: [
            'title',
            'description',
            'tags',
            'categories',
            'author',
            'date',
          ],
        },
      },
    },
    api: {
      baseURL: '/api/content',
    },
    // documentDriven: true,
    documentDriven: {
      page: true, // Keep page fetching enabled
      surround: false, // Disable surround fetching
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5,
      },
    },
    sources: {
      content: {
        driver: 'fs',
        prefix: '/notes', // All contents inside this source will be prefixed with `/notes`
        base: resolve(__dirname, './content'),
      },
      // docs: {
      //   driver: 'fs',
      //   prefix: '/docs', // All contents inside this source will be prefixed with `/notes`
      //   base: resolve(__dirname, './docs'),
      // },
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
        'java',
        'javascript',
        'cmd',
        'json',
        'css',
        'less',
        'scss',
        'sass',
        'html',
        'json5',
        'yaml',
        'vue',
        'csharp',
        'c#',
        'xml',
      ],
    },
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
  colorMode: {
    preference: 'system', // system | light | dark, default value of $colorMode.preference
    fallback: '', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'theme-mode',
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
  // anchorscroll: {
  //   hooks: [
  //     // Or any valid hook if needed
  //     // Default is `page:finish`
  //     'page:transition:finish',
  //   ],
  // },
  routeRules: {
    '/': { ssr: true, prerender: false },
    '/links': { ssr: true, prerender: false },
    '/about': { ssr: true, prerender: false },
    '/notes': { ssr: true, prerender: true },
    '/tags': { ssr: true, prerender: false },
    '/tags/**': { ssr: true, prerender: false },
  },
});
