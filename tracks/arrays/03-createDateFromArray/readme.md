# createDateFromArray

Необхідно реалізувати функцію `createDateFromArray`, яка приймає в якості аргументу 
масив об'єктів однакової структури, а повертає об'єднане і видозмінене значення вказаного поля о'бєктів масиву.

**Приклад:**

```js
const dateArray = [
    {id:1, date: 9, time: null},
    {id:1, date: 7, time: null},
    {id:1, date: 2022, time: null}
];
createDateFromArray(dateArray, 'date', '/'); // '9/7/2022'
```

<details>
  <summary>Підказка</summary>

  ---

  Зверніть увагу на методи [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) та [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

</details>