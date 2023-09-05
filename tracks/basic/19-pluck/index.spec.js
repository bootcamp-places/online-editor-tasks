import { pluck } from './solution/index.js';

describe('basic/pluck', () => {
  it('should be defined', () => {
    expect(pluck).toBeDefined();
  });

  it('should return correct list', () => {
    const users = [{
      name: 'User One',
      age: 39,
      id: 1
    }, {
      name: 'User Two',
      age: 27,
      id: 2
    }];

    expect(pluck()).toEqual([]);
    expect(pluck(users, 'id')).toEqual([1, 2]);
    expect(pluck(users, 'name')).toEqual(['User One', 'User Two']);
    expect(pluck(users, 'age')).toEqual([39, 27]);
  });

  it('should not change the initial array', () => {
    const users = [{
      name: 'User One',
    }, {
      name: 'User Two'
    }];

    pluck(users, 'name');

    expect(users).toEqual([{
      name: 'User One',
    }, {
      name: 'User Two'
    }]);
  });
});
