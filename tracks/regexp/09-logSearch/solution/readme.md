# logSearch

Розв'язання цієї задачі може виглядати ось так:

```js
const logSearch = (logs = "") => {
  // 1. Знайти рядок, який починається зі слова "warning".
  const warningString = logs.match(/warning: user '(.+?)'/);
  // 2. Інакше повернути порожній рядок.
  if (!warningString) {
    return "";
  }
  // 3. Запамʼятати імʼя користувача, якого стосується цей запис.
  const username = warningString[1];
  // 4. Знайти рядок, який починається зі слова "user_name" і містить імʼя користувача та передує данному.
  const endsAt = warningString.index;
  const startFrom = logs.lastIndexOf(`user_name:`, endsAt);

  const userIP = logs
    // Не потрібно шукати по всіх попередніх, а необхідно знайти саме попередній.
    .slice(startFrom, endsAt)
    // 5. Повернути IP-адресу користувача, який здійснив підозрілу дію.
    .match(new RegExp(`user_name: .+? '*(.+?)'* '${username}'`));

  return userIP[1];
};
```

Давайте розберемо цей код.

## 1. Знайти рядок, який починається зі слова "warning"

```js
const warningString = logs.match(/warning: user '(.+?)'/);
```

Ми шукаємо рядок, який починається зі слова "warning" і містить імʼя користувача. Імʼя користувача може містити пробіли, тому ми використовуємо `(.+?)` для знаходження будь-якого рядка, який містить хоча б один символ. Це регулярне вирази, які ми використовуємо в цій задачі, використовуються для знаходження підстроки в рядку.

## 2. Інакше повернути порожній рядок

```js
if (!warningString) {
  return "";
}
```

Якщо ми не знайшли рядок, який починається зі слова "warning", ми повертаємо порожній рядок.

## 3. Запамʼятати імʼя користувача, якого стосується цей запис

```js
const username = warningString[1];
```

Ми знаходимо імʼя користувача, яке знаходиться в другому елементі масиву, який повертається методом `match`. Більше детально про це можна дізнатися [тут](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match).

## 4. Знайти рядок, який починається зі слова "user_name" і містить імʼя користувача та передує данному

```js
const endsAt = warningString.index;
const startFrom = logs.lastIndexOf(`user_name:`, endsAt);
```

Нам необхідно обмежити пошук рядка, який починається зі слова "user_name" і містить імʼя користувача та передує данному. Для цього ми використовуємо метод `lastIndexOf`, який повертає індекс останнього входження підстроки в рядок. Якщо підстрока не знайдена, повертається `-1`. Ми використовуємо це для того, щоб перевірити, чи знайшли ми рядок, який починається зі слова "user_name" і містить імʼя користувача та передує данному.

## 5. Повернути IP-адресу користувача, який здійснив підозрілу дію

```js
const userIP = logs
  // Не потрібно шукати по всіх попередніх, а необхідно знайти саме попередній.
  .slice(startFrom, endsAt)
  // 5. Повернути IP-адресу користувача, який здійснив підозрілу дію.
  .match(new RegExp(`user_name: .+? '*(.+?)'* '${username}'`));
return userIP[1];
```

Для початку ми виділяємо фрагмент тексту, у якому будемо робити пошук, бо користувач міг заходити на сайт раніше з інших IP-адрес, тому нам потрібен саме останній запис. Далі ми шукаємо IP-адресу користувача, який здійснив підозрілу дію. Це робиться за допомогою регулярного виразу `'*(.+?)'*`. Це означає:

- `'*` - тобто на початку або кінці фрагменту можуть бути одинарні лапки (для IPv6) або нічого (для варіанту з IPv4);
- `(.+?)` - запамʼятати увесь фрагмент між одинарними лапками (якщо вони є), він буде першим елементом масиву, який поверне метод `match`;

В реальному проекті необхідно враховувати, що результат `match` може бути `null`, тому необхідно це перевіряти.