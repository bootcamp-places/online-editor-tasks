# Solution trimSymbols

Розв'язання цієї задачі може виглядати ось так:

```js
export function removeProperties(obj, keys) {
  for (const key of keys) {
    delete obj[key]
  }
  return obj;
}
```
