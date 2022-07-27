import { alphabeticalOrder } from './solution/index.js';

describe('functions/alphabeticalOrder', () => {
  it('should be defined', () => {
    expect(alphabeticalOrder).toBeDefined();
  });
  
  it('Should return string in alphabetical order', () => { 
    expect(alphabeticalOrder('webmaster'))
    .toEqual('abeemrstw');
  });
});