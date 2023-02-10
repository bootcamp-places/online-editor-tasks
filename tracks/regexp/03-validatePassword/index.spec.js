import { validatePassword } from './solution/index.js';

describe("regexp/validatePassword", () => {
  it("should be defined", () => {
    expect(validatePassword).toBeDefined();
  });

  it(`should simply work`, () => {
    expect(validatePassword("test")).toBeFalse();
    expect(validatePassword("password")).toBeFalse();
    expect(validatePassword("P@ssw0rd")).toBeFalse();
    expect(validatePassword("P@ssw0rD")).toBeTrue();
    expect(validatePassword("h@ck1ME!")).toBeTrue();
  });
});
