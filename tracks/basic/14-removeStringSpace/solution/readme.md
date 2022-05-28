# removeStringSpace

Розв'язання цієї задачі може виглядати ось так:

```js
export const removeStringSpace = (str = '') => {
  return str.replace(/\s/g, '');
};
```

* Для зміни символів можна використати метод [`replace`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
