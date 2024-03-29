export const sortArrayOfObjects = (products = [], sortBy = "") => {
  const sortedProducts = products.sort((product1, product2) => {
    if (sortBy === "asc") {
      return product1.rating - product2.rating;
    } else {
      return product2.rating - product1.rating;
    }
  });

  return sortedProducts;
};
