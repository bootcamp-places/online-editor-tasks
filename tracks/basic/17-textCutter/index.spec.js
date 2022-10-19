import { textCutter } from "./solution/index.js";

describe("basic/textCutter", () => {
  it("should be defined", () => {
    expect(textCutter).toBeDefined();
  });

  it("should for example tests", () => {
    expect(textCutter("Lorem ipsum.", 12)).toBe("Lorem ipsum.");
    expect(textCutter("Lorem ipsum. Dolor sit, amt.", 21)).toBe(
      "Lorem ipsum. Dolor..."
    );
  });

  it("should return string cut", () => {
    expect(textCutter("Apple, orange, and banana.", 26)).toBe(
      "Apple, orange, and banana."
    );
    expect(textCutter("Apple, orange, and banana.", 25)).toBe(
      "Apple, orange, and..."
    );
    expect(textCutter("Apple, orange, and banana.", 18)).toBe(
      "Apple, orange..."
    );
  });
});
