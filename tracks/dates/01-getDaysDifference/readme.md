# getDaysDifference

В  цьому завданні, потрібно реалізувати функцію, яка буде приймати дату формату `2022-01-01T12:00:00.000Z` і повертати час що пройшов з цього моменту і до тепер в днях.

**Приклад:**

```js

// припустимо, що сьогодні в нас 2022-01-01 12:00:00
// в такому випадку, очікується, що функція буде працювати наступним чином 

getDaysDifference("2022-01-01T11:59:00.000Z") // 0
getDaysDifference("2021-12-31T12:12:01.000Z") // 0

getDaysDifference("2021-12-31T12:00:00.000Z") // 1
getDaysDifference("2021-12-30T16:00:00.000Z") // 1

getDaysDifference("2021-01-01T12:00:00.000Z") // 365);
getDaysDifference("2020-12-31T12:23:59.000Z") // 365);
```

<details>
  <summary>Підказка</summary>

---

  Якщо виникають питання, то можна ознайомитись із документацією по обʼєкту [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
</details>