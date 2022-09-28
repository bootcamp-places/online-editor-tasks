# logConverting

Розв'язання цієї задачі може виглядати ось так:

```js
export const logConverting = (string = "") => {
  const result = {};
  // 1. Розібрати строку на масив
  const records = string.split("\n");
  records.forEach((record) => {
    // 2. Кожний запис розділити на 3 елементи, згідно умови
    const [date, id, status] = record.split(";");
    // 3. Для кожної дати перевірити, чи зустрічалась вона раніше і, або створити новий запис, або доповняти попередній
    if (!result[date]) {
      result[date] = {};
    }
    // 4. Для кожного ідентифікатору сервера зробити аналогічну перевірку
    const statuses = !result[date][id] ? [] : result[date][id];
    statuses.push(status);
    // 5. Додати повідомлення запису в якості значення
    result[date][id] = statuses;
    // 6. Повторити цикл для всіх записів
  });
  // 7. Повернути отриману строку
  return JSON.stringify(result);
};
```

Розберемо алгоритм дій і приведений варіант рішення, а також спростимо та укоротимо цей код.

Кінцевий результат будемо зберігати в обʼєкті `result`. Будемо використовувати саме вбудовану в JS структуру даних [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), бо він відповідаю структурі данних [Hash Table](https://uk.wikipedia.org/wiki/%D0%93%D0%B5%D1%88-%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8F) і тому буде легко перевірити, чи той чи інший ключ вже існую в цьому обʼєкті.

Оскільки ми маємо строку записів, де кожний запис відділений символом "\n", то будемо працювати з масивом записів, розділив строку за допомогою методу `split`.

```js
const records = string.split("\n");
```

Далі нам необхідно перебрати всі записи з масиву і то можна зробити декількома способами. Оскільки нам не потрібно зараз с цього масиву отримати якийсь результат, то вбудований метод масиву `forEach` нам відходить. Коли ми будемо "скорочувати-покращувати" наш код далі, то використаємо метод `reduce` і я далі поясню чому він тоді підійде краще для того випадку.

```js
records.forEach((record) => {
  // ..
});
```

Розділити строку запису на окремі елементи зручно також за допомогою метода `split` і одразу використаємо [деструктуризаційне присвоєння](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), щоб помістити елементи масиву у змінні.

```js
const [date, id, status] = record.split(";");
```

В JavaScript існує [два способи](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors) звернутись до елементу обʼєкту: через dot нотацію та через bracket нотацію. Другий спосіб підходить для нашого випадку, щоб перевірити ключ, який приходить із змінної, тому це значення невідоме заздалегідь. Тобто будемо мати наступне:

```js
const dog = {
  name: "rex"
}
let key = "name";
dog[key]; // -> 'rex'
// Спробуємо прочитати ключ, якого немає у обʼєкта dog
key = "pace";
dog[key]; // -> undefined
```

Тому ми можемо зробити наступну перевірку:

```js
if (!result[date]) {
  result[date] = {};
}
```

Так само ми можемо прочитати и значення дочірнього обʼєкту як через dot нотацію, так і через bracket нотацію. Тобто:

```js
const dog = {
  bread: {
    name: "rex"
  }
}
const key1 = "bread", key2 = "name";
dog.bread.name; // -> 'rex'
dog[key1][key2]; // -> 'rex'
```

Тому ми бачимо в коді нашого рішення наступне:

```js
result[date][id] = statuses;
```

Давайте зменшимо наше рішення, використовуючи вбудований метод масиву `reduce`.

Метод `reduce()` виконує надану користувачем функцію зворотного виклику «reducer» для кожного елементу масиву в порядку, передаючи значення, що повертається з обчислення для попереднього елемента. Кінцевим результатом запуску редуктора по всіх елементах масиву є одне значення.

Таким чином, можна не використовувати тимчасове значення для результату, а одразу писати в пустий обʼєкт. Тому на виході з методу `reduce` ми отримаємо обʼєкт, який одразу можна повернути з конвертацією його у строку, за допомогою метода `JSON.stringify`;

Крім того, ми можемо одразу додати масив записів в якості значення ключа ідентифікатора, використовуючи `spread syntax` і оператор `nullish coalescing` для перевірки, що такий ключ є.

```js
accumulator[date][id] = [...(accumulator[date][id] ?? []), status];
```

Таким чином рішення прийме вигляд:

```js
export const logConverting = (string = "") =>
  JSON.stringify(
    string.split("\n").reduce((accumulator, record) => {
      const [date, id, status] = record.split(";");
      accumulator[date] = { ...(accumulator[date] ?? {}) };
      accumulator[date][id] = [...(accumulator[date][id] ?? []), status];
      return accumulator;
    }, {})
  );
```

Цей код можна ще трохи зарефакторити, одразу повертаючи результат:

```js
export const logConverting = (string = "") =>
  JSON.stringify(
    string.split("\n").reduce((accumulator, record) => {
      const [date, id, status] = record.split(";");
      return {
        // Повернути уже збереженні на попередніх ітераціях значення
        ...accumulator,
        // переписавши ключ data, який отримано на даній ітерації
        [date]: {
          // Зберегти попередні значення data
          ...(accumulator[date] ?? {}),
          // і оновити новими для id з поточної ітерації
          [id]: [
            ...((accumulator[date] && accumulator[date][id]) ?? []),
            status,
          ],
        },
      };
    }, {})
  );
```

Такий код виглядає елегантно, але його може бути важко зрозуміти. Тому, працюючи в команді, звертайте увагу на рівень обізнаності ваших колег, наскільки їм легко читати такий код, наскільки легко такий код підтримувати. Перед тим, як залишати саме таке рішення в проекті, подумайте, що буде, якщо замість 3 полів буде 33? Чи буде такий варіант простим для читання? Крім того, зверніть увагу, що кожного разу ми робимо копію обʼєкта `accumulator` і то потребує часу і памʼяті. Якщо у нас є обмеження по швидкодії програми, або по обсягу памʼяті, то таке рішення може вийти за рамки обмежень і перший варіант з циклом `forEach` може вийти оптимальним.

## Корисні посилання

[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

[String.prototype.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

[Array.prototype.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

[Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

[Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

[Nullish coalescing operator (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
