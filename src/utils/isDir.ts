export const isDir = (item: any) => item?.children && Array.isArray(item?.children) && item?.children.length > 0;
