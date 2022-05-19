import { toUpperCase } from './solution/index.js';

describe('basic/toUpperCase', () => {
  it('should return uppercase string', () => {
    expect(toUpperCase('hello')).toBe('HELLO');
    expect(toUpperCase('HeLlO')).toBe('HELLO');
    expect(toUpperCase('HELLO')).toBe('HELLO');
  });
});
