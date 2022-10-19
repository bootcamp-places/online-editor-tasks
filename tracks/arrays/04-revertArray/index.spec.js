import { revertArray } from "./solution/index.js";

describe("arrays/revertArray", () => {
  it("should be defined", () => {
    expect(revertArray).toBeDefined();
  });

  it("should return the proper data type", () => {
    expect(revertArray([], 0)).toBeInstanceOf(Array);
  });

  it("should work for basic data", () => {
    expect(
      revertArray(["lorem ipsum", "dolor sit amt", "set sit", "last one"], 3)
    ).toEqual(["last one", "set sit", "dolor sit amt"]);
    expect(revertArray(["lorem ipsum", "dolor sit amt", "set sit"], 0)).toEqual(
      []
    );
    expect(revertArray(["xcv", "sdf", "wer", "zxc", "asd", "qwe"], 6)).toEqual([
      "qwe",
      "asd",
      "zxc",
      "wer",
      "sdf",
      "xcv",
    ]);
  });
});
