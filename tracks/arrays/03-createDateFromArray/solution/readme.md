# createDateFromArray

Розв'язання цієї задачі може виглядати ось так:

```js
export const handleDataOfArrayOfObjects = (arrayOfObjects, property, divider) => {
  return arrayOfObjects.map(obj => obj[property])?.join(divider);
};
```

## Алгоритм дій:

Одним з можливих варіантів вирішення цієї задачі можуть бути методи [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) та [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join).

За допомогою методу [map] з масиву об'єктів ми беремо тільки потрібні нам поля, створюючи з них новий звичайний масив.
Далі, за допомогою методу [join] об'єднуємо елементи нового масиву потрібним нам роздільником.
Результатом використання цих двох методів буде стрічка, яка складається з обраних нами значень масиву, розділених вказаним нами роздільником.