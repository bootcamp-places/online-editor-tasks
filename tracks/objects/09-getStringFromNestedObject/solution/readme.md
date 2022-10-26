# getStringFromNestedObject

Розв'язання цієї задачі може виглядати ось так:

```js
const getStringFromNestedObject = (str = "", nestedObject = {}) => {
  let obj = nestedObject;
  const arr = str.split(".");

  arr.forEach((el) => {
    obj = obj[el];
  });

  return obj;
};
```
