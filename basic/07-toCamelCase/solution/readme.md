# toCamelCase

Розв'язання цієї задачі може виглядати ось так:

```js
const toCamelCase = (someString = '') => {
  const arr = someString.split(' ');

  const transformedArr = arr.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    }

    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  return transformedArr.join('');
};
```
