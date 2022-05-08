import { sum } from './solution/index.js';

describe('js-basic/sum', () => {
  it('should return sum of numbers', () => {
    expect(sum()).toBe(0);
    expect(sum(1, 2)).toBe(3);
  });
});
