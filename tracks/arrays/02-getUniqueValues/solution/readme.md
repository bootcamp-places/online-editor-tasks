# getUniqueValues

Розв'язання цієї задачі може виглядати ось так:

```js
const getUniqueValues = (arr = []) => [...new Set(arr)];
```

Можуть бути різні варіанти розв'язання цієї задачі, 
один з багатьох - це використання колекції [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set). 

Зверніть увагу, що такий підхід спрацює лише з примітивними значеннями.

Через те що в `Set` кожне значення може бути збережене лише раз, ми отримаємо
колекцію унікальних значень.

На першому кроці ми наповнюємо колекцію `Set` даними масиву:

```js
new Set(arr)
```

Після чого ми перетворюємо колекцію унікальних значень на масив за допомогою 
[spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

```js
[...new Set(array)]
```
