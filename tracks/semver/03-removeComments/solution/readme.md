# removeComments

Розв'язання цієї задачі може виглядати ось так:

```js
const removeComments = (str = "") => {
  const result = [];
  const versions = {};

  str
    .split("\n")
    // 1. Видалити закоментовані строки
    .filter((value) => !value.startsWith("#"))
    // 2. Для кожного запису
    .forEach((element) => {
      const splitIndex = element.indexOf(" ");
      // виділити пакет (модуль)
      const module = element.slice(0, splitIndex);
      // і його версію,
      const versionRange = element.slice(splitIndex + 1);
      // 3. Для кожного пакету
      const isPresent = result.includes(module);
      if (!isPresent) {
        // запамʼятати номер його останньої версії
        result.push(module);
      }
      versions[module] = versionRange;
    });
  // 4. Повернути результат в заданому форматі
  return result
    .map((module) => {
      const versionRange = versions[module];
      return `${module} ${versionRange}`;
    })
    .join("\n");
};
```

Це рішення є простим і зрозумілим. Давайте розглянемо, як його можна оптимізувати з точки зору швидкості роботи, або використаної памʼяті.

По-перше, ми використовуємо тимчасову змінну `result` для збереження проміжного значення с назвами версій пакетів. Цього можна уникнути, якщо замість методу `forEach` використати `reduce`. Таким чином ми отримаємо наступне:

```js
.reduce((accumulator, element) => {
  const splitIndex = element.indexOf(" ");
  const module = element.slice(0, splitIndex);
  const versionRange = element.slice(splitIndex + 1);
  const isPresent = accumulator.includes(module);
  if (!isPresent) {
    accumulator.push(module);
  }
  versions[module] = versionRange;
  return accumulator;
}, [])
```

В цьому фрагменті ми розділяємо назву пакету та його версію за допомогою `slice`. Тобто, спочатку знаходимо перший пробіл, що згідно з умовою і специфікацією відділяє назву, а потім розрізаємо строку. Це можна спростити, використавши метод `match` і регулярний вираз `/(\S*) ([\s\S]*)/`. Тут ми вказуємо, що хочемо отримати дві групи (те, що дужках "()" буде збережено в групу), які розділені пробілом. В описі формату сказано, що може бути один чи декілька пробілів, але це не впливає на наш результат. Для першої групи необхідно захопити всі непусті символи `\S*` (символ "*" означає - будь яка кількість повторень) до першого пробілу. Для другої - набір `[]` або пустих `\s`, або непустих `\S` символів, бо може бути і `>=`, і `,`, що відділяє інтервал версій. Таким чином отримаємо:

```js
const [, module, versionRange] = element.match(/(\S*) ([\s\S]*)/);
```

Ми пропускаємо перший елемент, оскільки метод `match` повертає збігання по регулярному виразу першим значенням (в нашому випадку, цілий запис пакета і інтервалу версій), а потім дві наші бажані групи.

Наступну перевірку

```js
const isPresent = accumulator.includes(module);
if (!accumulator.includes(module)) {
  accumulator.push(module);
}
```

також можна скоротити до однієї строки:

```js
!accumulator.includes(module) && accumulator.push(module);
```

**Увага** Зверніть увагу, що в такому випадку ми ламаємо [правило eslint](https://eslint.org/docs/latest/rules/no-unused-expressions), яке звучить наступним чином "Expected an assignment or function call and instead saw an expression." Наш код буде працювати в цьому випадку, але ми можемо виправити це попередження, якщо використаємо оператор "," і перенесемо цей вираз до `return` наступним чином:

```js
return !accumulator.includes(module) && accumulator.push(module), accumulator;
```

Так само, ми можемо не використовувати тимчасову змінну в останньому методі `map`, скоротивши його до вигляду:

```js
.map((module) => `${module} ${versions[module]}`)
```

Також, можна перенести локальну змінну `const versions` до аргументів нашої функції, що дозволить одразу повертати результат.
Таким чином наше рішення прийме наступний вигляд.

```js
export const removeComments = (str = "", versions = {}) =>
  str
    .split("\n")
    // 1. Видалити закоментовані строки
    .filter((value) => !value.startsWith("#"))
    .reduce((accumulator, element) => {
      // 2. Для кожного запису виділити пакет (модуль) і його версію
      const [, module, versionRange] = element.match(/(\S*) ([\s\S]*)/);
      versions[module] = versionRange;
      return (
        // 3. Для кожного пакету запамʼятати номер його останньої версії
        !accumulator.includes(module) && accumulator.push(module), accumulator
      );
    }, [])
    // 4. Повернути результат в заданому форматі
    .map((module) => `${module} ${versions[module]}`)
    .join("\n");
```

## Корисні посилання

[String.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

[String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

[String.prototype.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
