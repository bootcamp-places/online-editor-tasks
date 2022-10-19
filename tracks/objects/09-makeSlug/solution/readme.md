# makeSlug

Розв'язання цієї задачі може виглядати ось так:

```js
export const makeSlug = (string = "") => {
  return string
    .toLowerCase()
    .replace(/а/g, "a").replace(/б/g, "b").replace(/в/g, "v").replace(/г/g, "h")
    .replace(/ґ/g, "g").replace(/д/g, "d").replace(/е/g, "e").replace(/є/g, "ie")
    .replace(/ж/g, "zh").replace(/з/g, "z").replace(/и/g, "y").replace(/і/g, "i")
    .replace(/ї/g, "yi").replace(/й/g, "i").replace(/к/g, "k").replace(/л/g, "l")
    .replace(/м/g, "m").replace(/н/g, "n").replace(/о/g, "o").replace(/п/g, "p")
    .replace(/р/g, "r").replace(/с/g, "s").replace(/т/g, "t").replace(/у/g, "u")
    .replace(/ф/g, "f").replace(/х/g, "kh").replace(/ц/g, "c").replace(/ч/g, "ch")
    .replace(/ш/g, "sh").replace(/щ/g, "shch").replace(/ю/g, "iu").replace(/я/g, "ia")
    .replace(/ /g, "-")
    .replace(/[.,!:?]/g, "_");
};
```

## Алгоритм дій:

1. Перевести строку в нижній регістр
1. Знайти всі українськи літери і замінити на латину, згідно таблиці
1. Замінити символи, згідно умови

Для того, щоб вирішити задачу найпростішим способом, нам необхідно перебрати всі символи вихідної строки один за одним і, якщо то літера, то привести до нижнього регістру та замінити на згідно з таблицею, в іншому випадку - згідно з умовою задачі. Рішення може бути таким.

```js
export const makeSlug = (string = "") => {
  let res = ""; // Тут будемо зберігати результат
  // Для кожного символа вихідної строки,
  for (let i = 0; i < string.length; i++) {
    const s = string[i].toLowerCase(); // приведеної до прописної
    if (s === "а") { // Перевірити згідно таблиці перетворення
      res += "a"; // і додати до кінцевого результату
    } else if (s === "б") {
      res += "b";
      // і так далі, для всіх інших літер
    } else if (s === "я") {
      res += "ia";
    } else if (s === " ") { // Символи трансформувати також
      res += "-";
    } else if (s === "." || s === "," || s === "!" || s === "?" || s === ":") {
      res += "_";
    } else { // Інакше додати поточний символ
      res += s;
    }
  }
  // І повернути отриману строку
  return res;
};
```

Також такий перебір символів можна зробити, перетворивши строку на масив і далі, наприклад, методом `map` обробити кожний елемент, а отримане значення обʼєднати знов у строку і повернути. Але для заданих умов задачі є більш елегантні способи. Розглянемо їх.

Можна використати вбудований метод строки `replaceAll`. Метод `replaceAll(pattern, replacement)` повертає новий рядок із усіма збігами шаблону `pattern`, заміненими на заміну `replacement`. Шаблон може бути рядком або регулярним виразом, а заміна може бути рядком або функцією, яка викликається для кожного збігу. Оригінальний рядок залишається без змін. Таким чином, рішення буде мати наступний вигляд.

```js
export const makeSlug = (string = "") => {
  let res = string; // Зробити копію вихідної строки
  res = res.toLowerCase(); // Перевести строку у нижній регістр
  // Трансформувати всі елементи строки згідно з завданням
  res = res
    .replaceAll("а", "a")
    .replaceAll("б", "b")
    // всі інші літери
    .replaceAll("я", "ia")
    .replaceAll(" ", "-")
    .replaceAll(".", "_")
    .replaceAll(",", "_")
    .replaceAll("!", "_")
    .replaceAll(":", "_")
    .replaceAll("?", "_");
  // Повернути отриманий результат
  return res;
};
```

Це рішення виглядає коротшим, але має свої недоліки. Метод `replaceAll` підтримується тільки починаючи з Node 15 і Chrome 85, а в IE такого метода взагалі немає, якщо в продакшн коді необхідно зробити, щоб ця функція працювала, то можна використати ["поліфіл"](https://uk.wikipedia.org/wiki/Поліфіл) для цього методу [Polyfill of String.prototype.replaceAll in core-js](https://github.com/zloirock/core-js#ecmascript-string-and-regexp), або ж скористатися методом `replace`.

Метод `replace` повертає новий рядок з одним, деякими або всіма збігами шаблону, заміненими на заміну. Шаблон може бути рядком або RegExp, а заміна може бути рядком або функцією, що викликається для кожного збігу. Якщо шаблон є рядком, буде замінено лише перше входження. Оригінальний рядок залишається без змін.

Якщо в якості "шаблону" використовувати строку (як в попередньому рішенні), то метод `replace` замінить тільки одним перший знайдений символ, а нам потрібно замінити всі літери і символи, тому будемо використовувати регулярні вирази. Тобто, замінити `replaceAll('ї', 'yi')` на `replace(/ї/g, 'yi')`.

**Увага:** Якщо шаблон є регулярним виразом, він повинен мати встановлений глобальний прапор (g), інакше буде викинуто TypeError.

```js
export const makeSlug = (string = "") => {
  let res = string;
  res = res.toLowerCase();
  res = res
    .replace(/а/g, "a")
    .replace(/б/g, "b")
    // всі інші літери
    .replace(/я/g, "ia")
    .replace(/ /g, "-")
    .replace(/[.,!:?]/g, "_");
  return res;
};
```

Недоліком такого прямого підходу є те, що зміни необхідно вносити прямо у "реплейсер", шукаючи де саме. Таке рішення дуже складно розширити. Наприклад, якщо нам необхідно, щоб ця функція мала декілька стратегій створення slug URL, то тоді треба робити копію. А якщо необхідно додати ще одну мову, то знову - робити копію, і то вже буде декілька копій (для стратегій і для мов), які необхідно підтримувати паралельно. Тому більш вірним, з т.з. архітектури, підходом буде рознести цю одну велику функцію на окремі так, щоб кожна нова функція відповідала тільки за одну задачу (перебрати вихідну строку чи прийняти рішення по заміні літер).

```js
const replacer = (symbol) =>
  symbol
    .replace("а", "a")
    .replace("б", "b")
    // Всі інші літери
    .replace("я", "ia");

export const makeSlug = (string = "") => {
  let res = string;
  res = res
    .toLowerCase()
    .replace(/[а-ґ]/g, replacer)
    .replace(/ /g, "-")
    .replace(/[.,!:?]/g, "_");
  return res;
};
```

**Увага:** Зверніть увагу на строку `.replace(/[а-ґ]/g, replacer)`, тут записані літери стандартної кирилиці плюс розширення абетки згідно зі [стандартом UTF-8](https://uk.wikipedia.org/wiki/UTF-8). Тобто символи від "а" до "я", а також додатково "ї" та "ґ".

Як було зазначено вище, якщо нам потрібно підтримувати декілька мов, то буде потреба розширяти як функцію `replacer`, так і вираз, де ця функція використовується. Тому наше рішення можна зробити ще більш гнучким за рахунок використання структури даних "Словник" (є й інші назви, наприклад, "асоціативний масив", або "хеш таблиця"). Рішення буде виглядати наступним чином.

```js
const dictionaryUA = {
  а: "a", б: "b", в: "v", г: "h",
  ґ: "g", д: "d", е: "e", є: "ie",
  ж: "zh", з: "z", и: "y", і: "i",
  ї: "yi", й: "i", к: "k", л: "l",
  м: "m", н: "n", о: "o", п: "p",
  р: "r", с: "s", т: "t", у: "u",
  ф: "f", х: "kh", ц: "c", ч: "ch",
  ш: "sh", щ: "shch", ю: "iu", я: "ia"
};

// В цю функцію можна передавати словник, за допомогою якого робити конвертацію,
// але зараз в нас використовується завжди той самий
const replacer = (symbol) => dictionaryUA[symbol] ?? symbol;

export const makeSlug = (string = "") => {
  let res = string;
  res = res
    .toLowerCase()
    .replace(/[а-ґ]/g, replacer) // тут можна зазначити перелік символів для конвертації і як то робити
    // Використовуючи різні функції "реплейсери", можна змінювати стратегію трансформації
    .replace(/ /g, "-")
    .replace(/[.,!:?]/g, "_");
  return res;
};
```

**Увага:** Зверніть увагу, що ключ словника не обовʼязково брати в лапки, тому що JavaScript підтримує UTF-8 для цих значень (для змінних також, тому ми могли б писати `const словникУА = {}` і то працювало б 😅)

## Корисні посилання

[String.prototype.replaceAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)

[String.prototype.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

["Regular expression syntax cheatsheet"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)

"Словник", або ["Асоціативний масив"](https://uk.wikipedia.org/wiki/Асоціативний_масив)