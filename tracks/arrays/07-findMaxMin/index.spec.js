import { findMaxMin } from "./solution/index.js";

describe("arrays/findMaxMin", () => {
  it("should be defined", () => {
    expect(findMaxMin).toBeDefined();
  });

  it("should work for empty array", () => {
    expect(findMaxMin([], "max")).toEqual([-1, -1]);
  });
  it("should work for one element", () => {
    expect(findMaxMin([1], "max")).toEqual([1, 0]);
  });
  it("should work for example with max", () => {
    expect(findMaxMin([19.99, 32.0, 11.98, 0.99, 3.14], "max")).toEqual([
      32, 1,
    ]);
  });
  it("should work for example with min", () => {
    expect(findMaxMin([19.99, 32.0, 11.98, 0.99, 3.14], "min")).toEqual([
      0.99, 3,
    ]);
  });
  it("should work for big array with max", () => {
    expect(
      findMaxMin(
        [
          999.99, 701.32, 246.48, 512.68, 818.45, 722.67, 719.68, 257.24,
          575.09, 391.85, 274.7, 917.08, 980.37, 914.34, 931.45, 369.74, 0.99,
          88.43, 11.16, 42.77, 60.89, 90.97, 65.16, 66.72, 7.81, 89.94, 23.21,
          16.61, 56.08, 57.66, 30.02, 86.96,
        ],
        "max"
      )
    ).toEqual([999.99, 0]);
  });
  it("should work for big array with min", () => {
    expect(
      findMaxMin(
        [
          999.99, 701.32, 246.48, 512.68, 818.45, 722.67, 719.68, 257.24,
          575.09, 391.85, 274.7, 917.08, 980.37, 914.34, 931.45, 369.74, 0.99,
          561.13, 144.27, 210.22, 10.18, 539.47, 481.47, 575.11, 127.38, 195.19,
          38721, 265.04, 355.1, 562.86, 529.74, 720.5,
        ],
        "min"
      )
    ).toEqual([0.99, 16]);
  });
});
