# difference

Розв'язання цієї задачі може виглядати ось так:

```js
const difference = (targetArray, comparedArray) => {
  if (Array.isArray(targetArray)) {
    if (Array.isArray(comparedArray)) {
      return targetArray.filter((item) => !comparedArray.includes(item));
    }

    return [...targetArray];
  }

  return [];
};
```

## Алгоритм дій:
Спочатку нам потрібно переконатись, що отримані аргументи фунції - масиви.
Для цього скористаємось статичним методом `Array.isArray()`.
Тут буде два кроки (зауважте, порядок перевіок має значення): 
1. Якщо перший аргумент не є масивом, то одразу повертаємо пустий масив як результат виклику фунтції.
2. Якщо ж перший аргумент масив, а другий аргумент не є масивом, то повертаємо поверхневу копію першого масиву результат. Для цього можемо скористатись `spread` синтаксисом.

Далі нам потібно знайти ті елементи з першого масиву, що не місяться в другому масиві. Для цього ми скористаємося методомами масиву `filter()` та `includes()`.

```js
  return targetArray.filter((item) => !comparedArray.includes(item));
```

Метод `filter()` створює *поверхневу копію* частини даного масиву, відфільтровану лише до елементів із даного масиву, які пройшли перевірку, реалізовану наданою функцією.

Метод `includes()` визначає, чи містить масив певний елемент, повертаючи залежно від цього `true` чи `false`.

Таким чином, ми отримуємо на виході масив лише з тими елементами з першого масиву, що відповідають умовам фільтру і не місяться в другому масиві, або ж - пустий масив.


## Корисні посилання
 - [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
 - [Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
 - [Array.prototype.filter()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
 - [Array.prototype.includes()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
