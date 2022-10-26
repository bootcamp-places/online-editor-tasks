import { countVowels } from "./solution/index.js";

describe("basic/countVowels", () => {
  it("should return number of vowels", () => {
    expect(countVowels(["a", "e", "i", "o", "u"], "aeoui")).toEqual(5);
    expect(countVowels(["a", "e", "i", "o", "u"], "AEOUI")).toEqual(5);
    expect(countVowels(["a", "e", "i", "o", "u"], "AeOuI")).toEqual(5);
    expect(countVowels(["a", "e", "i", "o", "u"], "qwrtypkljhgfds")).toEqual(0);
    expect(countVowels(["a", "e", "i", "o", "u"], "")).toEqual(0);
    expect(countVowels(["a", "e", "i", "o", "u"], "hElLo WoRlD")).toEqual(3);
    expect(
      countVowels(
        ["а", "е", "є", "и", "і", "ї", "о", "у", "ю", "я"],
        "джаваскрипт"
      )
    ).toEqual(3);
    expect(
      countVowels(
        ["а", "е", "є", "и", "і", "ї", "о", "у", "ю", "я"],
        "ПрИвІт СвІт"
      )
    ).toEqual(3);
    expect(
      countVowels(
        ["а", "е", "є", "и", "і", "ї", "о", "у", "ю", "я"],
        "ДЕЗОКСИРИБОНУКЛЕЇНОВА КИСЛОТА"
      )
    ).toEqual(13);
  });
});
