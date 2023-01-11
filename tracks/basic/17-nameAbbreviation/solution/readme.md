# nameAbbreviation

Розв'язання цієї задачі згідно запропонованого алгоритму може виглядати ось так:

```js
const nameAbbreviation = (firstName = "", lastName = "") => {
  // 1. Відокремити першу літеру `firstName`
  const firstLetter = firstName.charAt(0);
  // 2. Відокремити першу літеру `lastName`
  let lastLetter = lastName.charAt(0);
  // 3. Якщо `lastName` не містить першої літери,
  if (lastLetter === "") {
    // то замінити на "."
    lastLetter = ".";
  }
  // 4. Обʼєднати отримані частини
  let abbreviation = firstLetter.concat(lastLetter);
  // 5. Перевести отримане слово у верхній регістр
  abbreviation = abbreviation.toLocaleUpperCase();
  // 6. Повернути результат
  return abbreviation;
};
```

Давайте спростимо це рішення.

По-перше, можемо використовувати метод [at](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at), замість `charAt`, оскільки він є більш новим. Метод `at()` приймає ціле значення та повертає новий рядок, що складається з однієї одиниці коду UTF-16, розташованої на вказаному зміщенні. Для нашого випадку можна було б також використати ітератор [String.prototype[@@iterator]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator), тобто `firstName[0]`. Тільки слід памʼятати, що рядки ітеруються за кодовими точками Unicode, тобто кластери графем будуть розділені, але сурогатні пари збережуться.

```js
const firstLetter = firstName.at(0);
```

Наступним кроком, можна замінити `if` на оператор "або" `||` і повернути результат. В цьому випадку, ми маємо виділити перший символ з `lastName`, і якщо він є `falsy`, то виконати дію після `||` - присвоєння символа крапки.

```js
const lastLetter = lastName.charAt(0) || ".";
```

Метод `toLocaleUpperCase()` повертає значення рядка, перетворене у верхній регістр, відповідно до будь-якого зіставлення регістру, специфічного для локалі. У більшості випадків це дасть той самий результат, що й `toUpperCase()`, але для деяких локалізацій, таких як турецька, чиє відображення регістру не відповідає відображенню регістру за замовчуванням у Unicode, може бути інший результат. Але для нашого випадку можна використати `toUpperCase`.

Оскільки ми одразу можемо обʼєднати результат через оператор "+" (string concatination), то нам непотрібні тимчасові змінні `firstLetter` і `lastLetter`. Також приберемо непотрібний `return` у стрілочної функції і отримаємо:

```js
const nameAbbreviation = (firstName = "", lastName = "") =>
  (firstName.at(0) + (lastName.at(0) || ".")).toUpperCase();
```

У випадку, коли вам буде потрібно оброблювати гліфи та графеми, зверніть увагу на вбудований обʼєкт [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl). Цей конструктор інтернаціоналізації містить методи, що є чутливі до мови інших конструкторів і використовують загальний шаблон для ідентифікації локалей і визначення того, який вони фактично використовуватимуть, також підтримують алгоритми, чутливі до граматики мови.

Приклад:

```js
const str = "吾輩は猫である。";
const segmenterJa = new Intl.Segmenter('ja-JP', { granularity: 'word' });

const segments = segmenterJa.segment(str);
console.table(Array.from(segments));

/*
0: '吾輩'
1: 'は'
2: '猫'
3: 'で'
4: 'ある'
5: '。'
*/
```
