import { toUpperCase } from './solution';

describe('js-basic/sum', () => {
  it('should return sum of numbers', () => {
    expect(toUpperCase('hello')).toBe('HELLO');
    expect(toUpperCase('HeLlO')).toBe('HELLO');
    expect(toUpperCase('HELLO')).toBe('HELLO');
  });
});
