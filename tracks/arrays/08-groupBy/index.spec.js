import { groupBy } from "./solution/index.js";

const mockArray = [
  { name: "George", id: 1 },
  { name: "Yurii", id: 2 },
  { name: "George", id: 3 },
  { name: "George", id: 4 },
  { name: "Karen", id: 5 },
  { name: "Karen", id: 6 },
];

describe("arrays/groupBy", () => {
  it("should be defined", () => {
    expect(groupBy).toBeDefined();
  });

  it("when empty array provided should return empty Map", () => {
    expect(groupBy([], "id")).toEqual(new Map());
  });

  it("when objects array provided should return grouped by names", () => {
    expect(groupBy(mockArray, "name")).toEqual(
      new Map([
        [
          "George",
          [
            { name: "George", id: 1 },
            { name: "George", id: 3 },
            { name: "George", id: 4 },
          ],
        ],
        ["Yurii", [{ name: "Yurii", id: 2 }]],
        [
          "Karen",
          [
            { name: "Karen", id: 5 },
            { name: "Karen", id: 6 },
          ],
        ],
      ])
    );
  });

  it("when objects array provided should be able to get grouped array", () => {
    expect(groupBy(mockArray, "name").get("Karen")).toEqual([
      { name: "Karen", id: 5 },
      { name: "Karen", id: 6 },
    ]);
  });
});
