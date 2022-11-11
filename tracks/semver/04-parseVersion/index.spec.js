import { parseVersion } from "./solution/index.js";

describe("semver/parseVersion", () => {
  it("should be defined", () => {
    expect(parseVersion).toBeDefined();
  });

  it("should work with empty string", () => {
    expect(parseVersion("")).toEqual({
      dependencies: {},
    });
  });
  it("should work with one line", () => {
    expect(parseVersion("django == 2.1")).toEqual({
      dependencies: { django: "2.1.0" },
    });
  });
  it("should work with full example", () => {
    expect(
      parseVersion(`django == 2.1
django == 2.1.99
django-filters == 3
django-filters == 2.0
django-filters == 2.1`)
    ).toEqual({
      dependencies: { django: "2.1.99", "django-filters": "3.0.0" },
    });
  });
  it("should work with complex case", () => {
    expect(
      parseVersion(`django == 3
django == 2.1.0
django == 2.1.0-alpha
django == 2.0.0+10102020
django == 2.1.0-beta`)
    ).toEqual({
      dependencies: { django: "3.0.0" },
    });
  });
});
