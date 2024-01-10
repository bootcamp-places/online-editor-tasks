# validateCard

Ви працюєте над модулем Оплати Товару для [E-commerce](https://uk.wikipedia.org/wiki/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D0%B0_%D0%BA%D0%BE%D0%BC%D0%B5%D1%80%D1%86%D1%96%D1%8F) аплікації. Вам необхідно написати функцію `validateCard` для перевірки валідності формату номеру кредитної карти, для наданих карток (див. нижче). Функція приймає на вхід рядок `number` і повертає `true` або `false`. Наша платіжна система приймає картки тільки Visa, Master Card та American Express.

_Увага_: В цьому завданні потрібно зробити перевірку тільки формату, перевіряти номер картки згідно алгоритму Луна не потрібно 🤗

Правила:

- Visa: довжина 13 або 16 знаків, починається з 4.
- MasterCard: довжина 16 знаків, починається від 51 до 55.
- American Express: довжина 15 знаків, починається з 34 або 37.

**Приклад:**

```js
validateCard("4111111111111111"); // => true, Visa
validateCard("1234567890"); // => false
```

<details>
  <summary>Підказка</summary>

___

  Для тестування свого виразу зручно користуватись [regex101](https://regex101.com/).

  1. [MDN: Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
  1. [MDN: Assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)

</details>
