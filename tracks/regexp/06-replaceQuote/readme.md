# replaceQuote

Ваша команда отримала задачу по міграції бази даних на нову платформу. Ваша задача - написати функцію, яка приймає рядок з текстом англійською мовою і замінює у ньому одинарні лапки на подвійні. Текст може містити одинарні лапки, які не є символами лапок (на приклад, `don't` чи `Arnold's`). В такому випадку лапки не потрібно замінювати.

_Увага:_ В наведених тест кейсах, одинарні лапки на кінці слова завжди використовуються для при обрамлені тексту і ніколи як частина слова (на приклад, **немає** `These persons' food.`).

**Приклад:**

```js
replaceQuote("'string should be converted'"); // "string should be converted"
replaceQuote("Some 'definitions' are possible."); // Some "definitions" are possible.
replaceQuote("I'm the cook, it's my job."); // I'm the cook, it's my job.
```

<details>
  <summary>Підказка</summary>

___

  Для тестування свого виразу зручно користуватись [regex101](https://regex101.com/).

  1. [MDN: Assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)
  1. [MDN: RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

</details>
