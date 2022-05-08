# Solution chunk

Розв'язання цієї задачі може виглядати ось так:

```js
const chunk = (arr, size) => {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
};
```
