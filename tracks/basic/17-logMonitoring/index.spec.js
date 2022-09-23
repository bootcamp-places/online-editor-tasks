import { logMonitoring } from "./solution/index.js";

const testCases = [
  {
    locale: "CN",
    string: `01.23.22 12:01:03 GMT+0400;严重;Out of memory
01.22.22 01:00:43 GMT+0400;信息;Init inbound network
01.22.22 09:51:31 GMT+0400;信息;Starting server`,
    date: "2022-01-22 - 2022-01-22",
    result: false,
  },
  {
    locale: "GB",
    string: `Thu Apr 14 2022 01:15:02 GMT+0000 (GMT);CRIT;Halt server
Thu Apr 14 2022 01:15:01 GMT+0000 (GMT);CRIT;Out of memory
Thu Apr 14 2022 01:12:40 GMT+0000 (GMT);WARN;Server pending error`,
    date: "2022-04-14...2022-04-14",
    result: true,
  },
  {
    locale: "UA",
    string: `2022-02-22T07:07:02.019;КРИТ;Halt server
2022-02-22T07:07:01.323;КРИТ;Out of memory
2022-02-22T07:06:05.123;ІНФО;Server started`,
    date: "2022-02-22;2022-02-22",
    result: true,
  },
  {
    locale: "BG",
    string: `2022-02-23T07:07:02.019;КРИТ;Halt server
2022-02-22T07:07:01.323;ІНФО;Inbound connection
2022-02-21T07:06:05.123;КРИТ;Server is down`,
    date: "2022-02-22;2022-02-22",
    result: false,
  },
];

describe("basic/logMonitoring", () => {
  it("should be defined", () => {
    expect(logMonitoring).toBeDefined();
  });

  testCases.forEach(testCase => {
    it(`should work with ${testCase.locale} locale`, () => {
      expect(logMonitoring(testCase.string, testCase.date)).toEqual(
        testCase.result
      );
    });
  });
});
