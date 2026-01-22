# getStringFromNestedObject

Необхідно написати ф-цію яка із вкладеного об"єкта поверне значення останього.
Тобто якщо у нас є об"єкт який виглядає ось таким чином => {white: {beautiful: {puppy: 'Here is a puppy'}, то потрібно повернути значення останього, яким є puppy, значення якого 'Here is a puppy'. => ф-ція повертає 'Here is a puppy'.

Ф-ція приймає 2 агрументи:

1. Стрічка зі словами через крапку, де слова - це ключі об"єкта. => 'white.beautiful.puppy'
2. Вкладенний об"єкт, де останній вкладенний об"єкт містить стрічку, яку необхідно повернути => {white: {beautiful: {puppy: 'String to return'}}};

**Приклад:**

```js
// [код прикладу використання]
getStringFromNestedObject("white.beautiful.puppy", {
  white: { beautiful: { puppy: "String to return" } },
});
```

<details>
  <summary>Підказка</summary>

---

Зверніть увагу не метод стрічки split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

</details>
