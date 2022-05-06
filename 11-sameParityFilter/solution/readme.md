# Solution sameParityFilter

Розв'язання цієї задачі може виглядати ось так:

```js
const sameParityFilter = (arr = []) => {
  const [firstItem] = arr;
  const isEven = (num) => num % 2 === 0;
  const firstItemParity = isEven(firstItem);

  return arr.filter((item) => isEven(item) === firstItemParity);
};
```
