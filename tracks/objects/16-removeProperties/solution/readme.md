# Solution trimSymbols

Розв'язання цієї задачі може виглядати ось так:

```js
export function removeProperties(obj, keys) {
  return Object.keys(obj).reduce((result, key) => 
    !keys.includes(key) ? { ...result, [key]: obj[key] } : result, {});
}
```
