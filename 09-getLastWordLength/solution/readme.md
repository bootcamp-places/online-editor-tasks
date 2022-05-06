# Solution getLastWordLength

Розв'язання цієї задачі може виглядати ось так:

```js
export const getLastWordLength = str => {
  const words = str.trim().split(' ');
  const lastWord = words[words.length - 1];

  return lastWord.length;
};
```
