import { mixArrays } from './solution/index.js';

describe('arrays/mixArrays', () => {
  it('should be defined', () => {
    expect(mixArrays).toBeDefined();
  });

  it("should work with example", () => {
    expect(mixArrays(['Samsung', 'Bosh', 'Kenwood'], ['Denver', 'Cansas City'], [7994563, 5666776, 54433008]))
      .toEqual(['Samsung', 'Denver', 7994563, 'Bosh', 'Cansas City', 5666776, 'Kenwood', 54433008]);
  });

  it("should return empty array if all arrays are empty", () => {
    expect(mixArrays([], [], []))
      .toEqual([]);
  });

  it("should evenly mix arrays with empty array in the middle of the list of arrays", () => {
    expect(mixArrays(['Samsung', 'Bosh', 'Kenwood'], [], [7994563, 5666776, 54433008]))
      .toEqual(['Samsung', 7994563, 'Bosh', 5666776, 'Kenwood', 54433008]);
  });

  it("should evenly mix arrays with empty array at the start of the list of arrays", () => {
    expect(mixArrays([], ['Denver', 'Cansas City', 'Valdez-Cordova'], [7994563, 5666776, 54433008]))
      .toEqual(['Denver', 7994563, 'Cansas City', 5666776, 'Valdez-Cordova', 54433008]);
  });

  it("should evenly mix arrays with empty array at the end of the list of arrays", () => {
    expect(mixArrays(['Denver', 'Cansas City', 'Valdez-Cordova'], [7994563, 5666776, 54433008], []))
      .toEqual(['Denver', 7994563, 'Cansas City', 5666776, 'Valdez-Cordova', 54433008]);
  });

  it("should evenly mix arrays with bigger items array", () => {
    expect(mixArrays(
      ['Samsung', 'Bosh', 'Kenwood', 'Indesit', 'Xiaomi'],
      ['Denver', 'Cansas City', 'Valdez-Cordova'],
      [7994563, 5666776, 54433008]
    )).toEqual(
      ['Samsung', 'Denver', 7994563, 'Bosh', 'Cansas City', 5666776, 'Kenwood', 'Valdez-Cordova', 54433008, 'Indesit', 'Xiaomi']
    );
  });
});
