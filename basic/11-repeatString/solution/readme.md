# Solution repeatString

Розв'язання цієї задачі може виглядати ось так:

```js
const repeatString = (str = '') => {
  const separator = '-';
  const arr = str.split('');

  const result = arr.map((item, index) => {
    const firstPart = item.toUpperCase();
    const lastPart = item.toLowerCase().repeat(index);

    return `${firstPart}${lastPart}`;
  })

  return result.join(separator);
};
```
