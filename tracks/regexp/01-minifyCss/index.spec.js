import { minifyCss } from "./solution/index.js";

const testCases = [
  {
    title: "simple",
    string: `/* --- */
.ui {
 display: none;
}
.ui-border {
 border: 0;
 clip: rect(0 0 0 0);
 position: absolute;
}`,
    result:
      ".ui{display:none}.ui-border{border:0;clip:rect(0 0 0 0);position:absolute}",
  },
  {
    title: "typical",
    string: `/* Layout helpers
----------------------------------*/
.ui-helper-hidden {
	display: none;
}
.ui-helper-hidden-accessible {
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
}`,
    result:
      ".ui-helper-hidden{display:none}.ui-helper-hidden-accessible{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}",
  },
  {
    title: "normal",
    string: `
/* START */
body {
  background: url("barn.jpg") no-repeat right top;
}
.text1 {
    font-size: 16px;
}
/* Landscape */
@media (min-width: 1200px) {
    .text1 {
        font-size: 20px;
    }
}
/* END */
`,
    result: 'body{background:url("barn.jpg") no-repeat right top}.text1{font-size:16px}@media (min-width:1200px){.text1{font-size:20px}}',
  },
];

describe("regexp/minifyCss", () => {
  it("should be defined", () => {
    expect(minifyCss).toBeDefined();
  });

  testCases.forEach((testCase) => {
    it(`should work for ${testCase.title} case`, () => {
      const userResult = minifyCss(testCase.string);
      const expectedResult = testCase.result;
      expect(userResult).toEqual(expectedResult);
    });
  });
});
