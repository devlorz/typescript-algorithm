export const maxChar = (text: string): string => {
  const charMap = text.split('').reduce(
    (acc, cur) => {
      acc[cur] = acc[cur] + 1 || 1;
      return acc;
    },
    <{ [key: string]: number }>{}
  );

  return Object.keys(charMap).reduce(
    (acc, cur) => (charMap[acc] > charMap[cur] ? acc : cur),
    ''
  );
};
