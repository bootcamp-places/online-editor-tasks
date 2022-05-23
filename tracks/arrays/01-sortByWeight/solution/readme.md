# sortByWeight

Розв'язання цієї задачі може виглядати ось так:

```js
const sortByWeight = (arr = []) => {
  const sumNumbers = number =>
    number
      .toString()
      .split('')
      .reduce((prev, current) => parseInt(prev) + parseInt(current), 0);

  return arr.sort((a, b) => sumNumbers(a) - sumNumbers(b));
};
```

Для сортування елементів з масиву існує метод sort, який дозволяє реалізувати власну логіку сортування. У власній імплементації потрібно визначити вагу кожного елементу масиву і порівняти між собою.

Так як функція приймає массив як із числами так і стрічки з числами, потрібно спочатку привести значення до стрічки(так як числа не мають методу (split))

```js
number
 .toString()
```
після цього розбити стрічку на елементи методом split і вже після цього просумувати всі елементи(при додаванні потрібно не забути перевести стрічку в число методами parseInt або parseFloat)
```js
.reduce((prev, current) => parseInt(prev) + parseInt(current), 0);
```