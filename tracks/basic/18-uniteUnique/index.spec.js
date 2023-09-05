import { uniteUnique } from './solution';

describe('basic/uniteUnique', () => {
  it('should be defined', () => {
    expect(uniteUnique([1, 2, 3], [4, 1, 5], [6, 7, 8, 5])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(uniteUnique([1], [2], [3, 2, 2], [4, 1, 1, 2])).toEqual([1, 2, 3, 4]);
  });
});
