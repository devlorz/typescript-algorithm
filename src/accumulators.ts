export const joinElements = (
  textList: Array<string>,
  joinText: string
): string => {
  const recurse = (index: number, resultSoFar: string): string => {
    resultSoFar += textList[index];

    if (index === textList.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinText);
    }
  };

  return recurse(0, '');
};
