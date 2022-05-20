import { sumOfArrayElements } from './solution/index.js';

describe('basic/sumOfArrayElements', () => {
  it('should return sum of array elements', () => {
    expect(sumOfArrayElements([1, 2, 3])).toEqual(6);
    expect(sumOfArrayElements([-10, 10])).toEqual(0);
    expect(sumOfArrayElements([])).toEqual(0);
  });
});
