import { sortArrayOfObjects } from "./solution/index.js";

describe("arrays/sortArrayOfObjects", () => {
  it("should be defined", () => {
    expect(sortArrayOfObjects).toBeDefined();
  });

  it("should work for empty array", () => {
    expect(sortArrayOfObjects([], "asc")).toEqual([]);
  });

  it("should work for an example", () => {
    expect(
      sortArrayOfObjects(
        [
          {
            title: "Notebook Acer 14",
            color: "black",
            brand: "Acer",
            price: "1500",
            rating: 0,
          },
          {
            title: "Notebook HP Pro",
            color: "grey",
            brand: "HP",
            price: "1700",
            rating: 3,
          },
          {
            title: "MacBook Pro",
            color: "silver",
            brand: "Apple",
            price: "10000",
            rating: 1,
          },
        ],
        "asc"
      )
    ).toEqual([
      {
        title: "Notebook Acer 14",
        color: "black",
        brand: "Acer",
        price: "1500",
        rating: 0,
      },
      {
        title: "MacBook Pro",
        color: "silver",
        brand: "Apple",
        price: "10000",
        rating: 1,
      },
      {
        title: "Notebook HP Pro",
        color: "grey",
        brand: "HP",
        price: "1700",
        rating: 3,
      },
    ]);
  });

  it("should work for desc", () => {
    expect(
      sortArrayOfObjects(
        [
          {
            title: "Notebook Acer 14",
            color: "black",
            brand: "Acer",
            price: "1500",
            rating: 0,
          },
          {
            title: "Notebook HP Pro",
            color: "grey",
            brand: "HP",
            price: "1700",
            rating: 3,
          },
          {
            title: "MacBook Pro",
            color: "silver",
            brand: "Apple",
            price: "10000",
            rating: 1,
          },
        ],
        "desc"
      )
    ).toEqual([
      {
        title: "Notebook HP Pro",
        color: "grey",
        brand: "HP",
        price: "1700",
        rating: 3,
      },
      {
        title: "MacBook Pro",
        color: "silver",
        brand: "Apple",
        price: "10000",
        rating: 1,
      },
      {
        title: "Notebook Acer 14",
        color: "black",
        brand: "Acer",
        price: "1500",
        rating: 0,
      },
    ]);
  });
});
