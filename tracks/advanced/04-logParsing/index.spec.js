import { logParsing } from "./solution/index.js";

const testCases = [
  {
    title: "one-line",
    string: `{:mulog/event-name :async.log/logger,
 :mulog/timestamp  1664789750262,
 :mulog/trace-id   #mulog/flake "4lIfs0B6IRjDMHo6g2Tb3rf4lz1kQNXl"
 :mulog/outcome    :ok
 :server-id        "S01"
 :message          "Some text here1"}`,
    result: "2022-10-03;S01;Some text here1",
  },
  {
    title: "example",
    string: `{:mulog/event-name :async.log/logger,
 :mulog/timestamp  1664789750262,
 :mulog/trace-id   #mulog/flake "4lIfs0B6IRjDMHo6g2Tb3rf4lz1kQNXl"
 :mulog/outcome    :ok
 :server-id        "S01"
 :message          "Starting server"}
{:mulog/event-name :async.log/logger,
 :server-id        "S02"
 :mulog/outcome    :error
 :mulog/trace-id   #mulog/flake "aRIss10BeDmj069o01TbIr4wLwiK4zxQ"
 :mulog/timestamp  1664789800446,
 :message          "Server pending error"}`,
    result: `2022-10-03;S01;Starting server
2022-10-03;S02;Server pending error`,
  },
  {
    title: "example w/ incomplete records",
    string: `{:mulog/event-name :async.log/logger,
 :mulog/timestamp  1664789750262,
 :mulog/trace-id   #mulog/flake "4lIfs0B6IRjDMHo6g2Tb3rf4lz1kQNXl"
 :mulog/outcome    :ok
 :server-id        "S01"
 :message          "Starting server"}
{:mulog/event-name :async.log/logger,
 :server-id        "S02"
 :mulog/timestamp  1664789800446,
 :message          "Server pending error"}
{:mulog/event-name :async.log/logger,
 :mulog/outcome    :error
 :mulog/trace-id   #mulog/flake "aRIss10BeDmj069o01TbIr4wLwiK4zxQ"
 :mulog/timestamp  1664789800446,
 :server-id        "S02"
 :message          "Server pending error"}`,
    result: `2022-10-03;S01;Starting server
2022-10-03;S02;Server pending error`,
  },
];

describe("basic/logParsing", () => {
  it("should be defined", () => {
    expect(logParsing).toBeDefined();
  });

  testCases.forEach((testCase) => {
    it(`should work for ${testCase.title} case`, () => {
      const userResult = logParsing(testCase.string);
      const expectedResult = testCase.result;
      expect(userResult).toEqual(expectedResult);
    });
  });
});
