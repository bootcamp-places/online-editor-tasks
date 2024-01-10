import { mostFrequentValue } from "./solution/index.js";

describe("arrays/mostFrequentValue", () => {
  it("should be defined", () => {
    expect(mostFrequentValue).toBeDefined();
  });

  it("should return most frequent value", () => {
    expect(mostFrequentValue([1, 1, 2, 3, 1, 2, 5, 1, 3, 1])).toEqual(1);

    expect(mostFrequentValue(["a", "b", "b", "c", "a", "b", "c"])).toEqual("b");

    expect(mostFrequentValue([1, "a", "b", 2, 1, "c", 1])).toEqual(1);
  });
});
