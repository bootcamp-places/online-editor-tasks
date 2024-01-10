# revertCase

Необхідно реалізувати функцію `revertCase`, яка приймає в якості аргументу стрічку, а
повертає нову стрічку в якій кожна літера змінила регістр.

**Приклад:**

```js
revertCase('Hello World'); // hELLO wORLD
```

**🧐 Зверніть увагу:**

Стануть в пригоді наступні методи:

* MDN: [String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
* MDN: [String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)


<details>
  <summary>Підказка</summary>

  ___
  
  Стрічку, яку приймає функція, необхідно проітерувати, або іншими словами - перебрати,
  літеру за літерою, за допомогою циклу [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#iterating_over_a_string),
  та на кожному кроці ітерації прийняти рішення чи треба літеру перетворити на велику або малу.
</details>
