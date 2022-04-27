export const sameParityFilter = (arr = []) => {
  const [firstItem] = arr;
  const isEven = (num) => num % 2 === 0;
  const firstItemParity = isEven(firstItem);

  return arr.filter((item) => isEven(item) === firstItemParity);
};
