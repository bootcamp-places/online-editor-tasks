# mergeDataFromArray

Необхідно реалізувати функцію `mergeDataFromArray`, яка приймає в якості аргументу 
масив об'єктів однакової структури, а повертає об'єднане і видозмінене значення вказаного поля о'бєктів масиву.
Така задача можлива у випадку, коли користувачу потрібно показати раніше обрані значення.

**Приклад:**

```js
const array = [
      {color: "black", id: 9, time: null},
      {color: null, id: null, time: null},
      {color: "blue", id: 5, time: null},
    ];
mergeDataFromArray(array, 'color', '/'); // 'black/7/blue'
```

<details>
  <summary>Підказка</summary>

  ---

  Зверніть увагу на методи [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) та [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

</details>