import { manyToOne } from './solution/index.js';

describe('arrays/manyToOne', () => {
  it('should be defined', () => {
    expect(manyToOne).toBeDefined();
  });

  it('should make one array', () => {
    expect(manyToOne([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});