import { arrayContains } from './solution/index.js';

describe('arrays/arrayContains', () => {
  it('should be defined', () => {
    expect(arrayContains).toBeDefined();
  });

  it("should return the proper data type", () => {
    expect(arrayContains()).toBeInstanceOf(Array);
  });

  it("should work for example case", () => {
    expect(
      arrayContains(
        ["me@acme.com", "you@acme.com", "hacker@evil.co"],
        "acme.com"
      )
    ).toEqual(["me@acme.com", "you@acme.com"]);
  });

  it("should work for extra cases", () => {
    expect(
      arrayContains(
        [
          "mäm@räksmörgås.josefsson.org",
          "your@納豆.w3.mag.keio.ac.jp",
          "führer@faß.de",
        ],
        "faß.de"
      )
    ).toEqual(["führer@faß.de"]);
  });
});
