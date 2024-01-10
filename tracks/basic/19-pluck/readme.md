# pluck

Необхідно реалізувати функцію `pluck`, яка бере масив об'єктів та повертає масив значень певного поля. Функція не повинна змінювати початковий масив.

**Приклад:**

```js
const users = [{
  name: 'User One',
  age: 39,
  id: 1
}, {
  name: 'User Two',
  age: 27,
  id: 2
}];

pluck(users, 'name'); // ['User One', 'User Two']
```

<details>
  <summary>Підказка</summary>

___

  * Ітеруйте кожен елемент колекції з допомогою метода `map()`, повертаючи значення елемента по переданому ключу.

  Більш детальнеше про метод `map` за посиланням
  * MDN: [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
</details>
