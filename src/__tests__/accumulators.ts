import { joinElements } from './../accumulators';

test('text in list should be joined correctly', () => {
  expect(joinElements(['a', 'b', 'c', 'd'], '&')).toBe('a&b&c&d');
  expect(joinElements(['s', 'cr', 't cod', ' :) :) '], 'e')).toBe(
    'secret code :) :) '
  );
});
