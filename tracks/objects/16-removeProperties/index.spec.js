import { removeProperties } from './solution/index.js';

describe('objects/removeProperties', () => {
  it('should remove properties', () => {
    expect(removeProperties({ one: 'one', two: 'two', three: 'three' }, ['one'])).toEqual({ two: 'two', three: 'three' });
    expect(removeProperties({ one: 'one', two: 'two', three: 'three' }, ['three', 'one'])).toEqual({ two: 'two' });
  });

  it('should return empty empty object if it was passed to function like an argument', () => {
    expect(removeProperties({}, [])).toEqual({});
    expect(removeProperties({}, ['one'])).toEqual({});
  });

  it('should return the same object if no keys were passed', () => {
    expect(removeProperties({ one: 'one', two: 'two' }, [])).toEqual({ one: 'one', two: 'two' });
  });
});
