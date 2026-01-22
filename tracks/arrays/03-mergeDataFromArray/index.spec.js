import { mergeDataFromArray } from './solution/index.js';

describe('arrays/mergeDataFromArray', () => {
  it('should be defined', () => {
    expect(mergeDataFromArray).toBeDefined();
  });

  it('should return data in correct format', () => {
    expect(mergeDataFromArray([
      {color: "black", id: 9, time: null},
      {color: null, id: null, time: null},
      {color: "blue", id: 5, time: null},
    ], 'color', '/')).toEqual('black/-/blue');
  });
  it('should replace the missing data with dashes', () => {
    expect(mergeDataFromArray([
      {color: "black", id: 9, time: null},
      {color: null, id: null, time: null},
      {color: "blue", id: 5, time: null},
    ], 'date', '/')).toEqual('-/-/-');
  });
  it('should return epty string', () => {
    expect(mergeDataFromArray([], 'color', '/')).toEqual('');
  });
});