import { transformArrToObject } from './solution/index.js';

describe('basic/transformArrToObject', () => {
  it('should transform the empty array to the empty object', () => {

    expect(transformArrToObject([])).toEqual({});
  });

  it('should count elements in array', () => {
    const products = ['keyboard-sk8855', 'mouse-sd63', 'keyboard-sk8855', 'ssd-asus', 'ssd-asus'];

    expect(transformArrToObject(products)).toEqual({
      'keyboard-sk8855': 2,
      'mouse-sd63': 1,
      'ssd-asus': 2
    });
  });
});
