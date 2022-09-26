# getStringFromNestedObject

Необхідно написати функцію getStringFromNestedObject яка приймає 2 аргументи:

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
