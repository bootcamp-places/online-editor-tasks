import { nestedLength } from './solution/index.js';

describe('arrays/nestedLength', () => {
  const inputs = [
    [1, 2, 3, 4, 5],
    [1, [2, 3, 4, 5]],
    [1, [2, [3, 4, 5, 6]]],
    [1, [2, [3, [4], 5], 6, [7, 8], 9]],
    [1, [[[[2]]]]],
  ];

  it('should be defined', () => {
    expect(nestedLength).toBeDefined();
  });

  it("should count all nested elements in an array", () => {
    for (let input of inputs) {
      const correctLength = input.flat(99999).length;
      expect(nestedLength(input)).toBe(
        correctLength,
        `Incorrect length ${nestedLength(input)} for array ${JSON.stringify(
          input
        )}`
      );
    }
  });
});
