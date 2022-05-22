# removeArrayElement

Розв'язання цієї задачі може виглядати ось так:

```js
const removeArrayElement = (arr = [], index = 0) => {
  const elementsBeforeIndex = arr.slice(0, index);
  const elementsAfterIndex = arr.slice(index + 1, arr.length);

  return [...elementsBeforeIndex, ...elementsAfterIndex];
};
```

Для видалення елементів з масиву існують методи: `pop` та `shift`. 
Метод `pop` - видаляє останній елемент масиву, а метод `shift` - перший елемент.

Але що робити коли є потреба видалити елемент масиву, який знаходиться не вкінці
чи на початку, а десь в середині масиву?

```js
array   : ['a', 'b', 'c', 'd', 'e', 'f'];
indexes :   1    2   (3)   4    5    6
```

Припустимо нам потрібно видалити елемент `c`, який знаходиться за індексом `3`.
Для цього ми можемо взяти від поточного масиву підмасив, або іншими словами,
відокремити частину масиву до необхідного індексу.

```js
beforeElement : ['a', 'b']
indexes       :   1    2
```

А потім відокремити всі елементи, які знаходяться після елементу `c`:

```js
afterElement : ['d', 'e', 'f']
indexes      :   4    5    6
```

Після цього ми можемо об'єднати першу частину "beforeElement" та другу частину 
"afterElement" масиву.

* Для відокремлення частини масиву (взяття підмасиву), можна використати метод [`slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
* Для об'єднання підмасивів, використаємо `...`([spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax))
