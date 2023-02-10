import { shoppingCart } from "./solution/index.js";

describe("arrays/shoppingCart", () => {
  it("should be defined", () => {
    expect(shoppingCart).toBeDefined();
  });

  it("should work for empty array", () => {
    expect(shoppingCart([])).toEqual([]);
  });

  it("should work for normal case", () => {
    expect(shoppingCart(["1", "3", "99"])).toEqual(["1", "3", "99"]);
  });

  it("should work for sparse array", () => {
    // eslint-disable-next-line no-sparse-arrays
    expect(shoppingCart(["1", , null, "3", , undefined, "99"])).toEqual([
      "1",
      "3",
      "99",
    ]);
  });

  it("should work for example", () => {
    // eslint-disable-next-line no-sparse-arrays
    expect(shoppingCart(["1", null, "3", "", "99", null, , "0"])).toEqual([
      "1",
      "3",
      "99",
    ]);
  });

  it("should work for complex case", () => {
    // eslint-disable-next-line no-sparse-arrays
    expect(shoppingCart(["1", null, "3", "", "99", false, undefined, , "0", 33, NaN])).toEqual(["1", "3", "99", "33"]);
  });
});
