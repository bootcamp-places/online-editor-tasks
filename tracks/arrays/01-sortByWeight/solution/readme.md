# sortByWeight

Розв'язання цієї задачі може виглядати ось так:

```js
export const sortByWeight = (arr = []) => {
  const getWeight = element =>
  element
      .toString()
      .split('')
      .reduce((prev, current) => parseInt(prev) + parseInt(current), 0);

  return arr.sort((a, b) => getWeight(a) - getWeight(b));
};
```

Для сортування елементів з масиву існує метод sort, який дозволяє реалізувати власну логіку сортування. У власній імплементації потрібно визначити вагу кожного елементу масиву і порівняти між собою.

Так як функція приймає массив як із числами так і стрічки з числами, потрібно спочатку привести значення до стрічки (так як числа не мають методу (split))

```js
element
 .toString()
```
після цього розбити стрічку на елементи методом split і вже після цього просумувати всі елементи(при додаванні потрібно не забути перевести стрічку в число методами [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt))

```js
.reduce((prev, current) => parseInt(prev) + parseInt(current), 0);
```