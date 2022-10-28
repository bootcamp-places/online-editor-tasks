# selectVersion

Найпростіше розв'язання цієї задачі може виглядати ось так:

```js
const selectVersion = (targetVersion = "", versionsList = []) => {
  // 1. Розділити бажану версію на елементи
  const version = targetVersion.split(".");
  const majorTarget = parseInt(version[0]);
  const minorTarget = parseInt(version[1]);
  const patchTarget = parseInt(version[2]);
  const result = { major: 0, minor: 0, patch: 0 };

  // 2. Для кожної з версій кандидатів зробити наступну перевірку
  for (let i = 0; i < versionsList.length; i++) {
    const versionCandidate = versionsList[i].split(".");
    const majorCandidate = parseInt(versionCandidate[0]);
    const minorCandidate = parseInt(versionCandidate[1]);
    const patchCandidate = parseInt(versionCandidate[2]);
    // 3. Якщо мажорна версія збігається, то зберегти її
    if (majorCandidate === majorTarget) {
      result.major = majorCandidate;
    }
    // 4. Якщо мінорна версія задана і збігається, то зберегти її
    if (minorCandidate === minorTarget) {
      result.minor = minorCandidate;
    }
    // 5. Якщо мінорна версія не задана, а збережена менша за кандидата, то зберегти її
    if (
      !minorTarget &&
      majorCandidate === result.major &&
      result.minor < minorCandidate
    ) {
      result.minor = minorCandidate;
    }
    // 6. Якщо патч версія задана і збігається, то зберегти її
    if (patchCandidate === patchTarget) {
      result.patch = patchCandidate;
    }
    // 7. Якщо патч версія не задана, а збережена менша за кандидата, то зберегти її
    if (
      !patchTarget &&
      majorCandidate === result.major &&
      minorCandidate === result.minor &&
      result.patch < patchCandidate
    ) {
      result.patch = patchCandidate;
    }
  }

  // 8. Обʼєднати версії кандидати і повернути результат
  return `${result.major}.${result.minor}.${result.patch}`;
};
```

Такий підхід називається [методом "грубої сили"](https://uk.wikipedia.org/wiki/Метод_«грубої_сили»), в цьому випадку ми перебираємо кожний елемент версії і шукаємо ту, яка збігається з бажаною. Зверніть увагу, що на вході ми отримуємо строкове значення, а для порівняння краще використовувати цифрове значення. Згідно заданих умов, нам необхідно порівнювати тільки цифрові значення, що є простим випадком. Як видно з рішення, "патч"-елемент використовує функцію `parseInt`, яка повертає ціле цифрове значення (або ж `NaN`). Ця функція була створена, щоб парсити строкові значення "150px" або "50%" у цифрові, відповідно 150 та 50, тому ми використовуємо саме цю особливість, щоб перетворити "1-alpha" чи "0+123" на 1 та 0 відповідно.

В наданому рішенні декілька раз зустрічається [патерн](https://uk.wikipedia.org/wiki/Шаблони_проєктування_програмного_забезпечення) перетворення строки за допомогою `parseInt`. В таких випадках краще провести [рефакторинг](https://uk.wikipedia.org/wiki/Рефакторинг) коду і виділити такий код у окрему функцію. В нашому випадку використаємо [лямбда-функцію](https://uk.wikipedia.org/wiki/Анонімна_функція).

```js
const [majorTarget, minorTarget, patchTarget] = targetVersion
    .split(".")
    .map(v => parseInt(v));
```

Друга оптимізація, яку ми можемо зробити для зменшення кількості коду, то є оператор `&&`, який відповідає оператору `if`. Наприклад, код `a && console.log(a)` відповідає конструкції:

```js
if (a === true) {
  console.log(a);
}
```

Тому в коді нашого рішення ми можемо зробити заміни, наприклад такі:

```js
majorCandidate === majorTarget && (result.major = majorCandidate);
minorCandidate === minorTarget && (result.minor = minorCandidate);
```

В результаті наше рішення прийме вид:

```js
const selectVersion = (targetVersion = "", versionsList = []) => {
  const [majorTarget, minorTarget, patchTarget] = targetVersion
    .split(".")
    .map((v) => parseInt(v));
  const result = { major: 0, minor: 0, patch: 0 };

  for (let i = 0; i < versionsList.length; i++) {
    const [majorCandidate, minorCandidate, patchCandidate] = versionsList[i]
      .split(".")
      .map((v) => parseInt(v));
    majorCandidate === majorTarget && (result.major = majorCandidate);
    minorCandidate === minorTarget && (result.minor = minorCandidate);

    !minorTarget &&
      majorCandidate === result.major &&
      result.minor < minorCandidate &&
      (result.minor = minorCandidate);

    patchCandidate === patchTarget && (result.patch = patchCandidate);

    !patchTarget &&
      majorCandidate === result.major &&
      minorCandidate === result.minor &&
      result.patch < patchCandidate &&
      (result.patch = patchCandidate);
  }

  return `${result.major}.${result.minor}.${result.patch}`;
};
```

Чи робити саме такі оптимізації, чи ні - вирішуйте у себе в команді. Памʼятайте, ми пишемо код для людей, а JavaScript інтерпретатор оптимізує код для машин.

Це було рішення методом перебору. Але, якщо більш ретельно приглянутись к умові задачі, то можна побачити, що кожного разу нам необхідно відфільтрувати значення версії з більшого до меншого регістру (елементу). Згідно заданих обмежень ми точно знаємо, що мажорна і мінорна версія завжди відбиті крапками та містять один чи два символи. А патч версія містить один чи два цифрові символи і модифікатор завжди відокремлений або символом "-", або "+".

Щоб відокремити постфікс, використаємо `parseInt`, як і раніше. Порівнювати будемо строкові значення, тому можемо використати `indexOf` та `lastIndexOf`, що починати порівняння з початку мінорної версії (після першої крапки) та патч версії (після останньої крапки). А для порівняння будемо використовувати вбудований метод строк `startsWith`.

Тому наше нове рішення прийме вигляд:

```js
const selectVersion = (targetVersion = "", versionsList = []) => {
  // Розділяємо бажану версію на елементи і використовуємо строкове значення
  const [majorTarget, minorTarget, patchTarget] = targetVersion.split(".");
  // Фільтруємо мажорну версія таким чином, що
  const majorCandidate = versionsList
    // якщо вона збігається, то зберігаємо її
    .filter((v) => v.startsWith(majorTarget))
    // і одразу відріжемо постфікс: розділимо по крапкам, парснемо і знову склеїмо
    .map(v => v.split(".").map((v) => parseInt(v)).join("."));
  // Якщо мінорна версія не задана, то
  if (!minorTarget) {
    // повертаємо останнє із відфільтрованих значень, бо то є найсвіжіша версія
    return majorCandidate.pop();
  }
  // Фільтруємо мінорну версію таким чином, що
  const minorCandidate = majorCandidate.filter((v) =>
    // перевіряємо на збіг, починаючи з першої точки
    v.startsWith(minorTarget, v.indexOf(".") + 1)
  );
  // Якщо патч версія не задана, то
  if (!patchTarget) {
    // повертаємо останнє із відфільтрованих значень
    return minorCandidate.pop();
  }
  // Фільтруємо патч версію таким чином, що
  const result = minorCandidate.filter((v) =>
  // перевіряємо на збіг, починаючи з останньої точки
    v.startsWith(patchTarget, v.lastIndexOf(".") + 1)
  );
  // І, нарешті, повертаємо останнє збережене значення
  return result.pop();
};
```

## Корисні посилання

[parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
[Not-A-Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
[String.prototype.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
[String.prototype.lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
[String.prototype.startsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
[WTFJS: parseInt is a bad guy](https://github.com/denysdovhan/wtfjs#parseint-is-a-bad-guy)
[Franziska Hinkelmann: JavaScript engines - how do they even? | JSConf EU](https://www.youtube.com/watch?v=p-iiEDtpy6I)
[JavaScript Engines: The Good Parts™ - Mathias Bynens & Benedikt Meurer - JSConf EU 2018](https://www.youtube.com/watch?v=5nmpokoRaZI)
