import { countVowels } from "./solution/index.js";

describe("basic/countVowels", () => {
  it("should be defined", () => {
    expect(countVowels).toBeDefined();

    it("should return number of vowels", () => {
      expect(countVowels("aeoui")).toEqual(5);
      expect(countVowels("AEOUI")).toEqual(5);
      expect(countVowels("AeOuI")).toEqual(5);
      expect(countVowels("qwrtypkljhgfds")).toEqual(0);
      expect(countVowels("")).toEqual(0);
      expect(countVowels("hElLo WoRlD")).toEqual(3);
    });
  });
});
