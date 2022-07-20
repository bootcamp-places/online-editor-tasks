import { createDateFromArray } from './solution/index.js';

describe('arrays/createDateFromArray', () => {
  it('should be defined', () => {
    expect(createDateFromArray).toBeDefined();
  });

  it('should return data in correct format', () => {
    expect(createDateFromArray([
      {id: 1, date: 9, time: null},
      {id: 1, date: 7, time: null},
      {id: 1, date: 2022, time: null}
    ], 'date', '/')).toEqual('9/7/2022');
  });
});