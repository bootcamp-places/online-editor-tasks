export const sortByWeight = (arr = []) => {
  const sumNumbers = number =>
    number
      .toString()
      .split('')
      .reduce((prev, current) => parseInt(prev) + parseInt(current), 0);

  return arr.sort((a, b) => {
    const sum1 = sumNumbers(a)
    const sum2 = sumNumbers(b)

    if (sum1 < sum2) {
      return -1;
    }

    if (sum1 > sum2) {
      return 1;
    }

    return 0;
  });
};
