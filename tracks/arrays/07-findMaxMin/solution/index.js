export const findMaxMin = (prices = [], sortBy = "", m) =>
  prices.length
    ? [(m = Math[sortBy](...prices)), prices.indexOf(m)]
    : [-1, -1];
