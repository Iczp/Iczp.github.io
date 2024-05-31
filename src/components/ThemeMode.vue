<script setup lang="ts">
// const isDark = useDark();
// const toggleDark = useToggle(isDark);
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? '' : 'dark';
  console.log('colorMode', colorMode.value);
};
</script>

<template>
  <!-- <button @click="toggleDark()">
    <LightMode v-if="isDark" />
    <NightMode v-else />
  </button> -->

  <ColorScheme placeholder="..." tag="div">
    <div @click="toggleColorMode">
      Color mode: <b>{{ $colorMode.preference }}</b>
      <span v-if="$colorMode.preference === 'system'"
        >(<i>{{ $colorMode.value }}</i> mode detected)
      </span>
    </div>
  </ColorScheme>
</template>
