import { sumTwoSmallestNumbers } from './solution';

describe('arrays/sumTwoSmallestNumbers', () => {
  it("should return sum two small numbers", function() {
    let result1 = sumTwoSmallestNumbers([1, 2, 3, 4, 5]);
    expect(result1).toBe(3);

    let result2 = sumTwoSmallestNumbers([9, 6, 3, 8, 5]);
    expect(result2).toBe(8);

    let result3 = sumTwoSmallestNumbers([7, 5, 10, 15, 2]);
    expect(result3).toBe(7);

    let result4 = sumTwoSmallestNumbers([100, 200, 300, 400, 500]);
    expect(result4).toBe(300);
  });
});
