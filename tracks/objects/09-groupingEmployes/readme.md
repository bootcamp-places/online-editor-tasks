# groupingEmployes

Необхідно реалізувати функцію `groupingEmployes`, яка приймає в якості першого аргументу масив співробітників `employeeList`, а повертає об'єкт у якому всі співробітники посортовані по групах, де назва групи це ключ, а значення масив співробітників:

**Приклад:**

```js
const employeeList = [{
  id: 1,
  user: 'User One',
  group: 'QA',
}, {
  id: 2,
  user: 'User Two',
  group: 'FE',
}, {
  id: 3,
  user: 'User Three',
  group: 'BE',
}, {
  id: 4,
  user: 'User Four',
  group: 'FE',
}];

groupingEmployes(employeeList);

/* Result:
  {
    QA: [{
      id: 1,
      user: 'User One'
    }],
    FE: [{
      id: 2,
      user: 'User Two'
    }, {
      id: 4,
      user: 'User Four'
    }],
    BE: [{
      id: 3,
      user: 'User Three'
    }]
  }
*/
```

<details>
  <summary>Підказка</summary>

  ___

  Алгоритм дій для реалізації функції:
  
  * Оголошуємо новий об'єкт `result` в середині функції.
  * Ітеруємо масив працівників.
  * На кожній ітерації перевіряємо чи немає в об'єкті `result` відповідної групи. Якщо немає, то створюємо відповідну групу в об'єкті `result`. Кожна група має бути масивом працівників.
  * Додаємо працівника до відповідної групи.
  * Результат повертаємо із функції за допомогою `return`.
</details>
