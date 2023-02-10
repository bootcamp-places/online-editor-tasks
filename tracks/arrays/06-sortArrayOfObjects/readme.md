# sortArrayOfObjects

Ви працюєте над модулем Категорій Продуктів для [E-commerce](https://uk.wikipedia.org/wiki/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D0%B0_%D0%BA%D0%BE%D0%BC%D0%B5%D1%80%D1%86%D1%96%D1%8F) аплікації. Одним із елементів цього модуля є сортування товарів згідно рейтингу. У цьому завданні вам необхідно реалізувати функцію яка повертає масив продуктів, відсортованого згідно значення поля `rating` кожного обʼєкту заданого масиву.

Обмеження:

- Розмір масиву завжди не більше 100 продуктів
- Кожний продукт містить поле `rating`
- Значення напрямку сортування `sortBy`: "asc" (від "ascending", по зростанню, чим більше - тим краще) і "desc" (навпаки)
- Швидкість роботи алгоритму та обсяг використовуваної пам'яті значення не мають

Функція приймає два параметри:

- масив усіх товарів `products`
- напрямок сортування `sortBy`

**Приклад:**

```js
sortArrayOfObjects([
  {
  title: "Notebook Acer 14",
  color: "black",
  brand: "Acer",
  price: "1500",
  rating: 0
  },
  {
  title: "Notebook HP Pro",
  color: "grey",
  brand: "HP",
  price: "1700",
  rating: 3
  },
  {
  title: "MacBook Pro",
  color: "silver",
  brand: "Apple",
  price: "10000",
  rating: 1
  }
],
"asc"
);
```

Після обробки, функція має повернути наступний масив:

```js
[
  {
  title: "Notebook Acer 14",
  color: "black",
  brand: "Acer",
  price: "1500",
  rating: 0
  },
  {
  title: "MacBook Pro",
  color: "silver",
  brand: "Apple",
  price: "10000",
  rating: 1
  },
  {
  title: "Notebook HP Pro",
  color: "grey",
  brand: "HP",
  price: "1700",
  rating: 3
  }
]
```

<details>
  <summary>Підказка</summary>

---

  Зверніть увагу на методи [Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

  ## Алгоритм дій

  1. Для кожної пари продуктів
  1. Порівняти поле `rating` між собою
  1. Змінити позицію пари згідно заданого значення `sortBy`
  1. Повернути отриманий масив продуктів

</details>
