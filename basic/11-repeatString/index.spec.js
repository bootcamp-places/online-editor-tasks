import { repeatString } from './solution/index.js';

describe('js-basic/repeatString', () => {
  it('should return new string according to the condition ', () => {
    expect(repeatString('zpgl')).toBe('Z-Pp-Ggg-Llll');
    expect(repeatString('Nyffs')).toBe('N-Yy-Fff-Ffff-Sssss');
  });
});
