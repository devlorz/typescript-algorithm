export const chunk = (list: Array<number>, size: number) => {
  // first solution
  // const chunked: Array<Array<number>> = [];
  // for (let element of list) {
  //   const last = chunked[chunked.length - 1];

  //   if (!last || last.length === size) {
  //     chunked.push([element]);
  //   } else {
  //     last.push(element);
  //   }
  // }
  // return chunked;

  // second solution
  const chunked: Array<Array<number>> = [];
  for (let i = 0; i < list.length; i = i + size) {
    chunked.push(list.slice(i, i + size));
  }
  return chunked;
};
