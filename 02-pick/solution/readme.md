# Solution pick

```js
const pick = (obj, ...fields) => {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (fields.includes(key)) {
      result[key] = value;
    }
  }

  return result;
};
```
