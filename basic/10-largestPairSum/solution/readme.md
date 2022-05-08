# Solution largestPairSum

Розв'язання цієї задачі може виглядати ось так:

```js
const largestPairSum = (numbers) => {
  const [a, b] = numbers.sort((a, b) => b - a);

  return a + b;
};
```
