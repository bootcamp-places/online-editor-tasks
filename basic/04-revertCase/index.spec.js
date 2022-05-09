import { revertCase } from './index.js';

describe('revertCase', () => {
  it('should correctly handle whitespace characters', () => {
    expect(revertCase(' ')).toBe(' ');
  });

  it('should return a string with letters in opposite register', () => {
    expect(revertCase('Hello World')).toBe('hELLO wORLD');
    expect(revertCase('HeLlO WoRlD')).toBe('hElLo wOrLd');
    expect(revertCase('HELLO WORLD')).toBe('hello world');
  });
});
