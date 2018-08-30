const buildCharMap = (text: string): { [key: string]: number } => {
  const charMap: { [key: string]: number } = {};
  for (let char of text.replace('/[^w/g]', '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
};

export const anagrams = (textA: string, textB: string): boolean => {
  const aCharMap = buildCharMap(textA);
  const bCharMap = buildCharMap(textB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
};
