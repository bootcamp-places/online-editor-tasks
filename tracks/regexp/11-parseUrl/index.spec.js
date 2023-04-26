import { parseUrl } from "./solution/index.js";

describe("regexp/parseUrl", () => {
  it("should be defined", () => {
    expect(parseUrl).toBeDefined();
  });

  it("should return an object", () => {
    expect(typeof parseUrl()).toBe("object");
  });

  it("should for domain only", () => {
    expect(parseUrl("http://example.com")).toEqual({
      protocol: "http",
      host: "example.com",
      port: undefined,
      path: undefined,
    });
    expect(parseUrl("https://my.domain.io")).toEqual({
      protocol: "https",
      host: "my.domain.io",
      port: undefined,
      path: undefined,
    });
  });

  it("should for domain and port", () => {
    expect(parseUrl("http://example.com:8080")).toEqual({
      protocol: "http",
      host: "example.com",
      port: "8080",
      path: undefined,
    });
    expect(parseUrl("https://my.domain.io:8080")).toEqual({
      protocol: "https",
      host: "my.domain.io",
      port: "8080",
      path: undefined,
    });
  });

  it("should for domain, port and path", () => {
    expect(parseUrl("http://example.com:8080/some/path")).toEqual({
      protocol: "http",
      host: "example.com",
      port: "8080",
      path: "/some/path",
    });
    expect(parseUrl("https://my.domain.io:8080/some/path")).toEqual({
      protocol: "https",
      host: "my.domain.io",
      port: "8080",
      path: "/some/path",
    });
  });

  it("should for domain, port, path and query", () => {
    expect(parseUrl("http://example.com:8080/some/path?query=string")).toEqual({
      protocol: "http",
      host: "example.com",
      port: "8080",
      path: "/some/path?query=string",
    });
    expect(
      parseUrl("https://my.domain.io:8080/some/path?query=string")
    ).toEqual({
      protocol: "https",
      host: "my.domain.io",
      port: "8080",
      path: "/some/path?query=string",
    });
    expect(
      parseUrl("https://shop.ua/item/path?query=string&another=one")
    ).toEqual({
      protocol: "https",
      host: "shop.ua",
      port: undefined,
      path: "/item/path?query=string&another=one",
    });
  });

  it("should for domain, port, path, query and hash", () => {
    expect(
      parseUrl("http://example.com:8080/some/path?query=string#hash")
    ).toEqual({
      protocol: "http",
      host: "example.com",
      port: "8080",
      path: "/some/path?query=string#hash",
    });
    expect(
      parseUrl("https://my.domain.io:8080/some/path?query=string#hash")
    ).toEqual({
      protocol: "https",
      host: "my.domain.io",
      port: "8080",
      path: "/some/path?query=string#hash",
    });
  });
});
