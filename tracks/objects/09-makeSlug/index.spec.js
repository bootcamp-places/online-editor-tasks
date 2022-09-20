import { makeSlug } from "./solution/index.js";

describe("objects/makeSlug", () => {
  it("should be defined", () => {
    expect(makeSlug).toBeDefined();
  });

  it("should work for with alphabetic ukrainian letters", () => {
    expect(makeSlug("")).toEqual("");
    expect(makeSlug("Тест")).toEqual("test");
    expect(makeSlug("Умови використання")).toEqual("umovy-vykorystannia");
  });

  it("should work for with alphabetic UA + EN letters", () => {
    expect(makeSlug("Test")).toEqual("test");
    expect(makeSlug("Історія створення HTTP")).toEqual(
      "istoriia-stvorennia-http"
    );
  });

  it("should work for with letters and digits", () => {
    expect(makeSlug("123")).toEqual("123");
    expect(makeSlug("Номер1")).toEqual("nomer1");
  });

  it("should work for all cases", () => {
    expect(
      makeSlug("Частина 1: Історія створення HTTP, ґвалт буму їх dot-комів!")
    ).toEqual(
      "chastyna-1_-istoriia-stvorennia-http_-gvalt-bumu-yikh-dot-komiv_"
    );
    expect(makeSlug("TEST:.?!111")).toEqual("test____111");
  });
});
