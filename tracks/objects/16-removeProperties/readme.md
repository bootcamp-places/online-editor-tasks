# removeProperties

Необхідно реалізувати функцію "removeProperties". Функція приймає 2 аргумента:
  1. об'єкт з довільними ключами та значеннями
  2. массив ключів, які потрібно видалити

Функція повинна повернути об'єкт, видалив з нього всі ключі, зазначені в массиві.

**Example:**
Припустимо, в нас є об'єкт user з ключами: id, name, lastName, age.

```javascript
const user = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  age: 22
}
removeProperties(user, ['lastName', 'age']); // { id: 1, firstName: 'John' } - видаляємо 'lastName' i 'age'
removeProperties(user, ['firstName']); // { id: 1, lastName: 'Doe', age: 22 } - видаляємо 'firstName'
```
