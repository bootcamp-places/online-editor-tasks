export const sortByWeight = (arr = []) => {
  const getWeight = element =>
  element
      .toString()
      .split('')
      .reduce((prev, current) => parseInt(prev) + parseInt(current), 0);

  return arr.sort((a, b) => getWeight(a) - getWeight(b));
};
