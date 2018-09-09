export const fib = (n: number): number => {
  // first solution
  // const result = [0, 1];

  // for (let i = 2; i <= n; i++) {
  //   const a = result[i - 1];
  //   const b = result[i - 2];

  //   result.push(a + b);
  // }
  // return result[n];

  const cache: { [key: number]: number } = [];

  // second solution
  const fibo = (n: number): number => {
    if (cache[n]) {
      return cache[n];
    }

    if (n < 2) {
      cache[n] = n;
      return n;
    }

    const calculatedValue = fibo(n - 1) + fibo(n - 2);
    cache[n] = calculatedValue;
    return calculatedValue;
  };

  return fibo(n);
};
