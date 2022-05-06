import { revertCase } from './solution/index.js';

describe('js-basic/sum', () => {
  it('should return sum of numbers', () => {
    expect(revertCase('Hello World')).toBe('hELLO wORLD');
    expect(revertCase('HeLlO WoRlD')).toBe('hElLo wOrLd');
    expect(revertCase('HELLO WORLD')).toBe('hello world');
  });
});
