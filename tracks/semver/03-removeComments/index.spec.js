import { removeComments } from './solution/index.js';

describe('semver/removeComments', () => {
  it('should be defined', () => {
    expect(removeComments).toBeDefined();
  });

  it("should work with 1 line", () => {
    expect(removeComments("django == 1.8")).toEqual("django == 1.8");
  });
  it("should work with 1 commented line", () => {
    expect(removeComments("#django == 1.8")).toEqual("");
  });
  it("should work with several lines", () => {
    expect(removeComments("django == 2\ndjango == 1.8")).toEqual("django == 1.8");
  });
  it("should work with comments", () => {
    expect(
      removeComments(`django >= 2
# django >= 1.8
#django == 3.0.0
#  django >= 3.0.0`)
    ).toEqual("django >= 2");
  });
  it("should work with several versions", () => {
    expect(
      removeComments(`django >= 1
django >= 2, < 3.0
#django >= 1.8, < 2
#django-filters == 3.0.1
#django-filters == 3.0.0
django-filters ~= 2.1
django-filters ~= 2.2`)
    ).toEqual(`django >= 2, < 3.0
django-filters ~= 2.2`);
  });
});
