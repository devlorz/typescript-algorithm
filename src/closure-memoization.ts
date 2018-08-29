const memoizedClosure = (): Function => {
  const cache: { [type: number]: number } = {};
  return (n: number, fn: Function) => {
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = fn(n);
      return cache[n];
    }
  };
};

export const memoClosure = memoizedClosure();
