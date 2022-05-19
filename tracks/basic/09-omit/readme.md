# omit

Необхідно реалізувати функцію, яка приймає об'єкт та назви властивостей об'єкта:

```js
const obj = {}

omit(obj, 'field-1', 'field-2', ...'field-n');
```

А повертає новий об'єкт з властивостями, які не були вказані в аргументах функції

**Example:**

```js
const fruits = {
 apple: 2,
 orange: 4,
 banana: 3
};

console.log(omit(fruits, 'apple', 'banana')); // { orange: 4 }
```
