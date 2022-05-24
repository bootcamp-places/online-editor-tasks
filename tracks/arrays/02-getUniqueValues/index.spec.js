import { getUniqueValues } from './solution/index.js';

describe('arrays/uniqueValues', () => {
  it('Should return only unique values', () => {
    expect(getUniqueValues(['a', 'b', 'c', 'b', 'd', 'a', 'd']))
    .toEqual(['a', 'b', 'c', 'd']);

    expect(getUniqueValues([1, 2, 4, 4, 1, 3, 2, 9]))
    .toEqual([1, 2, 4, 3, 9]);
  });
});
