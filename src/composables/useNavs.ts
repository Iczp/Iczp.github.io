export const useNavs = () => {
  const route = useRoute();
  const selectedKeys = ref<string[]>([route.path]);

  const menus = ref([
    {
      key: 'index',
      url: '/',
      title: 'Home',
    },
  ]);

  return {
    menus,
    selectedKeys,
  };
};
