# groupingEmployes

Розв'язання цієї задачі може виглядати ось так:

```js
export const groupingEmployes = (arr = []) => {
  const res = {};

  arr.forEach((el) => {
    if (!res.hasOwnProperty(el.group)) {
      res[el.group] = [];
    }

    res[el.group].push({
      id: el.id,
      user: el.user,
    });
  });

  return res;
};
```