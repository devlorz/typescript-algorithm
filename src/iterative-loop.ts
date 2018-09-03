export const joinElementsIterative = (
  listText: Array<string>,
  joinText: string
) => {
  let result = '';

  for (let i = 0; i < listText.length - 1; i++) {
    result += listText[i] + joinText;
  }
  return result + listText[listText.length - 1];
};
