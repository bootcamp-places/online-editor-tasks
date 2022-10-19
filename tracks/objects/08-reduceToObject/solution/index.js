export const reduceToObject = (orders = [], products = {}) => orders.reduce((result, orderProducts) => {
  // Тут використовується деструктуризація
  // Почитати про це детальніше можна тут: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

  // Беремо всі ідентифікатори продуктів у замовленні
  const productsIds = Object.keys(orderProducts);

  // Потрібно пройтися по кожному продукту в замовленні
  for (let i = 0; i < productsIds.length; i += 1) {
    // Ідентифікатор продукту
    const pId = productsIds[i];

    if (products[pId]) {
      // Беремо ціну продукту
      const { price } = products[pId]; // Те саме: `const price = products[pId].price`

      // Якщо у фінальному об'єкті ще немає запису цього продукту,
      // то ми його записуємо зі значенням "0"
      if (!result[pId]) {
        result[pId] = 0;
      }

      // Додаємо суму з цього замовлення у фінальний об'єкт
      result[pId] += price * orderProducts[pId]; // Ціна помножена на кількість замовлених штук
    }
  }

  return result;
}, {});