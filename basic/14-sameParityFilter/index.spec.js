import { sameParityFilter } from './solution';

describe('js-basic/sameParityFilter', () => {
  it('should satisfy the following conditions', () => {
    const result = sameParityFilter([5, 0, 1, -3, 10]);
    expect(result).toEqual([5, 1, -3]);

    const result2 = sameParityFilter([2, 0, 1, -3, 10, -2]);
    expect(result2).toEqual([2, 0, 10, -2]);

    const result3 = sameParityFilter([-1, 0, 1, -3, 10, -2]);
    expect(result3).toEqual([-1, 1, -3]);

    const result4 = sameParityFilter([10, -1.5, 1.3, -3, 25, -2]);
    expect(result4).toEqual([10, -2]);

    const result5 = sameParityFilter([]);
    expect(result5).toEqual([]);
  });
});
