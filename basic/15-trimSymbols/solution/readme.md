# Solution trimSymbols

Розв'язання цієї задачі може виглядати ось так:

```js
export const trimSymbols = (string, size) => {
  if (size === 0) return '';
  if (size === undefined) return string;

  const firstSlice = string.slice(0, size);
  const rest = [...string.slice(size)];

  return rest.reduce((accumString, char) => {
    if (!accumString.endsWith(char.repeat(size))) {
      accumString += char;
    }
    return accumString;
  }, firstSlice);
}
```
