const palindrome = (text: string): boolean => {
  // first solution
  // const reverseText = text
  //   .split('')
  //   .reverse()
  //   .join('');
  // return text === reverseText;

  // second solution
  return text.split('').every((char, index) => {
    return char === text[text.length - index - 1];
  });
};

export default palindrome;
