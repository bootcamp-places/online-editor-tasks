import { reduceToObject } from './solution/index.js';

describe('objects/reduceToObject', () => {
  const orders = [
    { pId1: 1, pId2: 1 },
    { pId3: 2, pId4: 1 },
    { pId3: 1, pId1: 3 },
    { pId2: 2, pId1: 1 },
    { pId4: 1, pId2: 1 },
  ];
  const products = {
    pId1: { name: "Big Mac", price: 90 },
    pId2: { name: "Big Tasty", price: 120 },
    pId3: { name: "Mc Chicken", price: 60 },
    pId4: { name: "Fille O Fish", price: 45 },
  };

  it('should be defined', () => {
    expect(reduceToObject).toBeDefined();
  });

  it('should return correct object', () => {
    expect(reduceToObject(orders, products)).toEqual({
      pId1: 450,
      pId2: 480,
      pId3: 180,
      pId4: 90,
    });
  });

  it('should return empty object if no arguments were passed', () => {
    expect(reduceToObject()).toEqual({});
  });
});