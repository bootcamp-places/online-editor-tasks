import { pick } from './solution';

describe('js-basic/pick', () => {
  it('should return new object with one passed field', () => {
    const obj = {foo: 'foo', bar: 'bar'};

    expect(pick(obj, 'foo')).toEqual({foo: 'foo'});
  });

  it('should return new object with a few passed field', () => {
    const obj = {foo: 'foo', bar: 'bar', baz: 'baz'};

    expect(pick(obj, 'foo', 'bar')).toEqual({foo: 'foo', bar: 'bar'});
  });

  it('should return an empty object if passed fields does not found', () => {
    const obj = {foo: 'foo', bar: 'bar'};

    expect(pick(obj, 'riba')).toEqual({});
  });

  it('should return only own object properties', () => {
    const obj = {};

    expect(pick(obj, 'toString')).toEqual({});
    expect(pick(obj, 'constructor')).toEqual({});
  });
});
