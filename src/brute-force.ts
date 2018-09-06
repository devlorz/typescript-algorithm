export const bruteForce = (coinValue: number, coins: Array<number>) => {
  const makeChange = (value: number) => {
    if (value === 0) return 0;
    let minCoins: number;
    coins.forEach(coin => {
      if (value - coin >= 0) {
        let currMinCoins = makeChange(value - coin);
        if (minCoins === undefined || currMinCoins < minCoins) {
          minCoins = currMinCoins;
        }
      }
    });
    return minCoins + 1;
  };

  return makeChange(coinValue);
};
