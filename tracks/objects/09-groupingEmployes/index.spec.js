import { groupingEmployes } from './solution/index.js';

describe('objects/groupingEmployes', () => {
  it('should be defined', () => {
    expect(groupingEmployes).toBeDefined();
  });

  it('should transform an array of employee to an object of employee groups', () => {
    const employeeList = [{
      id: 1,
      user: 'User One',
      group: 'QA',
    }, {
      id: 2,
      user: 'User Two',
      group: 'FE',
    }, {
      id: 3,
      user: 'User Three',
      group: 'BE',
    }, {
      id: 4,
      user: 'User Four',
      group: 'FE',
    }];

    const res = {
      QA: [{
        id: 1,
        user: 'User One'
      }],
      FE: [{
        id: 2,
        user: 'User Two'
      }, {
        id: 4,
        user: 'User Four'
      }],
      BE: [{
        id: 3,
        user: 'User Three'
      }]
    };

    expect(groupingEmployes()).toEqual({});
    expect(groupingEmployes([])).toEqual({});
    expect(groupingEmployes(employeeList)).toEqual(res);
  });
});
