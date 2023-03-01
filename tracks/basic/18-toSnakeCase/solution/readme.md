# toSnakeCase

Розв'язання цієї задачі може виглядати ось так:

```js
const toSnakeCase = (string = '') => {
  const resault = string.split('').map((el, index) => {
    if (index === 0) {
      return el.toLowerCase();
    }

    if (el === el.toUpperCase()) {
      return `_${el.toLowerCase()}`;
    }

    return el;
  });

  return resault.join('');
};
```
