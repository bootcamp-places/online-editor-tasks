import { isFormFilledIn } from "./solution/index.js";

describe("arrays/isFormFilledIn", () => {
  it("should be defined", () => {
    expect(isFormFilledIn).toBeDefined();
  });

  it("should return true if required fields are filled in", () => {
    expect(isFormFilledIn({}, [])).toBe(true);
    expect(isFormFilledIn({ name: "Foo", email: "bar@bar" }, [])).toBe(true);
    expect(isFormFilledIn({ name: "Foo", email: "bar@bar" }, ["email"])).toBe(
      true
    );
    expect(
      isFormFilledIn({ name: "", email: "bar@bar", password: "pass" }, [
        "email",
      ])
    ).toBe(true);

    expect(
      isFormFilledIn({ name: "", email: "", password: "pass" }, ["password"])
    ).toBe(true);

    expect(
      isFormFilledIn({ name: "", email: "bar@bar", password: "pass" }, [
        "email",
        "password",
      ])
    ).toBe(true);
  });

  it("should return false if required fields are not filled in", () => {
    expect(isFormFilledIn({}, ["email"])).toBe(false);
    expect(isFormFilledIn({ name: "Foo", email: "" }, ["email"])).toBe(false);
    expect(
      isFormFilledIn({ name: "", email: "bar@bar", password: "" }, ["password"])
    ).toBe(false);

    expect(
      isFormFilledIn({ name: "", email: "", password: "pass" }, [
        "email",
        "password",
      ])
    ).toBe(false);

    expect(
      isFormFilledIn({ name: "name", email: "", password: "" }, [
        "email",
        "password",
      ])
    ).toBe(false);
  });
});
