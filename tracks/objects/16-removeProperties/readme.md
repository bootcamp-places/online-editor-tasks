# removeProperties

Необхідно реалізувати функцію "removeProperties". Функція приймає 2 аргумента:
  1. об'єкт з довільними ключами та значеннями
  2. массив ключів, які потрібно видалити

Функція повинна повернути об'єкт, видалив з нього всі ключі, зазначені в массиві.

**Example:**

```javascript
removeProperties({ one: 'one', two: 'two', three: 'three' }, ['one', 'two']); // { three: 'three' } - видаляємо 'one' i 'two'
removeProperties({ one: 'one', two: 'two', three: 'three' }, ['three']); // { one: 'one', two: 'two' } - видаляємо 'three'
```

<details>
  <summary>Підказка</summary>
  
---

Зверніть увагу на оператор [delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)

</details>