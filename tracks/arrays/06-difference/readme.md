# difference

Потрібно реалізувати функцію `difference`, яка буде порівнювати два масиви, та знаходити різницю між ними.
Функція прийматиме два параметри:
- перший - це цільовий масив, який визначає порядок результатів.
- другим - це порівнюваний масив, з яким ми порівнюємо елемени з першого масиву.
Тобто, нам потрібно знайти ті елементи з першого (цільвого) масиву, які не містяться в другому масиві.

Умови:
- Виклик даної фунції завжди повинен повертати новий масив.
- Якщо перший аргумент не масив, то результатом виклику функції має бути пустий масив.
- Якщо другий аргумент не масив, то повертаємо поверхневу копію першого масиву.
- Фунція не повина змінювати вхідні масиви.

**Приклад:**

```js
difference([1, 200, 'some string'], [1, 200]); // ['some string'];
difference({}, [1, 200]); // [];
difference('test', [1, 200]); // [];
difference([1, 200, 'some string'], []); // [1, 200, 'some string'];
difference([1, 200, 'some string']); // [1, 200, 'some string'];
difference([1, 200, 'some string'], ''); // [1, 200, 'some string'];
```

<details>
  <summary>Підказка</summary>

---

Зверніть увагу на методи:
- [Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [Array.prototype.filter()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.includes()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

Також не забуваймо про [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).


## Алгоритм дій
1. Перевірити вхідні аргументи, чи є вони масивами.
2. Відфільтрувати елементи першого масиву по наявності їх в другому масиві.
3. Повернути результат, в залежності від кроків 1 та 2.


</details>
