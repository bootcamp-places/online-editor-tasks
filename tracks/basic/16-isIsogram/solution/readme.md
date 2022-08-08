# isIsogram

> Author: [KrabDr](https://github.com/KrabDr)

Розв'язання цієї задачі може виглядати ось так:

```js
const isIsogram = (str) => {
  const uniqueCharsSize = new Set(str.toLowerCase().split('')).size;
  return str.length === uniqueCharsSize;
};
```
