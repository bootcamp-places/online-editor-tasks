import { countIslands } from "./solution/index.js";

describe("algorithms/countIslands", () => {
  it("should be", () => {
    {
      const map = [];
      expect(countIslands(map)).toBe(0);
    }
    {
      const map = [[], []];
      expect(countIslands(map)).toBe(0);
    }
    {
      const map = [[0]];
      expect(countIslands(map)).toBe(0);
    }
    {
      const map = [[1]];
      expect(countIslands(map)).toBe(1);
    }
    {
      const map = [
        [0, 0, 0, 1],
        [1, 1, 0, 1],
        [0, 1, 0, 0],
        [1, 0, 0, 0],
      ];
      expect(countIslands(map)).toBe(3);
    }
    {
      const map = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];
      expect(countIslands(map)).toBe(0);
    }
    {
      const map = [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ];
      expect(countIslands(map)).toBe(1);
    }
    {
      const map = [
        [1, 0, 1, 0],
        [0, 1, 0, 1],
        [1, 0, 1, 0],
        [0, 1, 0, 1],
      ];
      expect(countIslands(map)).toBe(8);
    }
    {
      const map = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0],
      ];
      expect(countIslands(map)).toBe(2);
    }
  });

  // [your tests here]
});
