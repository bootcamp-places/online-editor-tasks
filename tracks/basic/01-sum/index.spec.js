import { sum } from './solution/index.js';

describe('basic/sum', () => {
  it('should return sum of numbers', () => {
    expect(sum()).toBe(0);
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 10)).toBe(9);
  });
});
