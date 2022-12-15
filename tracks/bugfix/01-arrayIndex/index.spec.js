/* eslint-disable comma-spacing */
/* eslint-disable no-sparse-arrays */
import { arrayIndex } from "./solution/index.js";

describe("bugfix/arrayIndex", () => {
  it("should be defined", () => {
    expect(arrayIndex).toBeDefined();
  });

  it("Old Case: should work for empty array", () => {
    expect(arrayIndex([])).toEqual(0);
  });
  it("Old Case: should work for all cells", () => {
    expect(arrayIndex([0, 1])).toEqual(1);
  });
  it("Old Case: should work for total number with 0", () => {
    expect(arrayIndex([0, 1, 2, 3])).toEqual(6);
  });
  it("Old Case: should work for with empty cells", () => {
    expect(arrayIndex([, 1])).toEqual(1);
  });
  it("New Case: should work for normal case", () => {
    expect(arrayIndex([1, 2, 3])).toEqual(6);
  });
  it("New Case: should work correctly", () => {
    expect(arrayIndex([1, 2, 3, 4])).toEqual(10);
  });
});
