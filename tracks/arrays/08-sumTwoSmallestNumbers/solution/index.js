export const sumTwoSmallestNumbers = (numbers = []) => {
  let arr = numbers.sort((a, b) => a - b);
  return arr[0] + arr[1];
};
