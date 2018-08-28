import { memoTimes10 } from './../basic-memoization';

test('call on same value must not call function again', () => {
  const mockFn = jest.fn();
  memoTimes10(5, mockFn);
  expect(mockFn).toBeCalledWith(5);
  memoTimes10(5, mockFn);
  memoTimes10(5, mockFn);
  memoTimes10(5, mockFn);
  memoTimes10(5, mockFn);
  memoTimes10(5, mockFn);
  memoTimes10(5, mockFn);
  memoTimes10(5, mockFn);
  memoTimes10(5, mockFn);
  expect(mockFn).toHaveBeenCalledTimes(1);
});
