import { createPhoneNumber } from './solution/index.js';

describe('basic/createPhoneNumber', () => {
  it("should format the phone number correctly", function() {
    // Test 1
    let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let result1 = createPhoneNumber(numbers1);
    expect(result1).toBe("(123) 456-7890");

    // Test 2
    let numbers2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    let result2 = createPhoneNumber(numbers2);
    expect(result2).toBe("(987) 654-3210");
  });
});
