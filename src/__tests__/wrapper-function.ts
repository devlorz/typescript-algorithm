import { wrapperFn } from './../wrapper-function';

test('factorial on recursive should work', () => {
  expect(wrapperFn(1)).toBe(1);
  expect(wrapperFn(5)).toBe(120);
});
