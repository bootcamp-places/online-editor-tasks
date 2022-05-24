export const sortByWeight = (arr = []) => {
  const getWeight = element => {
    return element
      .toString()
      .split('')
      .reduce((accum, current) => {
        return parseInt(accum, 10) + parseInt(current, 10);
      }, 0);
  };

  return arr.sort((a, b) => getWeight(a) - getWeight(b));
};
