import { mergeSort } from "./solution/index.js";

describe("algorithms/mergeSort", () => {
  it("should return empty array for empty input", () => {
    const input = [];
    const output = mergeSort(input);
    expect(output).toEqual([]);
    expect(output).not.toBe(input); // new array
  });

  it("should handle single element", () => {
    expect(mergeSort([5])).toEqual([5]);
  });

  it("should sort already sorted array and keep stability", () => {
    const arr = [1, 2, 3, 4];
    const sorted = mergeSort(arr);
    expect(sorted).toEqual([1, 2, 3, 4]);
    expect(sorted).not.toBe(arr);
  });

  it("should sort reversed array", () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort with negatives", () => {
    expect(mergeSort([3, -2, 7, 0, -5])).toEqual([-5, -2, 0, 3, 7]);
  });

  it("should handle duplicates (stable)", () => {
    const arr = [4, 2, 2, 3, 2];
    const result = mergeSort(arr);
    expect(result).toEqual([2, 2, 2, 3, 4]);
  });

  it("should not mutate original array", () => {
    const original = [3, 1, 2];
    const copy = [...original];
    mergeSort(original);
    expect(original).toEqual(copy);
  });
});

// [your tests here]
