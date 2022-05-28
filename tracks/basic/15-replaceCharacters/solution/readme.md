# replaceCharacters

Розв'язання цієї задачі може виглядати ось так:

```js
export const replaceCharacters = (str = '', entry = '', replacement = '') => {
  return str.replaceAll(entry, replacement);
};
```

* Для зміни символів можна використати метод [`replaceAll`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)
