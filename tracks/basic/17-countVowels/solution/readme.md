# countVowels

Розв'язання цієї задачі може виглядати ось так:

```js
const countVowels = (vowels = [], string = "") => {
  let counter = 0;

  for (let str of string.toLocaleLowerCase()) {
    if (vowels.includes(str)) {
      counter++;
    }
  }

  return counter;
};
```
