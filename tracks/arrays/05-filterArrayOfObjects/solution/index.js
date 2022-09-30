export const filterArrayOfObjects = (products = [], filters = {}) =>
  products.filter((product) =>
    Object.keys(filters).every((field) => product[field] === filters[field])
  );
