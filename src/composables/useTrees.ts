export type ItemType = {
  // id: number;
  $isOpen?: boolean;
  $isActive?: boolean;
  children?: ItemType[];
};
export type CallbackFn = (
  item: any,
  depth: number,
  index: number,
  parents: any[]
) => boolean;
export const useTrees = ({
  items,
  open = (item, depth, index, parents) => true,
  active = (item, depth, index, parents) => false,
  action,
}: {
  items?: any[] | null;
  open?: (item: any, depth: number, index: number, parents: any[]) => boolean;
  active?: (item: any, depth: number, index: number, parents: any[]) => boolean;
  action?: (item: any, depth: number, index: number, parents: any[]) => void;
}) => {
  let row = 0;
  const formatItems = (
    items?: any[] | null,
    depth: number = 0,
    parents: any[] = []
  ): ItemType[] => {
    if (!items) return [];
    return items.map((x, i) => {
      row++;
      action && action(x, depth, i, parents);
      return {
        ...x,
        $row: row,
        $isOpen: open(x, depth, i, [x, ...parents]),
        $isActive: active(x, depth, i, [x, ...parents]),
        children: x.children
          ? formatItems(x.children, depth + 1, [x, ...parents])
          : [],
      };
    });
  };
  const refItems = ref(formatItems(items));
  //   console.log(items);
  const toggleOpen = (item: ItemType) => {
    // console.log(item);
    item.$isOpen = !item.$isOpen;
  };

  return { formatItems, toggleOpen, items: refItems };
};
