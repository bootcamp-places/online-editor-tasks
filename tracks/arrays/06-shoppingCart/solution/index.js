export const shoppingCart = (products = []) => {
  const result = [];

  for (const element of products) {
    if (parseInt(element) > 0) {
      const productNumber = parseInt(element);
      result.push(productNumber.toString());
    }
  }

  return result;
};
