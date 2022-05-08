import { sliceString } from './solution/index.js';

describe('sliceString', () => {
  it('should return sliced string', () => {
    expect(sliceString('hello World', 3)).toBe('hel');
  });
});
