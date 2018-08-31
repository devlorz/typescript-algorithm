const buildCharMap = (text: string): { [key: string]: number } => {
  const charMap: { [key: string]: number } = {};
  for (let char of text.replace('/[^w/g]', '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
};

const cleanText = (text: string): string => {
  return text
    .replace('/[^w/g]', '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
};

export const anagrams = (textA: string, textB: string): boolean => {
  // first solution
  // const aCharMap = buildCharMap(textA);
  // const bCharMap = buildCharMap(textB);

  // if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
  //   return false;
  // }

  // for (let char in aCharMap) {
  //   if (aCharMap[char] !== bCharMap[char]) {
  //     return false;
  //   }
  // }
  // return true;

  // second solution
  return cleanText(textA) === cleanText(textB);
};
