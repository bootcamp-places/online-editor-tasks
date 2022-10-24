# updateSemVer

Розв'язання цієї задачі може виглядати ось так:

```js
const updateSemVer = (currentVersion = "", element = "") => {
  // 1. Розділити строку версії на елементи
  const updatedVersion = currentVersion.split(".");
  switch (element) {
    case "major":
      // 2. Збільшити вказаний елемент на 1
      updatedVersion[0] = parseInt(updatedVersion[0]) + 1;
      // 3. Меншим елементам присвоїти 0
      updatedVersion[1] = 0;
      updatedVersion[2] = 0;
      break;
    case "minor":
      updatedVersion[1] = parseInt(updatedVersion[1]) + 1;
      updatedVersion[2] = 0;
      break;
    default: // "patch"
      updatedVersion[2] = parseInt(updatedVersion[2]) + 1;
      break;
  }
  // 4. Обʼєднати отримане значення в строку і повернути
  return updatedVersion.join(".");
};
```

Розглянемо дане рішення та зробимо деякі оптимізації.

Перший шаг алгоритму звучить так: "Розділити строку версії на елементи", що і зроблено з використанням оператору `split` (в якості сепаратору виступає символ ".", згідно зі специфікацією SemVer):

```js
const updatedVersion = currentVersion.split(".");
```

Наступним кроком нам необхідно визначити який саме елемент версії необхідно збільшити, для чого використовується конструкція `switch - case`. Дане визначення можна зробити і за допомогою оператора `if` але вважається, що для випадків, коли є дві і більше умов, оператор `switch` є більш зручним для читання і сприйняття. Тому була використана саме ця конструкція.

Оператор `switch` обчислює вираз, зіставляючи значення виразу з серією пропозицій `case`, і виконує оператори після першого речення `case` із відповідним значенням, доки не зустрінеться оператор `break`. Якщо жоден регістр не відповідає значенню виразу, буде виконано перехід до `default` - пропозиції за замовчуванням оператора `switch`.

```js
switch (element) {
  case "major":
    // ...
    break;
  case "minor":
    // ...
    break;
  default: // "patch"
    // ...
    break;
}
```

Наступним кроком є "Збільшити вказаний елемент на 1". Розберемо це на прикладі "major", оскільки для всіх інших випадків рішення є аналогічним.

```js
updatedVersion[0] = parseInt(updatedVersion[0]) + 1;
```

Так як ми отримали з вхідної строки масив, то кожний елемент масиву відповідає значенням:

- 0: major
- 1: minor
- 2: patch

І для випадку "major" нам необхідно інкрементувати елемент з індексом 0. Далі, згідно з алгоритмом, необхідно "меншим елементам присвоїти 0".

```js
updatedVersion[1] = 0;
updatedVersion[2] = 0;
```

Останнім кроком нам необхідно "Обʼєднати отримане значення в строку і повернути", що ми зробили за допомогою оператора `join` (в якості сепаратору, як і раніше, виступає символ ".", згідно зі специфікацією SemVer):

```js
return updatedVersion.join(".");
```

Якщо подивитись на код ретельніше, то можна побачити, що ми використовуємо `parseInt` на кожному кроці. Тому першою оптимізацією може бути перетворення строкових значень на цифрові одразу, при створення масиву наступним чином:

```js
const updatedVersion = currentVersion.split(".").map(x => +x);
```

В результаті цього ми зможемо одразу інкементувати значення елементу. Наприклад так:

```js
updatedVersion[0] = ++updatedVersion[0];
```

Наступною оптимізацією може бути використання [деструктуризаційного присвоєння](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), завдяки чому ми зможемо замінити абстрактні індекси на змінні. Таким чином ми позбудемося поганої практики "магічних цифр".

```js
const [major, minor, patch] = currentVersion.split(".").map(x => +x);
```

А тепер можна створювати запис з кінцевим значенням номеру версії, використовуючи інкременти елементів так:

```js
updatedVersion[0] = major + 1;
```

Але якщо не використовувати константи для деструктуризації, то можна інкрементувати прямо на місці. Більш того, тепер можна записувати значення версії одразу. Таки чином рішення прийме наступний вигляд:

```js
export const updateSemVer = (currentVersion = "", element = "") => {
  let [major, minor, patch] = currentVersion.split(".").map(x => +x);
  let updatedVersion;

  switch (element) {
    case "major":
      updatedVersion = [++major, 0, 0];
      break;
    case "minor":
      updatedVersion = [major, ++minor, 0];
      break;
    default: // "patch"
      updatedVersion = [major, minor, ++patch];
      break;
  }

  return updatedVersion.join(".");
};
```

## Корисні посилання

[String.prototype.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

[Array.prototype.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

[The switch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

[Magic Numbers](https://en.wikipedia.org/wiki/Magic_number_(programming))
