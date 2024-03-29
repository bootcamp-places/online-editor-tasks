# validateDate

Розв'язання цієї задачі може виглядати ось так:

```js
const validateDate = (date = "") => {
  const euDate = "^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\\\.(\\\d{2}|\\\d{4})$";
  const usDate = "^(0[1-9]|1[012])/(0[1-9]|[12][0-9]|3[01])/(\\\d{2}|\\\d{4})$";
  const isoDate = "^(\\\d{2}|\\\d{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$";
  const dateRegex = new RegExp(`${euDate}|${usDate}|${isoDate}`);

  return dateRegex.test(date);
};
```

Найпростішим варіантом перевірки дати, згідно заданих умов міг би бути регулярний вираз:

```js
const validateDate = (date) => {
  const regex = /^\d{2}\.\d{2}\.\d{2,4}$/;
  return regex.test(date);
};
```

Але такий варіант не враховує умови формату дати, тому дати виду "99.00.1999" будуть вважатись валідними. Щоб це виправити, потрібно додати додаткові умови:

```js
const validateDate = (date) => {
  const regex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(\d{2}|\d{4})$/;
  return regex.test(date);
};
```

Давайте розглянемо цей вираз детально:

- `^(0[1-9]|[12][0-9]|3[01])` - перевіряємо, що день знаходиться в діапазоні від 1 до 31. Для цього ми використовуємо групу символів `[12][0-9]|3[01]`, яка відповідає будь-якому числу від 10 до 31. Для перевірки числа від 1 до 9 ми використовуємо групу символів `0[1-9]`. Для того, щоб об'єднати ці дві групи символів ми використовуємо оператор `|`, який відповідає оператору `OR` в логічних виразах.
- `\.` - перевіряємо, що між днем та місяцем є крапка.
- `^(0[1-9]|1[012])` - перевіряємо, що місяць знаходиться в діапазоні від 1 до 12. Для цього ми використовуємо групу символів `[01][0-9]|1[012]`, яка відповідає будь-якому числу від 10 до 12. Для перевірки числа від 1 до 9 ми використовуємо групу символів `0[1-9]`. Для того, щоб об'єднати ці дві групи символів ми використовуємо оператор `|`, який відповідає оператору `OR` в логічних виразах.

Таким самим чином ми можемо створити регулярні вирази у форматі US та ISO, тобто `mm/dd/yyyy` та `yyyy-mm-dd`. Але, аби створити фінальний регулярний вираз, нам доведеться писати достатньо довгу строку, яку буде не так легко читати або знайти в ній помилку. Тому ми використаємо шаблонні рядки, щоб зробити цей регулярний вираз більш читабельним:

```js
const validateDate = (date) => {
  const euDate = "^(0[1-9]|[12][0-9]|3[01])\\.(0[1-9]|1[012])\\.(\\d{2}|\\d{4})$";
  const usDate = "^(0[1-9]|1[012])/(0[1-9]|[12][0-9]|3[01])/(\\d{2}|\\d{4})$";
  const isoDate = "^(\\d{2}|\\d{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$";
  const dateRegex = new RegExp(`${euDate}|${usDate}|${isoDate}`);

  return dateRegex.test(date);
};
```

Зверніть увагу на дивну послідовність "`\\`", якої ми не мали у регулярному виразі, що створений через літерал. Це необхідно тому, що в шаблонних рядках ми використовуємо символ `\` для екранування спеціальних символів, але в регулярних виразах ми теж використовуємо символ `\` для екранування і при перетворені рядка у вираз вони видаляються. Щоб вирішити цю проблему, ми використовуємо два символи `\` для екранування спеціальних символів в шаблонних рядках.

Але памʼятайте, найбільш вірним способом перевірити дату на валідність є використання вбудованого об'єкту `Date` 🤗 та його методу `Date.parse()`:

```js
const validateDate = (date) => {
  const parsedDate = Date.parse(date);
  return !Number.isNaN(parsedDate);
};
```

## Корисні посилання

1. [ISO 8601: Date and Time](https://en.wikipedia.org/wiki/ISO_8601)
2. [MDN: Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
3. [MDN: Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)
