import { uniqSort } from '../uniqsort';

test('Unique Sort function exists', () => {
  expect(uniqSort).toBeDefined();
});

test('Empty Array should return Empty', () => {
  expect(uniqSort([])).toEqual([]);
});

test('Array contain 1 value should return the same array', () => {
  expect(uniqSort([1])).toEqual([1]);
});

test('Not unique array should return unique array', () => {
  expect(uniqSort([1, 1, 1, 1])).toEqual([1]);
});

test('Unsorted array should return sorted unique array', () => {
  expect(uniqSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
});

test('Unsorted and not unique array should return sorted unique array', () => {
  expect(uniqSort([4, 2, 2, 3, 2, 2])).toEqual([2, 3, 4]);
  expect(uniqSort([4, 2, 2, 3, 2, 2, 1, 5, 6, 7, 7, 7, 5, 5, 6])).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ]);
  expect(uniqSort([1, 1, 1, 2, 2, 2, 4, 4, 4, 3, 3, 3, 5, 6, 7])).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ]);
});
