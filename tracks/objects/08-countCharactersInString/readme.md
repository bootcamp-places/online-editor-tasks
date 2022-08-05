# countCharactersInString

Необхідно реалізувати функцію "countCharactersInString". 
Яка примймає на вхід один аргумент який повиннен бути стрічкою.

Фукнція повинна пропусукати пусті символи у стрічці.

Результатом повин бути об'єкт в якому кожен символ повинен буде ключем, також ключі повинні бути тільки в нижньому регістрі,
а значенням повинно бути кількість одинакових символів.



**Приклад:**

```js
const string = 'Hello World';

countCharactersInString(string); // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
```

<details>
  <summary>Підказка</summary>

  Для перевірки чи в об'єкті вже є ключ можна скористатись оператором `in`
  * MDN: [in operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)


  ---
  Зверніть увагу на методи:
  * MDN: [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
  * MDN: [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
  * MDN: [String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
  * MDN: [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

</details>
