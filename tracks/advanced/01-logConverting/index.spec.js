import { logConverting } from "./solution/index.js";

const testCases = [
  {
    string: "2020-02-01;S01;Some text here1",
    result: '{"2020-02-01":{"S01":["Some text here1"]}}',
  },
  {
    string: `2020-02-01;S01;Some text here1
2020-02-01;S01;Some text here2
2020-02-02;S01;Some text here3
2020-02-02;S02;Some text here4
2020-02-01;S02;Some text here5`,
    result: `
{
  "2020-02-01": {
    "S01": [
      "Some text here1",
      "Some text here2"
    ],
    "S02": [
      "Some text here5"
    ]
  },
  "2020-02-02": {
    "S01": [
      "Some text here3"
    ],
    "S02": [
      "Some text here4"
    ]
  }
}`,
  },
];

describe("objects/logConverting", () => {
  it("should be defined", () => {
    expect(logConverting).toBeDefined();
  });

  testCases.forEach((testCase, i) => {
    it(`should work for case #${i}`, () => {
      const userResult = JSON.parse(logConverting(testCase.string));
      const expectedResult = JSON.parse(testCase.result);
      expect(JSON.stringify(userResult)).toEqual(
        JSON.stringify(expectedResult)
      );
    });
  });
});
