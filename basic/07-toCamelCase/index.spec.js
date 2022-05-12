import { toCamelCase } from './solution';

describe('toCamelCase', () => {
  it('should return a "camelized" string', () => {
    expect(toCamelCase('foo bar')).toEqual('fooBar');
    expect(toCamelCase('FOO bar')).toEqual('fooBar');
    expect(toCamelCase('foo BAR')).toEqual('fooBar');
  });
});
