import { nameAbbreviation } from "./solution/index.js";

describe("basic/nameAbbreviation", () => {
  it("should be defined", () => {
    expect(nameAbbreviation).toBeDefined();
  });

  it("should work for latin words", () => {
    expect(nameAbbreviation("John", "Doe")).toEqual("JD");
    expect(nameAbbreviation("pranavi", "kumar")).toEqual("PK");
  });
  it("should work without lastName", () => {
    expect(nameAbbreviation("anonymous", "")).toEqual("A.");
  });
  it("should work with non-english words", () => {
    // some polish name
    expect(nameAbbreviation("Łukasz", "Żyłowski")).toEqual("ŁŻ");
    // "anita patel" in sanskrit
    expect(nameAbbreviation("अनिता", "पटेल")).toEqual("अप");
    // "Jiří moucha" in cyrillic
    expect(nameAbbreviation("Їржі", "ґедзь")).toEqual("ЇҐ");
    // "Іван Козак" in katakana
    expect(nameAbbreviation("イヴァン", "コザック")).toEqual("イコ");
  });
});
