import { isNumeric, formatPrettyNumber } from '../src/internal/format';

test('isNumeric should return false on string input', () => {
  const value = 'abc';
  expect(isNumeric(value)).toBe(false);
});

test('isNumeric should return true on number input', () => {
  const value = 123;
  expect(isNumeric(value)).toBe(true);
});

test('isNumeric should return true on number (as a string) input', () => {
  const value = '123';
  expect(isNumeric(value)).toBe(true);
});
