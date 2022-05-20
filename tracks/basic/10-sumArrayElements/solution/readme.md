# sumOfArrayElements

Розв'язання цієї задачі може виглядати ось так:

```js
const sumOfArrayElements = (arr = []) => {
  return arr.reduce((accum, item) => {
    return accum + item;
  }, 0);
};
```
