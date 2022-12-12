/* eslint-disable comma-spacing */
/* eslint-disable no-sparse-arrays */
import { arrayIndex } from './solution/index.js';

describe('bugfix/arrayIndex', () => {
  it('should be defined', () => {
    expect(arrayIndex).toBeDefined();
  });

  it("should work for empty array", () => {
    expect(arrayIndex([])).toEqual(0);
  });
  it("should work for with empty cells", () => {
    expect(arrayIndex([,1])).toEqual(0);
  });
  it("should work for normal case", () => {
    expect(arrayIndex([1, 2, 3])).toEqual(6);
  });
});
