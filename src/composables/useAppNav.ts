export const useAppNav = () => {
  const route = useRoute();

  const menus = ref([
    {
      key: 'index',
      url: '/',
      title: 'Home',
    },
    {
      key: 'links',
      url: '/links',
      title: 'Links',
    },
    {
      key: 'notes',
      url: '/notes',
      title: 'Notes',
    },

    {
      key: 'Icons',
      url: 'https://icones.js.org/collection/ic',
      title: 'Icons',
      target: '_blank',
    },
    {
      key: 'tailwind',
      url: '/_tailwind',
      title: 'tailwind',
      target: '_blank',
    },
  ]);

  const current = ref(
    menus.value
      // .filter((x) => x.url != '/')
      .findIndex((x) => x.url != '/' && route.path.startsWith(x.url))
  );

  if (current.value == -1) {
    console.log('route.path', route.path);

    current.value = 0;
  }

  return {
    menus,
    current,
  };
};
