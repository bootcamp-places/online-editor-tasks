import {countCharactersInString} from './solution/index.js';

describe('objects/countCharactersInString', () => {
  it('should be defined', () => {
    expect(countCharactersInString).toBeDefined();
  });

  it('should return empty object if string is empty', () => {
    expect(countCharactersInString('')).toEqual({});
  });

  it('should return object with counting of characters if passed string as argument spaces should be ignored', () => {
    expect(countCharactersInString('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    expect(countCharactersInString('Hello World')).toEqual({ h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 });
  });

  it('should get as a result of tree a characters and two b characters result should be in lower case', () => {
    expect(countCharactersInString('Aaabb')).toEqual({ a: 3, b: 2, });
  });
});
