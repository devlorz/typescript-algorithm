import { bruteForce } from '../brute-force';
test('brute force should work', () => {
  expect(bruteForce(12, [10, 9, 1])).toBe(3);
  expect(bruteForce(10, [1, 9, 10])).toBe(1);
  expect(bruteForce(6, [10, 9, 1])).toBe(6);
});
