export const arrayIntersection = (products = [], favorites = []) => {
  if (products.length == 0 || favorites.length == 0) {
    return 0;
  }

  const intersection = favorites.filter((item) => products.includes(item));

  return intersection.length;
};
