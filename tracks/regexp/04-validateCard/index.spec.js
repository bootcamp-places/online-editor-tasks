import { validateCard } from "./solution/index.js";

describe("regexp/validateCard", () => {
  it("should be defined", () => {
    expect(validateCard).toBeDefined();
  });

  it("should fail for invalid cards", () => {
    expect(validateCard("1234567890")).toBeFalse();
    expect(validateCard("411111111111111111111")).toBeFalse();
  });

  it("should work for Visa", () => {
    expect(validateCard("4111111111111111")).toBeTrue();
    expect(validateCard("4012888888881881")).toBeTrue();
  });

  it("should work for MasterCard", () => {
    expect(validateCard("5555555555554444")).toBeTrue();
    expect(validateCard("5105105105105100")).toBeTrue();
  });

  it("should work for American Express", () => {
    expect(validateCard("378282246310005")).toBeTrue();
    expect(validateCard("371449635398431")).toBeTrue();
  });
});
