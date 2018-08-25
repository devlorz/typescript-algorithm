const reverseInt = (n: number): number => {
  const text = n < 0 ? (n * -1).toString() : n.toString();
  const reverseText = text
    .split('')
    .reverse()
    .join('');
  return n < 0 ? +reverseText * -1 : +reverseText;
};

export default reverseInt;
