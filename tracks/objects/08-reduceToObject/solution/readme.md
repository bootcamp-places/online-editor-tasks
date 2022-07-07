# reduceToObject

Розв'язання цієї задачі може виглядати ось так:

```js
export const reduceToObject = (orders = []) => {
  const products = {
    pId1: { name: "Big Mac", price: 90 },
    pId2: { name: "Big Tasty", price: 120 },
    pId3: { name: "Mc Chicken", price: 60 },
    pId4: { name: "Fille O Fish", price: 45 },
  };

  return orders.reduce((result, orderProducts) => {
    const productsIds = Object.keys(orderProducts);

    for (let i = 0; i < productsIds.length; i += 1) {
      const pId = productsIds[i];
      const { price } = products[pId];

      if (!result[pId]) {
        result[pId] = 0;
      }
      result[pId] += price * orderProducts[pId];
    }

    return result;
  }, {});
};
```


## Алгоритм дій:

Ми використовуємо метод `Array.reduce()` для ітерації по замовленнях.
Для кожного замовлення ми робимо наступне:
- За допомогою метода `Object.keys` ми отримуємо масив з ID продуктів цього замовлення
- Використовуємо цикл `for` щоб пройтися по отриманому масиву
- В циклі, за допомогою ID продукта ми беремо кількість і ціну продукта
- Якщо продукта ще немає у фінальному об'єкті, це значить що він прораховується перший раз.
Тому нам потрібно додати цей продукт у фінальний об'єкт із сумою поки що **0**.
- Множимо ціну на кількість і додаємо отриманий результат до суми у фінальному об'єкті

## Корисні посилання
- [Деструктуризація](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [+= Додавання з присвоюванням](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment)