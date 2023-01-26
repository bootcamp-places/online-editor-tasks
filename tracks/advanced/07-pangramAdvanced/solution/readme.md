# pangramAdvanced

Розв'язання цієї задачі може виглядати ось так:

```js
const pangramAdvanced = (text = "") => {
  const alpha = ["а", "б", "в", "г", "ґ", "д", "е", "є", "ж", "з", "и", "і", "ї", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ь", "ю", "я"];
  const extraSet = [".", "!", "-", "ʼ", " "];

  const fragment = text.toLowerCase();
  const fragmentWithoutSymbols = fragment.match(/[а-ґʼ]/gi);
  const letters = alpha.filter((letter) => ![...fragment].includes(letter));
  const symbols = extraSet.filter((symbol) => ![...fragment].includes(symbol));

  return {
    length: fragmentWithoutSymbols?.length || 0,
    letters,
    symbols,
  };
};
```

В кінці коду можна побачити [shorthand property name](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#property_definitions):

```js
return {
  length: fragmentWithoutSymbols?.length || 0,
  letters,
  symbols,
};
```

В цьому випадку замінюється запис виду `{ a: a}` на скорочену форму `{a}`.

Як видно, для створення `letters` та `symbols` використовується майже ідентичний код, тому це є перший кандидат до [рефакторингу](https://uk.wikipedia.org/wiki/Рефакторинг). Виділимо колбек-функцію у окрему:

```js
const comparison = item => ![...fragment].includes(item);
```

Також можна виділити у окрему функцію і фільтрацію:

```js
const filter = array => array.filter(comparison)
const letters = filter(alpha);
const symbols = filter(extraSet);
```

Якщо ми працюємо над реальним проектом, то можна код залишити в такому вигляді, бо він є достатньо читаемий (code readability) та підтримуємий (code maintenance). Але у випадку, коли у нас є тільки короткий модуль, який не буде розширятись, то ми можемо скоротити його до наступного вигляду:

```js
export const pangramAdvanced = (text = "") => {
  const alpha = ["а", "б", "в", "г", "ґ", "д", "е", "є", "ж", "з", "и", "і", "ї", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ь", "ю", "я"];
  const extraSet = [".", "!", "-", "ʼ", " "];

  const fragment = text.toLowerCase();
  const filter = (array) =>
    array.filter((item) => ![...fragment].includes(item));

  return {
    length: fragment.match(/[а-ґʼ]/gi)?.length || 0,
    letters: filter(alpha),
    symbols: filter(extraSet),
  };
};
```
