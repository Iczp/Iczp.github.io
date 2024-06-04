<script setup lang="ts">
const route = useRoute();

const { params,query } = route;
</script>

<template>
  <main>
    <h1>params :{{ params }}</h1>
    <h1>query :{{ query }}</h1>


    <UAlert
      icon="i-heroicons-command-line"
      description="You can add components to your app using the cli."
      title="Heads up!"
    />
  </main>
</template>
