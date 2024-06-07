export type TagInfo = {
  name: string;
  title: string;
  icon?: string;
  description?: string;
  url?: string;
};

export const useTags = async (type: 'categories' | 'tags') => {
  const { data } = await useAsyncData(`tag:${type}`, () =>
    queryContent(`/notes/_${type}`).find()
  );

  const getInfo = (name: string) => {
    const item = data.value?.find(
      (x) => x.name.toLowerCase() === name.toLowerCase()
    );
    return (
      item || {
        name,
        title: name,
      }
    );
  };

  return {
    items: data.value,
    getInfo,
  };
};
