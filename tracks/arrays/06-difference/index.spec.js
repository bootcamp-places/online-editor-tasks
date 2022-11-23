import { difference } from './solution/index.js';

describe('arrays/difference', () => {
  it('should be defined', () => {
    expect(difference).toBeDefined();
  });

  it("should work with empty arguments", () => {
    expect(difference()).toEqual([]);
  });

  it("should find difference between arrays", () => {
    expect(difference([1, 200, 'some string'], [1, 200])).toEqual(['some string']);
    expect(difference(['one', 200, 'some string'], [1, 200, 'some string'])).toEqual(['one']);
    expect(difference([1, 200, 'some string'], [])).toEqual([1, 200, 'some string']);
  });

  it("should return empty array, if first argument is not array", () => {
    expect(difference({}, [1, 200])).toEqual([]);
    expect(difference('', [1, 2, 3])).toEqual([]);
    expect(difference(null, ['one', 'two'])).toEqual([]);
  });

  it("should return copy of first array, if second argument is not array", () => {
    const targetArray = ['one', 'two'];

    expect(difference(targetArray)).toEqual(targetArray);
    expect(difference(targetArray, '')).toEqual(targetArray);
    expect(difference(targetArray, {})).toEqual(targetArray);

    expect(difference(targetArray) === targetArray).toBeFalse();
  });

  it("should not change input params (arrays)", () => {
    const targetArray = ['one', 'two'];
    const comparedArray = ['one', 'two', 3];
    difference(targetArray, comparedArray);

    expect(targetArray).toEqual(['one', 'two']);
    expect(comparedArray).toEqual(['one', 'two', 3]);
  });
});
