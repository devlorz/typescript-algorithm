export const vowels = (text: string): number => {
  // first solution
  // let count = 0;
  // const checker = ['a', 'e', 'i', 'o', 'u'];

  // for (let char of text.toLowerCase()) {
  //   if (checker.includes(char)) {
  //     count++;
  //   }
  // }

  // return count;

  // second solution
  const matches = text.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};
