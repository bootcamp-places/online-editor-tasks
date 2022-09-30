import { filterArrayOfObjects } from "./solution/index.js";

describe("arrays/filterArrayOfObjects", () => {
  it("should be defined", () => {
    expect(filterArrayOfObjects).toBeDefined();
  });

  it("should work for empty filters", () => {
    expect(
      filterArrayOfObjects(
        [
          {
            title: "Notebook Acer 14",
            color: "black",
            brand: "Acer",
            price: "1500",
          },
          {
            title: "Notebook HP Pro",
            color: "grey",
            brand: "HP",
            price: "1700",
          },
        ],
        {}
      )
    ).toEqual([
      {
        title: "Notebook Acer 14",
        color: "black",
        brand: "Acer",
        price: "1500",
      },
      {
        title: "Notebook HP Pro",
        color: "grey",
        brand: "HP",
        price: "1700",
      },
    ]);
  });

  it("should work for an example", () => {
    expect(
      filterArrayOfObjects(
        [
          {
            title: "Notebook Acer 14",
            color: "black",
            brand: "Acer",
            price: "1500",
          },
          {
            title: "Notebook HP Pro",
            color: "grey",
            brand: "HP",
            price: "1700",
          },
        ],
        { color: "black", brand: "Acer" }
      )
    ).toEqual([
      {
        title: "Notebook Acer 14",
        color: "black",
        brand: "Acer",
        price: "1500",
      },
    ]);
  });

  it("should work for strict filters", () => {
    expect(
      filterArrayOfObjects(
        [
          {
            title: "Notebook Acer 14",
            color: "black",
            brand: "Acer",
            price: "1500",
          },
          {
            title: "Notebook HP Pro",
            color: "grey",
            brand: "HP",
            price: "1700",
          },
        ],
        { color: "red" }
      )
    ).toEqual([]);
  });
});
