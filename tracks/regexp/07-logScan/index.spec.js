import { logScan } from "./solution/index.js";

const testCases = [
  {
    title: "zero",
    logs: "",
    result: 0,
  },
  {
    title: "simple",
    logs: `record 1: 17.04.23
user_name: 17.04.23 10.0.0.1 'guest'
info: user 'guest' logged in`,
    result: 1,
  },
  {
    title: "typical",
    logs: `
record 1: 17.04.23
user_name: 17.04.23 10.0.0.1 'guest'
info: user 'guest' logged in
record 2: 18.04.23
user_name: 18.04.23 127.0.0.1 'guest'
info: user 'guest' logged in
warning: user 'guest' tried to change password
record 3: 19.04.23
user_name: 19.04.23 196.20.0.1 'user'
info: user 'user' logged in
`,
    result: 2,
  },
];

describe("regexp/logScan", () => {
  it("should be defined", () => {
    expect(logScan).toBeDefined();
  });

  testCases.forEach((testCase) => {
    it(`should work for ${testCase.title} case`, () => {
      const userResult = logScan(testCase.logs, "guest");
      const expectedResult = testCase.result;
      expect(userResult).toEqual(expectedResult);
    });
  });
});
