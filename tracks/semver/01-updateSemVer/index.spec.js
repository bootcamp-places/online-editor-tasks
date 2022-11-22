import { updateSemVer } from "./solution/index.js";

describe("semver/updateSemVer", () => {
  it("should be defined", () => {
    expect(updateSemVer).toBeDefined();
  });

  it("should update 'patch' version", () => {
    expect(updateSemVer("1.0.1", "patch")).toEqual("1.0.2");
    expect(updateSemVer("1.0.3", "patch")).toEqual("1.0.4");
    expect(updateSemVer("1.0.99", "patch")).toEqual("1.0.100");
  });
  it("should update 'minor' version", () => {
    expect(updateSemVer("1.0.1", "minor")).toEqual("1.1.0");
    expect(updateSemVer("1.1.3", "minor")).toEqual("1.2.0");
    expect(updateSemVer("2.99.99", "minor")).toEqual("2.100.0");
  });
  it("should update 'major' version", () => {
    expect(updateSemVer("1.0.1", "major")).toEqual("2.0.0");
    expect(updateSemVer("1.0.0", "major")).toEqual("2.0.0");
    expect(updateSemVer("9.99.99", "major")).toEqual("10.0.0");
  });
});
