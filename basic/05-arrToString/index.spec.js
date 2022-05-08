import { arrToString } from './solution/index.js';

describe('arrToString', () => {
  it('should return elements of an array in the string representation', () => {
    expect(arrToString(['apple', 'orange', 'banana'], '-')).toBe('apple-orange-banana');
    expect(arrToString(['apple', 'orange', 'banana'], '*')).toBe('apple*orange*banana');
    expect(arrToString(['apple', 'orange', 'banana'], ' ')).toBe('apple orange banana');
  });
});
