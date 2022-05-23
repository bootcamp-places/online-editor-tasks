# uniqueValues

Розв'язання цієї задачі може виглядати ось так:

```js
 const uniqueValues = (array = []) => [...new Set(array)]
```

Можуть бути різні варіанти імплементації цієї функції, але найшвидший це використати колекцію [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

Так як в [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) кожне значення може бути збережене лише раз, то ми отримаємо колекцію унікальних значеннь, які повторюються лише 1 раз.
Тобто ми перетворюємо масив у [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) колекцію (в якій значення будуть присутні лише 1 раз), яку зразу ж перетворюємо назад у массив використовуючи [spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) оператор 

```
[...new Set(array)]
```