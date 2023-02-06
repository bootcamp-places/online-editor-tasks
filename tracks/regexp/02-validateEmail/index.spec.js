import { validateEmail } from "./solution/index.js";

describe("regexp/validateEmail", () => {
  it("should be defined", () => {
    expect(validateEmail).toBeDefined();
  });

  it(`should work for simple addresses`, () => {
    expect(validateEmail("me@acme.com")).toBeTrue();
    expect(validateEmail("hacker.team@evil.co")).toBeTrue();
    expect(validateEmail("me acme.com")).toBeFalse();
    expect(validateEmail("hacker.evil.co")).toBeFalse();
  });

  it(`should work for typical addresses`, () => {
    expect(validateEmail("me@local.example.com")).toBeTrue();
    expect(
      validateEmail("disposable.style.email.with+symbol@example.com")
    ).toBeTrue();
    expect(validateEmail("example@s.example")).toBeTrue();
    expect(validateEmail("mailhost!username@example.org")).toBeTrue();
    expect(validateEmail("user%example.com@example.org")).toBeTrue();
    expect(validateEmail("example@example.c")).toBeFalse();
    expect(validateEmail("acme@com")).toBeFalse();
    expect(validateEmail("A@b@c@example.com")).toBeFalse();
    expect(
      validateEmail(
        "1234567890123456789012345678901234567890123456789012345678901234+x@example.com"
      )
    ).toBeFalse();
  });

  it(`should work for localized addresses`, () => {
    expect(validateEmail("Pelé@example.com")).toBeTrue();
    expect(validateEmail("δοκιμή@παράδειγμα.δοκιμή")).toBeTrue();
    expect(validateEmail("我買@屋企.香港")).toBeTrue();
    expect(validateEmail("二ノ宮@黒川.日本")).toBeTrue();
    expect(validateEmail("олександр@мояпошта.ua")).toBeTrue();
  });
});
