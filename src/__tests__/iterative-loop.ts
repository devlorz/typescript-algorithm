import { joinElementsIterative } from './../iterative-loop';

test('text in list should be joined correctly', () => {
  expect(joinElementsIterative(['a', 'b', 'c', 'd'], '&')).toBe('a&b&c&d');
  expect(joinElementsIterative(['s', 'cr', 't cod', ' :) :) '], 'e')).toBe(
    'secret code :) :) '
  );
});
