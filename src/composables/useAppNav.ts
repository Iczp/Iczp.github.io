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
      key: 'about',
      url: '/about',
      title: 'About',
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
