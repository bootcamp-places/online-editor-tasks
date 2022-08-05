import { getDaysDifference } from "./solution/index.js";

describe("dates/getDaysDifference", () => {
  beforeEach(() => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date("2022-01-01T12:00:00.000Z"));
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it("should be defined", () => {
    expect(getDaysDifference).toBeDefined();
  });

  it("should return 0 if the passed date is no older than 24 hours", () => {
    expect(getDaysDifference("2022-01-01T12:00:00.000Z")).toBe(0);
    expect(getDaysDifference("2022-01-01T11:59:00.000Z")).toBe(0);
    expect(getDaysDifference("2022-01-01T00:00:00.000Z")).toBe(0);
    expect(getDaysDifference("2021-12-31T12:23:59.000Z")).toBe(0);
    expect(getDaysDifference("2021-12-31T12:12:01.000Z")).toBe(0);
  });

  it("should return 1 if the passed date is between 24 and 48 hours from now", () => {
    expect(getDaysDifference("2021-12-31T12:00:00.000Z")).toBe(1);
    expect(getDaysDifference("2021-12-31T11:59:00.000Z")).toBe(1);
    expect(getDaysDifference("2021-12-31T00:00:00.000Z")).toBe(1);
    expect(getDaysDifference("2021-12-30T16:00:00.000Z")).toBe(1);
  });

  it("should return 365 if the passed date was a year ago", () => {
    expect(getDaysDifference("2021-01-01T12:00:00.000Z")).toBe(365);
    expect(getDaysDifference("2021-01-01T11:59:00.000Z")).toBe(365);
    expect(getDaysDifference("2021-01-01T00:00:00.000Z")).toBe(365);
    expect(getDaysDifference("2020-12-31T12:23:59.000Z")).toBe(365);
    expect(getDaysDifference("2020-12-31T12:12:01.000Z")).toBe(365);
  });
});
