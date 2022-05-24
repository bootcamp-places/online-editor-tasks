# Solution trimSymbols

Розв'язання цієї задачі може виглядати ось так:

```js
const removeProperties = (obj, keys) => {
  return Object.keys(obj).reduce((result, key) => {
    return !keys.includes(key) ? { ...result, [key]: obj[key] } : result;
  }, {});
};
```
