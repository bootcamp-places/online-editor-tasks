export const reduceToObject = (orders = []) => {
  const products = {
    pId1: { name: "Big Mac", price: 90 },
    pId2: { name: "Big Tasty", price: 120 },
    pId3: { name: "Mc Chicken", price: 60 },
    pId4: { name: "Fille O Fish", price: 45 },
  };

  return orders.reduce((result, orderProducts) => {
    // Тут використовуться деструктуризація
    // Почитати про це детальніше можна тут: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

    // Беремо всі ідентифікатори продуктів у замовленні
    const productsIds = Object.keys(orderProducts);

    // Потрібно пройтися по кожному продукту в замовленні
    for (let i = 0; i < productsIds.length; i += 1) {
      // Ідентифікатор продукта
      const pId = productsIds[i];
      // Беремо ціну продукта
      const { price } = products[pId]; // Те саме: `const price = products[pId].price`

      // Якщо у фінальному об'єкті ще немає запису цього продукта,
      // то ми його записуємо із значенням "0"
      if (!result[pId]) {
        result[pId] = 0;
      }
      // Добавляємо суму з цього замовлення у фінальний об'єкт
      result[pId] += price * orderProducts[pId]; // Ціна помножена на кількість замовлених штук
    }

    return result;
  }, {});
};