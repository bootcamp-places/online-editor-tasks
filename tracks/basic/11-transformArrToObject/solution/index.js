export const transformArrToObject = (arr = []) => {
  const result = {};

  for (const item of arr) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }

  return result;
};
