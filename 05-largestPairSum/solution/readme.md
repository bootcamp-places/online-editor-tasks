# Solution largestPairSum

```js
const largestPairSum = (numbers) => {
  const [a, b] = numbers.sort((a, b) => b - a);

  return a + b;
};
```
