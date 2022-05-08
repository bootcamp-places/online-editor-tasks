import { stringToArray } from './solution/index.js';

describe('stringToArray', () => {
  it('should return an array', () => {
    expect(stringToArray('')).toEqual(['']);
    expect(stringToArray('Hello')).toEqual(['Hello']);
    expect(stringToArray('Hello, World')).toEqual(['Hello,', 'World']);
  });
});
