# groupBy

Потрібно реалізувати функцію для групування об'єктів масиву `groupBy`, за допомогою колекції Map.

Функція приймає два параметри:

- масив об'єктів `arr`
- ключ `key`, ключ елементу по якому потрібно згрупувати.

**Приклад:**

```js
groupBy([{ id: 1, name: "George", id: 2, name: "Oleg" }], "name");
```

А результатом виконання функції буде згруповану колекцію елементів.

```js
new Map([
  ["George", [{ id: 1, name: "George" }]],
  ["Oleg", [{ id: 2, name: "Oleg" }]],
]);
```

Також функція повинна вертати методи колекції Map по яким можна взяти потрібну зрупу

```js
groupBy([{ id: 1, name: "George", id: 2, name: "Oleg" }], "name").get("Oleg"); // результат  [{id: 2, name: "Oleg"}]
```

<details>
  <summary>Підказка</summary>
---

Зверніть увагу на:
Вбудовану колекцію [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).
Метод масиву [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

</details>
