/**
 * @param {array} arr
 * @returns {array} array of arrays
 */

export const returnCollections = (arr) => {
  if (arr.length === 0) {
    return [[]];
  }
  arr.sort((a, b) => a - b);
  const outArray = [];

  outArray.push([arr[0]]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > 1) {
      outArray.push([arr[i]]);
    } else {
      outArray[outArray.length - 1].push(arr[i]);
    }
  }

  return outArray;
};
