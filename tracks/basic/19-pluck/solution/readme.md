# pluck

Розв'язання цієї задачі може виглядати ось так:

```js
const pluck = (collection = [], key = '') => {
  return collection.map((el) => el[key]);
}
```
