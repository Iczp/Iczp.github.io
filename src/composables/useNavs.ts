export const useNavs = () => {
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
  ]);

  const current = ref(menus.value.findIndex((x) => x.url == route.path));

  return {
    menus,
    current,
  };
};
