# Solution omit

Розв'язання цієї задачі може виглядати ось так:

```js
const omit = (obj, ...fields) => {
  const result = {};

  for (const key of Object.keys(obj)) {
    if (!fields.includes(key)) {
      result[key] = obj[key];
    }
  }

  return result;
};
```
