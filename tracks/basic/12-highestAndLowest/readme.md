# highestAndLowest

Уявимо що ми маємо данні про температуру повітря за певний період.
Дані представлені у строковому форматі:
`'12 15 6 -4 5 15'`
Кожне число в стрічці відповідає температурі, за певний день. 

Необхідно реалізувати функцію, яка на вхід прийме стрічку з даними,
a має повернути нову стрічку з мінімальним та максимальним значенням температури.

**Example:**

```js
const data = '1 2 3 -4 6';

highestAndLowest(data); // '-4 6'
```

<details>
  <summary>Підказка</summary>
  
---

Зверніть увагу на методи:
* [`Math.max()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
* [`Math.min()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
</details>

