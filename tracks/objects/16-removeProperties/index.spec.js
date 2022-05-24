import { removeProperties } from './solution/index.js';

describe('objects/removeProperties', () => {
  it('should remove properties', () => {
    const user = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 22
    };
    expect(removeProperties(user, ['lastName'])).toEqual({ id: 1, firstName: 'John', age: 22 });
    expect(removeProperties(user, ['firstName', 'lastName'])).toEqual({ id: 1, age: 22 });
  });

  it('should return empty object if it was passed to function like an argument', () => {
    expect(removeProperties({}, [])).toEqual({});
    expect(removeProperties({}, ['id'])).toEqual({});
  });

  it('should return the same object if no keys were passed', () => {
    expect(removeProperties({ id: 1 }, [])).toEqual({ id: 1 });
  });
});
