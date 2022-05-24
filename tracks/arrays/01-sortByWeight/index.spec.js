import { sortByWeight } from './solution/index.js';

describe('arrays/sortByWeight', () => {
  it('should sort array by sums of numbers', () => {
    expect(sortByWeight(['1', '123', '456'])).toEqual(['1', '123', '456']);
    expect(sortByWeight(['91', '45', '456'])).toEqual(['45', '91', '456']);
    expect(sortByWeight(['13', '111', 1])).toEqual([1, '111', '13']);
  });
});
