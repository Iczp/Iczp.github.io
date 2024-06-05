export type TagInfo = {
  name: string;
  title: string;
  icon?: string;
  description?: string;
};

export const useTags = async (type: 'categories' | 'tags') => {
  const { data } = await useAsyncData('categories', () =>
    queryContent(`/notes/${type}`).findOne()
  );

  const { items } = data.value as { items?: TagInfo[] };

  const getInfo = (name: string) => {
    const item = items?.find((x) => x.name.toLowerCase() === name.toLowerCase());
    return (
      item || {
        name,
        title: name,
      }
    );
  };

  return {
    items,
    getInfo,
  };
};
