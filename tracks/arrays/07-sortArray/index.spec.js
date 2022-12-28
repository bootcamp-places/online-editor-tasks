import { sortArray } from './solution/index.js';

describe('arrays/sortArray', () => {
  it('should be defined', () => {
    expect(sortArray).toBeDefined();
  });

  it("should work with example", () => {
    expect(sortArray([0, 33, 11, 90, 70, 100, 70, 0])).toEqual([100, 90, 70]);
  });

  it("should sort array of 3 items", () => {
    expect(sortArray([1, 12, 45])).toEqual([45, 12, 1]);
    expect(sortArray([13, 100, 1])).toEqual([100, 13, 1]);
  });

  it("should work with small arrays", () => {
    expect(sortArray([0, 1])).toEqual([1, 0]);
    expect(sortArray([1])).toEqual([1]);
    expect(sortArray([])).toEqual([]);
  });
});
