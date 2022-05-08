# revertCase

Розв'язання цієї задачі може виглядати ось так:

```js
export const revertCase = (string = '') => {
  let result = '';

  for (const char of string) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}
```
