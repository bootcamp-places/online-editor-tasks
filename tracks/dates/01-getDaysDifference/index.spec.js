import { getDaysDifference } from "./solution/index.js";

describe("dates/getDaysDifference", () => {
  beforeEach(() => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date("2022-01-01 00:00:00"));
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it("should be defined", () => {
    expect(getDaysDifference).toBeDefined();
  });

  it("should return number of days difference between last workout and today's date", () => {
    expect(getDaysDifference([])).toBe(0);
    expect(
      getDaysDifference([new Date("2022-01-01"), new Date("1970-01-01")])
    ).toBe(0);
    expect(
      getDaysDifference([new Date("2010-01-01"), new Date("2021-01-01")])
    ).toBe(364);
    expect(getDaysDifference([new Date("2021-12-31")])).toBe(0);
    expect(
      getDaysDifference([new Date("2021-11-30"), new Date("2021-12-01")])
    ).toBe(30);
  });
});
