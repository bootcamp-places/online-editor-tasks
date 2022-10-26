import { getStringFromNestedObject } from "./solution/index.js";

describe("objects/getStringFromNestedObject", () => {
  it("should be defined", () => {
    expect(getStringFromNestedObject).toBeDefined();
  });

  it("should return string as a result", () => {
    expect(
      getStringFromNestedObject("white.beautiful.puppy", {
        white: { beautiful: { puppy: "woof" } },
      })
    ).toEqual("woof");

    expect(
      getStringFromNestedObject("gray.cat.with.yellow.eyes", {
        gray: { cat: { with: { yellow: { eyes: "meow" } } } },
      })
    ).toEqual("meow");
  });
});
