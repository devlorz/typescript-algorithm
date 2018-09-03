export const wrapperFn = (n: number): number => {
  const factorial = (n: number): number => {
    return n <= 1 ? 1 : n * factorial(n - 1);
  };

  return factorial(n);
};
