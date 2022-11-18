import { intervalSelect } from "./solution/index.js";

describe("semver/intervalSelect", () => {
  it("should be defined", () => {
    expect(intervalSelect).toBeDefined();
  });

  it("should work for empty string", () => {
    const deps = "";
    const list = {};
    const res = {
      dependencies: {},
    };
    expect(intervalSelect(deps, list)).toEqual(res);
  });

  it("should work for simple case", () => {
    const deps = "requests ==  3.0.0";
    const list = {
      requests: ["2.1.1", "3.0.0", "3.0.1"],
    };
    const res = {
      dependencies: {
        requests: "3.0.0",
      },
    };
    expect(intervalSelect(deps, list)).toEqual(res);
  });

  // it("should work for range case", () => {
  //   const deps = "django-filters >= 2.1";
  //   const list = {
  //     "django-filters": ["1.0.0", "2.1.1", "2.2.2", "3.0.0"],
  //   };
  //   const res = {
  //     dependencies: {
  //       "django-filters": "3.0.0",
  //     },
  //   };
  //   expect(intervalSelect(deps, list)).toEqual(res);
  // });

  //   it("should work for example case", () => {
  //     const deps = `django > 2, < 3
  // requests == 3.0.0
  // django-filters >= 2.1`;
  //     const list = {
  //       django: ["1.0.0", "2.0.0", "2.1.1", "2.3.7-alpha", "2.3.7", "3.0.0"],
  //       requests: ["2.1.1", "3.0.0", "3.0.1"],
  //       "django-filters": ["1.0.0", "2.1.1", "2.2.2", "3.0.0"],
  //     };
  //     const res = {
  //       dependencies: {
  //         django: "2.3.7",
  //         requests: "3.0.0",
  //         "django-filters": "2.2.2",
  //       },
  //     };
  //     expect(intervalSelect(deps, list)).toEqual(res);
  //   });
});
