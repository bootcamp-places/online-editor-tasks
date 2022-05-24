import { highestAndLowest } from './solution/index.js';

describe('objects/highestAndLowest', () => {
  it('should return new string with highest and lowest value', () => {
    const numbers = '1 2 3 4 5';

    expect(highestAndLowest(numbers)).toBe('1 5');
  });

  it('should work with negative values', () => {
    const numbers = '-1 -2 -3 -4 -5';

    expect(highestAndLowest(numbers)).toBe('-5 -1');
  });
});
