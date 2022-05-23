export const sortByWeight = (arr = []) => {
  const sumNumbers = number =>
    number
      .toString()
      .split('')
      .reduce((prev, current) => parseInt(prev) + parseInt(current), 0);

  return arr.sort((a, b) => sumNumbers(a) - sumNumbers(b));
};
