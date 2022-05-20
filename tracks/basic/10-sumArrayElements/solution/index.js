export const sumOfArrayElements = (arr = []) => {
  return arr.reduce((accum, item) => {
    return accum + item;
  }, 0);
};
