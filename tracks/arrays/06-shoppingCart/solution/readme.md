# shoppingCart

Найпростіший варіант розв'язання цієї задачі може виглядати ось так:

```js
const shoppingCart = (products = []) => {
  const result = [];
  // 1. Для кожного елементу вхідного масиву перевірити
  for (const element of products) {
    // 2. Якщо елемент є валідним цифровим значенням і є більше нуля
    if (parseInt(element) > 0) {
      const productNumber = parseInt(element);
      // 3. То перетворити його у тип String і запамʼятати його значення
      result.push(productNumber.toString());
    }
    // 4. Інакше перейти до наступного елементу
  }

  // 5. Повернути отриманий масив
  return result;
};
```

Давайте спростимо це рішення за допомогою вбудованих методів масиву.

Першим кроком є фільтрація елементів вхідного масиву, щоб відсіяти нецифрові значення. Для цього ми можемо використати вбудований метод масиву `filter`. Метод `filter()` є ітеративним методом. Він викликає надану функцію один раз для кожного елемента в масиві та створює новий масив усіх значень, для яких повертає `truthy` значення. Елементи масиву, які не пройшли перевірку, не включаються в новий масив. Тобто:

```js
const result = products.filter(element => parseInt(element) > 0);
```

В цьому випадку ми передаємо `callback` функцію як аргумент для методу `filter`. [Згідно з MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) ми створюємо [замикання](https://uk.wikipedia.org/wiki/Замикання_(програмування)). Замикання — це комбінація функції, об’єднаної (включеної) з посиланнями на її навколишній стан (лексичне середовище). Іншими словами, замикання дає вам доступ до зовнішньої області видимості внутрішньої функції. Для нас то важливо, бо так само ми можемо передати й глобальні функції. В цьому випадки ми хочемо перевірити на "правдивість", або [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) строково-числові значення. Це також можна зробити передав в якості аргументу глобальний обʼєкт [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number). Конструктор `Number` містить константи та методи для роботи з числами, а значення інших типів можна перетворити на числа за допомогою функції Number(). Тобто:

```js
const result = products.filter(Number);
```

Таким чином, ми отримаємо наступне:

```js
["1", null, "3", "", 99, null, , "0"].filter(Number)
// => ["1", "3", 99]
```

Це майже те, що нам потрібно, залишилось тільки перетворити всі значення на тип `string`. Це можна зробити за допомогою вбудованого методу `map` та конструктору `String`, як у попередньому прикладі. Метод `map()` є ітераційним методом. Він викликає надану функцію один раз для кожного елемента в масиві та створює новий масив із результатів. Тобто:

```js
const result = products.filter(Number).map(String);
```

І на останок, можна прибрати кінцевий `return` і перетворити все як `arrow function`. Тому кінцевий варіант функції має наступний вигляд:

```js
const shoppingCart = (products = []) =>
  products.filter(Number).map(String);
```

## Корисні посилання

1. [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
1. [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
1. [Pass a JavaScript function as parameter](https://stackoverflow.com/questions/13286233/pass-a-javascript-function-as-parameter)
1. [Javascript, pass type as parameter in functions](https://stackoverflow.com/questions/35205059/javascript-pass-type-as-parameter-in-functions)
