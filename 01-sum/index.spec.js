import { sum } from './solution/index.js';

describe('js-basic/sum', () => {
  it('should return sum of numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
