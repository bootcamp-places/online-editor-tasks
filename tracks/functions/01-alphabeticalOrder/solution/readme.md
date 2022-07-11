# alphabeticalOrder

Розв'язання цієї задачі може виглядати ось так:

```js
const alphabeticalOrder = (str) => {
  return str.split('').sort().join('');
};

```

Для поділу об’єкта String на масив рядків використовується метод `split`:

```js
  return element
    .split('')
```

Для сортування елементів масиву в JavaScript існує вбудований метод `sort`, 
який дозволяє реалізувати сортування, порівнюючи елементи масиву та використовуючи
власну логіку сортування.

```js
return element
  .split('')
  .sort()
```

Метод `join` використовується для об’єднання всіх елементів масиву в рядок.

```js
return element
  .split('')
  .sort()
  .join('')
```
