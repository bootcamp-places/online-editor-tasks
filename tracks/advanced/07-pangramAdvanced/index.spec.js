import { pangramAdvanced } from "./solution/index.js";

describe("advanced/pangramAdvanced", () => {
  it("should be defined", () => {
    expect(pangramAdvanced).toBeDefined();
  });

  const testCases = [
    {
      title: "example",
      text: "Хвацький юшковар Філіп щодня на ґанку готує вечерю.",
      result: {
        length: 43,
        letters: ["б", "ж", "з", "ї", "м", "с"],
        symbols: ["!", "-", "ʼ"],
      },
    },
    {
      title: "normal",
      text: "Хвацький юшковар Філіп щодня на ґанку готує сімʼї вечерю з жаб.",
      result: {
        length: 52,
        letters: [],
        symbols: ["!", "-"],
      },
    },
    {
      title: "empty#1",
      text: "",
      result: {
        length: 0,
        letters: [
          "а",
          "б",
          "в",
          "г",
          "ґ",
          "д",
          "е",
          "є",
          "ж",
          "з",
          "и",
          "і",
          "ї",
          "й",
          "к",
          "л",
          "м",
          "н",
          "о",
          "п",
          "р",
          "с",
          "т",
          "у",
          "ф",
          "х",
          "ц",
          "ч",
          "ш",
          "щ",
          "ь",
          "ю",
          "я",
        ],
        symbols: [".", "!", "-", "ʼ", " "],
      },
    },
    {
      title: "empty#2",
      text: "   ",
      result: {
        length: 0,
        letters: [
          "а",
          "б",
          "в",
          "г",
          "ґ",
          "д",
          "е",
          "є",
          "ж",
          "з",
          "и",
          "і",
          "ї",
          "й",
          "к",
          "л",
          "м",
          "н",
          "о",
          "п",
          "р",
          "с",
          "т",
          "у",
          "ф",
          "х",
          "ц",
          "ч",
          "ш",
          "щ",
          "ь",
          "ю",
          "я",
        ],
        symbols: [".", "!", "-", "ʼ"],
      },
    },
  ];

  testCases.forEach((testCase) => {
    it(`should work for ${testCase.title} case`, () => {
      const userResult = pangramAdvanced(testCase.text);
      const expectedResult = testCase.result;
      expect(userResult).toEqual(expectedResult);
    });
  });
});
