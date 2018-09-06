import { dynamicProgramming } from './../dynamic-programming';
test('dynamic programming should work', () => {
  expect(dynamicProgramming(12, [10, 9, 1])).toBe(3);
  expect(dynamicProgramming(10, [1, 9, 10])).toBe(1);
  expect(dynamicProgramming(6, [10, 9, 1])).toBe(6);
});
