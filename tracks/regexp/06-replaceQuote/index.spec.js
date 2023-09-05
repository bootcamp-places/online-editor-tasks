import { replaceQuote } from "./solution/index.js";

describe("regexp/replaceQuote", () => {
  it("should be defined", () => {
    expect(replaceQuote).toBeDefined();
  });

  it("should work for positive cases", () => {
    expect(replaceQuote("'string should be converted'")).toEqual(
      '"string should be converted"'
    );
    expect(replaceQuote("Some 'definitions' are possible.")).toEqual(
      'Some "definitions" are possible.'
    );
    expect(replaceQuote("Just one more 'example'.")).toEqual(
      'Just one more "example".'
    );
  });

  it("should work for all cases", () => {
    expect(replaceQuote("I'm the cook, it's my job.")).toEqual(
      "I'm the cook, it's my job."
    );
    expect(replaceQuote("It's Arnold's ball. Don't touch it!")).toEqual(
      "It's Arnold's ball. Don't touch it!"
    );
    expect(replaceQuote("I don't see the 'example' here.")).toEqual(
      'I don\'t see the "example" here.'
    );
  });
});
