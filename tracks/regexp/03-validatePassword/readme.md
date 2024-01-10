# validatePassword

Ви працюєте на сторінкою реєстрації нових користувачів. Вам необхідно написати функцію `validatePassword` для перевірки валідності пароля, згідно з обмеженнями безпеки Password Policy (див. нижче). Функція приймає на вхід рядок `password` і повертає `true` або `false`.

_Увага_: В цьому завданні потрібно розробити дуже просту перевірку, перевіряти надійність паролю згідно RFC 4086 наразі не будемо 🤖

Правила "Password Policy":

- 8 або більше символів (довжина паролю)
- 2 літери латини в Upper Case
- 3 літери латини в Lower Case
- 1 спеціальний символ `!@#$&*`
- 1 цифра (0-9)

**Приклад:**

```js
validatePassword("password"); // => false
validatePassword("P@ssw0rD"); // => true
```

<details>
  <summary>Підказка</summary>

___

  Найпростішим варіантом перевірки є використання [Positive lookahead](https://www.regular-expressions.info/lookaround.html).

  Для тестування свого виразу зручно користуватись [regex101](https://regex101.com/).

  1. [MDN: Assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)
  1. [Lookahead and lookbehind](https://javascript.info/regexp-lookahead-lookbehind)

</details>
