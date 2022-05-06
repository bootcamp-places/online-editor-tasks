# Pick

Необхідно реалізувати функцію, яка на вхід приймає об'єкт та назви властивостей об'єкта:

**Example:**

```js
const obj = {}

pick(obj, 'field-1', 'field-2', ...'field-n');
```

А повертає новий об'єкт з властивостями, які були вказані в аргументах функції

**Example:**

```js
const fruits = {
 apple: 2,
 orange: 4,
 banana: 3
};

console.log(pick(fruits, 'apple', 'banana')); // { apple: 2, banana: 3 }
```
