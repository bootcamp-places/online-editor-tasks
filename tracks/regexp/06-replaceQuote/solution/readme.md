# replaceQuote

Розв'язання цієї задачі може виглядати ось так:

```js
const replaceQuote = () => {
  return str.replace(/(^|\W)'|'(\W|$)/g, '$1"$2');
};
```

Давайте розберемо цей вираз по частинам:

- `(^|\W)'` - початок рядка або будь-який символ, крім букв, цифр і підкреслення
- `|` - або
- `'(\W|$)` - одинарна лапка, яка не є останнім символом рядка

При цьому ми робимо глобальний пошук, тобто шукаємо всі входження виразу, за допомогою флагу `g`.

Далі ми робимо заміну:

- `$1` - заміна знайденого виразу на перший знайдений символ
- `"` - подвійні лапки
- `$2` - заміна знайденого виразу на другий знайдений символ

Тобто, ми беремо переший знайдений фрагмент рядка, ставимо після нього подвійні лапки, а після цього - другий фрагмент рядка.
