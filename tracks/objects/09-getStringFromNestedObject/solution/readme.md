# getStringFromNestedObject

Розв'язання цієї задачі може виглядати ось так:

```js
const getStringFromNestedObject = () => {
  const arr = str.split(".");

  arr.forEach((el) => {
    nestedObject = nestedObject[el];
  });

  return nestedObject;
};
```
