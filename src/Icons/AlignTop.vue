<script lang="ts" setup>
// const { scrollToAnchor, scrollToTop } = useAnchorScroll({
//   toTop: {
//     scrollOptions: {
//       behavior: 'smooth',
//       offsetTop: 0,
//     },
//   },
// });

const scrollToTop = () => {}
</script>

<template>
  <div
    class="align-top sticky bottom-8 right-8 border border-green-800 rounded-full text-xl w-12 h-12 flex justify-center items-center shadow-green-600 self-end bg-green-600 bg-opacity-20 hover:bg-opacity-40 hover:bg-green-700"
    @click="scrollToTop"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M8 11h3v10h2V11h3l-4-4zM4 3v2h16V3z"></path>
    </svg>
  </div>
</template>

<style scoped>
.align-top {
  box-shadow: 0 0 5px #34d399;
  font-size: 24px;
}
</style>
