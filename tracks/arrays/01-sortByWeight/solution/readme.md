# sortByWeight

Розв'язання цієї задачі може виглядати ось так:

```js
const sortByWeight = (arr = []) => {
  const getWeight = element => {
    return element
      .toString()
      .split('')
      .reduce((accum, current) => {
        return parseInt(accum, 10) + parseInt(current, 10);
      }, 0);
  };

  return arr.sort((a, b) => getWeight(a) - getWeight(b));
};
```

Для сортування елементів масиву в JavaScript існує вбудований метод `sort`, 
який дозволяє реалізувати сортування, порівнюючи елементи масиву та використовуючи
власну логіку сортування.

Для того що б мати можливість підрахувати вагу кожного елементу, нам потрібно привести 
числові елементи до стрічки:

```js
element
  .toString()
```

Після цього, ми матимемо можливість, за допомогою методу `split` перетворити кожен елемент
масиву на масив чисел:

```js
  return element
    .toString()
    .split('')
```

На цьому кроці кожен елемент масиву буде виглядати ось так:

* `['3']`
* `['1']`
* `['5', '5']`
* `['3', '3']`
* `['2', '0']`

Залишилось тільки підрахувати вагу кожного елементу.

Отримати суму елементів масиву, що буде відповідати вазі елемента, можна за допомогою метода `reduce`.
Також треба не забути перевести кожен елемент зі стрічки до числа, в цьому допоможе метод [`parseInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt).

```js
  return element
  .toString()
  .split('')
  .reduce((accum, current) => {
    return parseInt(accum, 10) + parseInt(current, 10);
  }, 0);
```
