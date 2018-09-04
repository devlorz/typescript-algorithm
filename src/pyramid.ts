// first solution
// export const pyramid = (n: number) => {
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let column = 0; column < 2 * n - 1; column++) {
//       const midPoint = Math.floor((2 * n - 1) / 2);
//       const checkColumn = Math.abs(column - midPoint);
//       if (checkColumn <= row) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// };

export const pyramid = (n: number, row = 0, level = ''): void => {
  if (n === row) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midPoint = Math.floor((2 * n - 1) / 2);
  const checkColumn = Math.abs(level.length - midPoint);
  const add = checkColumn <= row ? '#' : ' ';

  return pyramid(n, row, level + add);
};
