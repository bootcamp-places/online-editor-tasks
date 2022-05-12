import { largestPairSum } from './solution';

describe('largestPairSum', () => {
  it('should return sum of highest and lowest values', () => {
    expect(largestPairSum([1, 2, 3, 5, 12])).toBe(17);
    expect(largestPairSum([12, 32, 14, 22])).toBe(54);
  });

  it('should work with negative values', () => {
    const numbers = [-3, -123, -12, -1];

    expect(largestPairSum(numbers)).toBe(-4);
  });
});
