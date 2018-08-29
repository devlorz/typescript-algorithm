export const chunk = (list: Array<number>, size: number) => {
  const newList: Array<Array<number>> = [];
  let cacheList: Array<number> = [];
  let cache = 0;
  list.reduce((acc, cur) => {
    if (cache < size) {
      cache++;
      cacheList.push(cur);
    } else {
      cache = 1;
      acc.push(cacheList);
      cacheList = [cur];
    }
    return acc;
  }, newList);
  newList.push(cacheList);
  return newList;
};
