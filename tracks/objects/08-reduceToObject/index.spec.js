import { reduceToObject } from './solution/index.js';

describe('objects/reduceToObject', () => {
  it('should be defined', () => {
    expect(reduceToObject).toBeDefined();
  });

  it('should return correct object', () => {
    expect(reduceToObject([
      { pId1: 1, pId2: 1 },
      { pId3: 2, pId4: 1 },
      { pId3: 1, pId1: 3 },
      { pId2: 2, pId1: 1 },
      { pId4: 1, pId2: 1 },
    ])).toEqual({
      pId1: 450,
      pId2: 480,
      pId3: 180,
      pId4: 90,
    });
  });

  it('should return empty object if empty array passed', () => {
    expect(reduceToObject([])).toEqual({});
  });
});