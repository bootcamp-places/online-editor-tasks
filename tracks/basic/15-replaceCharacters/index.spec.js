import { replaceCharacters } from './solution/index.js';

describe('basic/replaceCharacters', () => {
  it('should replace strings', () => {
    expect(replaceCharacters('Hello, user', 'user', 'admin')).toEqual('Hello, admin');

    const initialString = 'Hello, dear customer! All customers are important for our product.';
    const expectedString = 'Hello, dear client! All clients are important for our product.';
    expect(replaceCharacters(initialString, 'customer', 'client')).toEqual(expectedString);
  });

  it('should replace the whole string', () => {
    expect(replaceCharacters('Hello world', 'Hello world', 'new string')).toEqual('new string');
  });

  it('should do nothing', () => {
    expect(replaceCharacters('Hello, user', 'admin', 'user')).toEqual('Hello, user');
  });
});
