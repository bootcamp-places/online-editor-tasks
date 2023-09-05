import { returnCollections } from "./solution/index.js";

describe("arrays/returnCollections", () => {
  it("should be ", () => {
    expect(returnCollections([])).toEqual([[]]);
    expect(returnCollections([1, 2, 3])).toEqual([[1, 2, 3]]);
    expect(returnCollections([4, 7, 2, -1, 6, 0, 3])).toEqual([
      [-1, 0],
      [2, 3, 4],
      [6, 7],
    ]);
    expect(returnCollections([1, 7, 3, 5])).toEqual([[1], [3], [5], [7]]);
    expect(returnCollections([51, 3, 1, 49, 50, 0])).toEqual([
      [0, 1],
      [3],
      [49, 50, 51],
    ]);
  });
});
