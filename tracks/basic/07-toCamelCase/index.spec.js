import { toCamelCase } from './solution/index.js';

describe('basic/toCamelCase', () => {
  it('should return a "camelized" string', () => {
    expect(toCamelCase('foo bar')).toEqual('fooBar');
    expect(toCamelCase('FOO bar')).toEqual('fooBar');
    expect(toCamelCase('foo BAR')).toEqual('fooBar');
  });
});
