import { highestAndLowest } from './solution';

describe('js-basic/highestAndLowest', () => {
  it('should return new string with highest and lowest value', () => {
    const numbers = '1 2 3 4 5';

    expect(highestAndLowest(numbers)).toBe('5 1');
  });

  it('should work with negative values', () => {
    const numbers = '-1 -2 -3 -4 -5';

    expect(highestAndLowest(numbers)).toBe('-1 -5');
  });
});
