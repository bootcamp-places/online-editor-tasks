# arrayContains

У JavaScript є багато способів вирішити цю задачу. Ми розглянемо розвʼязання за допомогою циклу `for..of` з використанням [імперативної парадигми](https://uk.wikipedia.org/wiki/Імперативне_програмування) програмування, за допомогою методу `forEach` і [функційної парадигми](https://uk.wikipedia.org/wiki/Функційне_програмування) та за допомогою методу `filter`.

1. Рішення, за допомогою циклу `for..of` може виглядати ось так:

```js
const arrayContains = (emails = [], domain = "") => {
  const results = [];
  // 1. Для кожного елементу масиву `emails`, перевірити
  for (const email of emails) {
    // 2. Якщо елемент містить підрядок `domain`, то
    if (email.includes(domain)) {
      // 3. Додати цей елемент до результату
      results.push(email);
    }
  }
  // 4. Повернути результат
  return results;
};
```

2. Рішення, за допомогою методу `for..of` може виглядати ось так:

```js
const arrayContains = (emails = [], domain = "") => {
  const results = [];
  // 1. Для кожного елементу масиву `emails`, перевірити
  emails.forEach((email) => {
    // 2. Якщо елемент містить підрядок `domain`, то
    if (email.includes(domain)) {
      // 3. Додати цей елемент до результату
      results.push(email);
    }
  });
  // 4. Повернути результат
  return results;
};
```

3. Рішення, за допомогою методу `filter` може виглядати ось так:

```js
const arrayContains = (emails = [], domain = "") => {
  // 1. Для кожного елементу масиву `emails`, перевірити
  return emails.filter(
    (email) =>
      // 2. Якщо елемент містить підрядок `domain`, то
      email.includes(domain)
    // 3. Додати цей елемент до результату
  ); // 4. Повернути результат
};
```

## Корисні посилання

1. [Internationalized domain name](https://en.wikipedia.org/wiki/Internationalized_domain_name)
1. [Internationalized Domain Names (IDN) FAQ](https://unicode.org/faq/idn.html)
