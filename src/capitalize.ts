export const capitalize = (text: string): string => {
  // return text
  //   .split(' ')
  //   .map(word =>
  //     word
  //       .split('')
  //       .map((char, index) => (index === 0 ? char.toUpperCase() : char))
  //       .join('')
  //   )
  //   .join(' ');

  // first solution
  // const words = [];
  // for (let word of text.split(' ')) {
  //   words.push(word[0].toUpperCase() + word.slice(1));
  // }

  // return words.join(' ');

  // second solution
  let result = text[0].toUpperCase();
  for (let i = 1; i < text.length; i++) {
    if (text[i - 1] === ' ') {
      result += text[i].toUpperCase();
    } else {
      result += text[i];
    }
  }
  return result;
};
