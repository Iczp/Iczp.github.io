<script lang="ts" setup></script>

<template>
  <section class="logo-container flex-shrink-0">
    <NuxtLink to="/">
      <div class="logo"></div>
      <div class="logo-content">
        <h1 class="site-title"><strong class="light">VVLL</strong>.net</h1>
        <p class="site-description">
          <span><strong class="light">V</strong>ite</span>
          <span> <strong class="light">V</strong>ue</span>
          <span><strong class="light">L</strong>ink</span>
          <span><strong class="light">L</strong>ab</span>
          <span> (链接实验室)</span>
        </p>
      </div>
    </NuxtLink>
  </section>
</template>

<style scoped>
.logo-container {
  display: flex;
  --logo-color: rgb(0, 227, 144);
}
.logo-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: 0;
  margin: 0;
  font-size: 24px;
  /* color: var(--logo-color); */
  gap: 4px;
}
.site-title {
  display: flex;
  font-size: 24px;
  padding: 0;
  margin: 0;
}
.site-description {
  display: flex;
  font-size: 12px;
  color: #375749;
  padding: 0;
  margin: 0;
  gap: 4px;
}
.light {
  color: var(--logo-color);
  opacity: 0.8;
}
</style>
