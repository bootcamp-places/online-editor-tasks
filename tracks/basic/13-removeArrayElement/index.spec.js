import { removeArrayElement } from './solution/index.js';

describe('basic/removeArrayElement', () => {
  it('should remove the first element of array', () => {
    const arr = ['a', 'b', 'c'];

    expect(removeArrayElement(arr, 0)).toEqual(['b', 'c']);
  });

  it('should remove the last element of array', () => {
    const arr = ['a', 'b', 'c'];

    expect(removeArrayElement(arr, 2)).toEqual(['a', 'b']);
  });

  it('should remove element from array by index', () => {
    const arr = ['a', 'b', 'c'];

    expect(removeArrayElement(arr, 1)).toEqual(['a', 'c']);
  });
});
