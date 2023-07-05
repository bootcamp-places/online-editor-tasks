export const groupBy = (arr, key) =>
  arr.reduce(
    (acc, val) => acc.set(val[key], [...(acc.get(val[key]) || []), val]),
    new Map()
  );
