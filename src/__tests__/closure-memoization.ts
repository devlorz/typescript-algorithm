import { memoClosure } from './../closure-memoization';

test('call on same value must not call function again', () => {
  const mockFn = jest.fn();
  memoClosure(5, mockFn);
  expect(mockFn).toBeCalledWith(5);
  memoClosure(5, mockFn);
  memoClosure(5, mockFn);
  memoClosure(5, mockFn);
  memoClosure(5, mockFn);
  memoClosure(5, mockFn);
  memoClosure(5, mockFn);
  memoClosure(5, mockFn);
  memoClosure(5, mockFn);
  expect(mockFn).toHaveBeenCalledTimes(1);
});
