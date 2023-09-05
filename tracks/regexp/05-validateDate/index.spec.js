import { validateDate } from "./solution/index.js";

describe("regexp/validateDate", () => {
  it("should be defined", () => {
    expect(validateDate).toBeDefined();
  });

  it("should work for valid dates", () => {
    expect(validateDate("01.01.1970")).toBeTrue();
    expect(validateDate("20.03.20")).toBeTrue();
    expect(validateDate("01/01/1991")).toBeTrue();
    expect(validateDate("12/31/1991")).toBeTrue();
    expect(validateDate("2020-06-03")).toBeTrue();
  });

  it("should work for valid input format", () => {
    expect(validateDate("31.02.1970")).toBeTrue();
    expect(validateDate("04/31/1999")).toBeTrue();
  });

  it("should fail for invalid input format", () => {
    expect(validateDate("99.00.1999")).toBeFalse();
    expect(validateDate("31-12-1970")).toBeFalse();
    expect(validateDate("mm/dd/yyyy")).toBeFalse();
  });
});
