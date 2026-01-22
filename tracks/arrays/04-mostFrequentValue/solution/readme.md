# mostFrequentValue

Розв'язання цієї задачі може виглядати ось так:

```js
const mostFrequentValue = () => {
  const map = {};
  let currentMostFrequentValue = 0;
  let mostRepeatedFrequntValue;

  array.forEach((el) => {
    if (map[el]) {
      map[el] = map[el] + 1;

      if (currentMostFrequentValue < map[el]) {
        currentMostFrequentValue = map[el];
        mostRepeatedFrequntValue = el;
      }
    } else {
      map[el] = 1;
    }
  });

  return mostRepeatedFrequntValue;
};
```
