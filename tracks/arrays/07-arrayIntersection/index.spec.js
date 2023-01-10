import { arrayIntersection } from './solution/index.js';

describe('arrays/arrayIntersection', () => {
  it('should be defined', () => {
    expect(arrayIntersection).toBeDefined();
  });

  it("should work with empty arguments", () => {
    expect(arrayIntersection()).toEqual(0);
    expect(arrayIntersection([], ["bmw"])).toEqual(0);
    expect(arrayIntersection(["bmw"], [])).toEqual(0);
  });

  it("should find intersection between arrays", () => {
    expect(arrayIntersection(["bmw"], ["volvo"])).toEqual(0);
    expect(arrayIntersection(["acer", "lg", "samsung"], ["samsung"])).toEqual(
      1
    );
    expect(
      arrayIntersection(
        ["Notebook Acer 14", "Notebook HP Pro"],
        ["Notebook Acer 14", "Display LG 21"]
      )
    ).toEqual(1);
  });

  it("should not change input arrays", () => {
    const cars = ["volvo", "bmw"];
    const brands = ["acer", "lg", "samsung"];
    arrayIntersection(cars, brands);

    expect(cars).toEqual(["volvo", "bmw"]);
    expect(brands).toEqual(["acer", "lg", "samsung"]);
  });
});
