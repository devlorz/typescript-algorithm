export const uniqSort = (numList: number[]) => {
  const cache: { [key: number]: boolean } = {};
  const result = numList.reduce((acc, cur) => {
    if (!cache[cur]) {
      cache[cur] = true;
      return [...acc, cur];
    }
    return acc;
  }, []);
  return result.sort((a, b) => a - b);
};
