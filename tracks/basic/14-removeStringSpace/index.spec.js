import { removeStringSpace } from './solution/index.js';

describe('basic/removeStringSpace', () => {
  it('should remove spaces', () => {
    expect(removeStringSpace('hello world')).toEqual('helloworld');
    expect(removeStringSpace('hello beautiful   world')).toEqual('hellobeautifulworld');
  });

  it('should remove spaces at the beginning', () => {
    expect(removeStringSpace('     hello world')).toEqual('helloworld');
  });

  it('should remove spaces at the ending', () => {
    expect(removeStringSpace('hello world     ')).toEqual('helloworld');
  });

  it('should return an empty string', () => {
    expect(removeStringSpace('         ')).toEqual('');
  });
});
