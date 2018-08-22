const reverse = (str: string) => {
  // first solution
  // return str
  //   .split('')
  //   .reverse()
  //   .join('');

  // second solution
  // let reversed = '';
  // for (let character of str) {
  //   reversed = character + reversed;
  // }
  // return reversed;

  // third solution
  return str.split('').reduce((acc, cur) => cur + acc, '');
};

export default reverse;
