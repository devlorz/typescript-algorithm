// first solution
// export const steps = (n: number) => {
// for (let row = 0; row < n; row++) {
//   let stair = '';
//   for (let column = 0; column < n; column++) {
//     if (column <= row) {
//       stair += '#';
//     } else {
//       stair += ' ';
//     }
//   }
//   console.log(stair);
// }
// };

// second solution
export const steps = (n: number, row = 0, stair = ''): void => {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  return steps(n, row, stair);
};
