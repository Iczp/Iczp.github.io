<script setup lang="ts">
import { ref } from 'vue';

// import { useHead } from '#app';

// const appConfig = useAppConfig();

// console.log(appConfig.theme);

const counter = ref(0);
const handleMessage = () => {
  counter.value++;
  //   message.info('This is a normal message');
};

// useHead({
//   title: 'ChatMaxim',

//   meta: [
//     { name: 'description', content: 'My amazing site.' },
//     { name: 'keywords', content: 'iczp.net' },
//   ],
//   bodyAttrs: {
//     class: 'test',
//   },
//   script: [{ innerHTML: "console.log('Hello world')" }],
// });
</script>

<template>
  <main>
    <button @click="handleMessage">button {{ counter }}</button>

    <!-- <NuxtLink to="about">About</NuxtLink> -->

    <nav></nav>

    <section>
      <h3>index data:</h3>
    </section>
  </main>
</template>
