<script setup lang="ts">
const { items: list } = await useTags('tags');

const { getAllByTags } = await useNavigationList();
const route = useRoute();

const items = list.map((x) => {
  const tagList = getAllByTags([x.name]);

  return {
    label: x.title,
    active: route.params.id == x.name,
    icon: x.icon, //'i-heroicons-tag',
    to: `/tags/${x.name}`,
    badge: tagList.length,
  };
});

const links = [
  {
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4',
    },
    badge: 100,
  },
  {
    label: 'Installation',
    icon: 'i-heroicons-home',
    to: '/getting-started/installation',
  },
  {
    label: 'Vertical Navigation',
    icon: 'i-heroicons-chart-bar',
    to: `${
      route.path.startsWith('/dev') ? '/dev' : ''
    }/components/vertical-navigation`,
  },
  {
    label: 'Command Palette',
    icon: 'i-heroicons-command-line',
    to: '/components/command-palette',
  },
  ...items,
];
</script>

<template>
  <UVerticalNavigation :links="links" class="text-sm">
    <template #icon="{ link }">
      <Icon :name="link.icon" class="size-4" />
    </template>
  </UVerticalNavigation>
</template>
