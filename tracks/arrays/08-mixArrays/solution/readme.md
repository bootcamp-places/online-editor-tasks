# mixArrays

Розв'язання цієї задачі може виглядати ось так:

```js
const mixArrays = (...arrays) => {
  const maxLengthArray = Math.max(...arrays.map(a => a.length));
  const result = [];

  for (let i = 0; i < maxLengthArray; i++) {
    arrays.forEach((array) => {
      if (array[i] !== undefined) {
        result.push(array[i]);
      }
    });
  }
  return result;
};
```

Спочатку нам потрібно відшукати массив з найбільшою кількістю елементів. Для цього ми скористаємося
вбудованим методом `max` об'єкта `Math` передаючи аргументом набір чисел (к-сть елементів кожного 
з наших масивів `...arrays.map(a => a.length)`). 

Створюється змінна `result` (пустий массив), який буде результатом повернення ф-ції і в який ми добавляємо
в певному порядку елементи з наших `...arrays` массивів.

Зовнішній цикл `for` пробігається по `maxLengthArray` (число елементів найбільшого массиву), для того,
щоб не пропустити жодний елемент серед массивів, до якого ми будемо доступатися через змінну `i`.

Внутрішній цикл `arrays.forEach` пробігається безпосередньо по колекції массивів.

На цьому етапі потрібна перевірка `if (array[i] !== undefined)` у випадку, якщо змінна `array`, 
яку приймає колбек ф-ція, не містить елементу по вказаному індексу `i`. Це може статися, якщо на 
даному етапі ітерації `array` є одним з массивів з меншою к-стю елементів.
В іншому випадку ми добавляємо елемент з массиву `array` за вказаним індексом `result.push(array[i])`

Ф-ція повертає массив `result`, що і є кінцевим результатом.


## Корисні посилання
[Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
[Spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
