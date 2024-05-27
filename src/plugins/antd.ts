// plugins/antd.js
// import { createApp } from 'vue';
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

export default defineNuxtPlugin((nuxtApp) => {
  if (!process.client) {
    return;
  }
//   nuxtApp.vueApp.use(Antd);
  //   const app = createApp({});
  //   app.use(Antd);

  //   app.mount('#__nuxt');

  console.log('antd used');
});
