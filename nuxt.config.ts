// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  app: {
    baseURL: '/',
    buildAssetsDir: 'static',
  },
  experimental: {
    payloadExtraction: false, // 取消生成 _payload.js
  },
});
