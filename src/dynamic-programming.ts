export const dynamicProgramming = (coinValue: number, coins: Array<number>) => {
  const cache: { [key: number]: number } = {};
  const makeChange = (value: number) => {
    if (cache[value]) return cache[value];
    let minCoins = -1;
    coins.forEach(coin => {
      if (value - coin >= 0) {
        let currMinCoins = makeChange(value - coin);
        if (minCoins === -1 || currMinCoins < minCoins) {
          minCoins = currMinCoins;
        }
      }
    });

    cache[value] = minCoins + 1;
    return cache[value];
  };

  return makeChange(coinValue);
};
