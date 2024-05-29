<script setup lang="ts">
import { watchDebounced } from '@vueuse/core';

const activeTocId = ref(null);
const nuxtContent = ref(null);

const observer: Ref<IntersectionObserver | null | undefined> = ref(null);
const observerOptions = reactive({
  root: nuxtContent.value,
  // 0, which means that as soon as even one pixel is visible, the callback will fire.
  // 0.5, to be 50% of the way through the viewport when observing the element
  threshold: 0.5,
});

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      if (entry.isIntersecting) {
        activeTocId.value = id;
      }
    });
  }, observerOptions);

  // Track all sections that have an `id` applied
  document
    .querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]')
    .forEach((section) => {
      observer.value?.observe(section);
    });
});

onUnmounted(() => {
  observer.value?.disconnect();
});
</script>

<template>
  <main class="p-4 flex flex-col gap-4">
    <ContentDoc>
      <template #default="{ doc }">
        <div class="grid grid-cols-12 gap-8">
          <div class="nuxt-content col-span-8">
            <ContentRenderer ref="nuxtContent" :value="doc" />
          </div>
          <div class="col-span-4 border rounded-md p-4">
            <div class="sticky top-0 flex flex-col items-center">
              <TableOfContents :activeTocId="activeTocId" />
            </div>
          </div>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>
