# Solution highestAndLowest

Розв'язання цієї задачі може виглядати ось так:

```js
const highestAndLowest = (numbers) => {
  const arr = numbers.split(' ');

  return `${Math.max(...arr)} ${Math.min(...arr)}`;
};
```
