import { logVerify } from "./solution/index.js";

const testCases = [
  {
    title: "zero",
    logs: "",
    result: [],
  },
  {
    title: "simple",
    logs: `record 1: 17.04.23
user_name: 17.04.23 10.0.0.1 'guest'
info: user 'guest' logged in`,
    result: ["10.0.0.1"],
  },
  {
    title: "typical",
    logs: `
record 1: 17.04.23
user_name: 17.04.23 10.0.0.1 'guest'
info: user 'guest' logged in
record 2: 18.04.23
user_name: 18.04.23 127.0.0.1 'user'
info: user 'user' logged in
warning: user 'user' tried to change password
record 3: 19.04.23
user_name: 19.04.23 'fe80:0:0:0:200:f8ff:fe21:67cf' 'guest'
info: user 'gest' logged in
`,
    result: ["10.0.0.1", "'fe80:0:0:0:200:f8ff:fe21:67cf'"],
  },
];

describe("regexp/logVerify", () => {
  it("should be defined", () => {
    expect(logVerify).toBeDefined();
  });

  testCases.forEach((testCase) => {
    it(`should work for ${testCase.title} case`, () => {
      const userResult = logVerify(testCase.logs, "guest");
      const expectedResult = testCase.result;
      expect(userResult).toEqual(expectedResult);
    });
  });
});
