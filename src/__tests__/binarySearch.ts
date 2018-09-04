import { binarySearch } from '../binarySearch';

test('binarySearch should work', () => {
  expect(binarySearch([2, 5, 7, 11, 29], 11)).toBe(3);
  expect(binarySearch([2, 5, 7, 11, 29], 2)).toBe(0);
  expect(binarySearch([2, 5, 7, 11, 29], 29)).toBe(4);
  expect(binarySearch([2, 5, 7, 11, 29], 35)).toBe(-1);
});
