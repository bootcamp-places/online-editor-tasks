export const mixArrays = (...arrays) => {
  const maxLengthArray = Math.max(...arrays.map(a => a.length));
  const result = [];

  for (let i = 0; i < maxLengthArray; i++) {
    arrays.forEach((array) => {
      if (array[i] !== undefined) {
        result.push(array[i]);
      }
    });
  }
  return result;
};
