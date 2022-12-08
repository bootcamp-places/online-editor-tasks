export const sortArrayOfObjects = (
  products = [],
  sortBy = "",
  map = { asc: [0, 1], desc: [1, 0] }
) =>
  products.sort(
    (...product) =>
      product[map[sortBy][0]].rating - product[map[sortBy][1]].rating
  );
