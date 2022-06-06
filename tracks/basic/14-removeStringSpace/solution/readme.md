# removeStringSpace

Розв'язання цієї задачі може виглядати ось так:

```js
export const removeStringSpace = (str = '') => {
  return str.replace(/\s/g, '');
};
```

* Можна звернути увагу на метод [trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim),
яки який дозволяє видалити пробільні символи на початку і на прикінці стрічки,
але в нього є обмеження - він не працює з пробільними символами в середині стрічки, 
тому для вирішення данної задачі підійде метод [replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

Метод replace може приймати першим аргументом як стрічку, так і 
регулярні вирази (що ми і бачимо в даному рішенні).
Регулярний вираз - це спеціальні коди для пошуку шаблонів у стрічках.
Регулярні вирази застосовують для перевірки коректності вводу тексту 
(email, номер тел. і т.п.), для заміни одного тексту на інший, для пошуку тексту.
**/\s/g** - це регулярний вираз, який знаходить всі пробіли в стрічці, 
складається з патерну (pattern) - **/\s/** та прапору (flag) - **g**.
[Детальніше про регулярки](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

