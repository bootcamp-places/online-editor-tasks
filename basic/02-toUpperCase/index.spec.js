import { toUpperCase } from './solution/index.js';

describe('toUpperCase', () => {
  it('should return uppercase string', () => {
    expect(toUpperCase('hello')).toBe('HELLO');
    expect(toUpperCase('HeLlO')).toBe('HELLO');
    expect(toUpperCase('HELLO')).toBe('HELLO');
  });
});
