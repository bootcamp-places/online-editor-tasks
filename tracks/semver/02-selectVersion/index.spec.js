import { selectVersion } from "./solution/index.js";

const versionsList = [
  "1.0.0",
  "1.0.0-alpha",
  "1.0.0+123",
  "2.2.0",
  "2.2.1-alpha",
  "2.2.1",
  "2.3.1",
  "2.3.5",
  "2.3.7",
  "3.0.0",
  "3.0.0-alpha",
  "3.0.0-beta",
];

describe("semver/selectVersion", () => {
  it("should be defined", () => {
    expect(selectVersion).toBeDefined();
  });

  it("should work with full version: '2.2.1'", () => {
    expect(selectVersion("2.2.1", versionsList)).toBe("2.2.1");
  });
  it("should work with minor version: '2.2'", () => {
    expect(selectVersion("2.2", versionsList)).toBe("2.2.1");
  });
  it("should work with major only version: '2'", () => {
    expect(selectVersion("2", versionsList)).toBe("2.3.7");
  });
  it("should work with postfix: '1'", () => {
    expect(selectVersion("1", versionsList)).toBe("1.0.0");
  });
});
