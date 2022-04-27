# Solution highestAndLowest

```js
const highestAndLowest = (numbers) => {
  const arr = numbers.split(' ');

  return `${Math.max(...arr)} ${Math.min(...arr)}`;
};
```
