export const time10 = (n: number): number => n * 10;

const cache: { [type: number]: number } = {};

export const memoTimes10 = (n: number, fn: Function) => {
  if (n in cache) {
    return cache[n];
  } else {
    let result = fn(n);
    cache[n] = result;
    return result;
  }
};
