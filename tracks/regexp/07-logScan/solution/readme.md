# logScan

Розв'язання цієї задачі може виглядати ось так:

```js
const logScan = (logs = "", userName = "") => {
  const regexp = new RegExp(`user_name: \\d{2}\\.\\d{2}\\.\\d{2} \\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3} '${userName}'`, 'g');
  const result = logs.match(regexp);
  return result ? result.length : 0;
};
```

Давайте розглянемо цей код детальніше. Спочатку ми створюємо регулярний вираз, який відповідає наступним умовам:

- `user_name:` - початок рядка
- `\\d{2}\\.\\d{2}\\.\\d{2}` - дата в форматі `dd.mm.yy`
- `\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}` - IP-адреса
- `'${userName}'` - ім'я користувача

Ми будемо шукати саме по такому шаблону, тому що ми точно знаємо, як виглядає бажана строка логів.

Запис `\\d{2}` означає, що після цього символу повинно бути дві цифри, а `\\d{1,3}` - мають бути одна *або* три цифри. Імʼя користувача ми вставляємо у регулярний вираз за допомогою строкового літералу `'${userName}'`. Флаг `g` наприкінці означає, що регулярний вираз повинен шукати всі входження, а не лише перше знайдене.

Після цього ми використовуємо метод `match` для пошуку всіх входжень регулярного виразу у рядку `logs`. Якщо входження знайдено, то повертаємо їх кількість, інакше повертаємо `0`.

## Корисні посилання

- [Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [RegExp.prototype.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [RegExp.prototype.exec()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
