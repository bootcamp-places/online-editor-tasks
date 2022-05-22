import { removeByIndex } from './solution/index.js';

describe('basic/removeByIndex', () => {
  it('should remove the first element of array', () => {
    const arr = ['a', 'b', 'c'];

    expect(removeByIndex(arr, 0)).toEqual(['b', 'c']);
  });

  it('should remove the last element of array', () => {
    const arr = ['a', 'b', 'c'];

    expect(removeByIndex(arr, 2)).toEqual(['a', 'b']);
  });

  it('should remove element from array by index', () => {
    const arr = ['a', 'b', 'c'];

    expect(removeByIndex(arr, 1)).toEqual(['a', 'c']);
  });

  it('should return new array', () => {
    const arr = ['a', 'b', 'c'];

    expect(removeByIndex(arr, 1)).not.toBe(arr);
  });
});
