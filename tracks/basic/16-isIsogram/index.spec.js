import { isIsogram } from './solution/index.js';

describe('basic/isIsogram', () => {
  it('should be defined', () => {
    expect(isIsogram).toBeDefined();
  });

  it('should return true when word have all unique chars', () => {
    expect(isIsogram('teach')).toBeTruthy();
    expect(isIsogram('rapid')).toBeTruthy();
    expect(isIsogram('hairy')).toBeTruthy();
    expect(isIsogram('dutch')).toBeTruthy();
  });

  it('should return true when word have all unique chars but some of them in uppercase', () => {
    expect(isIsogram('trIps')).toBeTruthy();
    expect(isIsogram('turnS')).toBeTruthy();
    expect(isIsogram('pRoud')).toBeTruthy();
    expect(isIsogram('giAnt')).toBeTruthy();
  });

  it('should return false when word has repeated characters', () => {
    expect(isIsogram('teammate')).toBeFalsy();
    expect(isIsogram('vivienne')).toBeFalse();
    expect(isIsogram('trigger')).toBeFalse();
    expect(isIsogram('banana')).toBeFalse();
  });

  it('should return false when word has repeated characters with some of them in uppercase', () => {
    expect(isIsogram('coRner')).toBeFalse();
    expect(isIsogram('foOd')).toBeFalse();
    expect(isIsogram('headpHones')).toBeFalse();
    expect(isIsogram('casuAl')).toBeFalse();
  });
});
