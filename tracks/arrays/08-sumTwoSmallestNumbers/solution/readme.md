# sumTwoSmallestNumbers

Розв'язання цієї задачі може виглядати ось так:

```js
function sumTwoSmallestNumbers(numbers) {
  let arr = numbers.sort((a, b) => a - b);
  return arr[0] + arr[1];
}
```

## Алгоритм дій:

1. Оголосити функцію з ім'ям sumTwoSmallestNumbers, яка приймає вхідний параметр numbers - це буде масив чисел, з яких потрібно знайти два найменших числа.
2. В тілі функції створити новий масив arr, який буде копією вхідного масиву numbers. Це зроблено для того, щоб не змінювати оригінальний масив під час сортування.
3. Застосувати метод сортування до масиву arr. Можна використовувати вбудований метод сортування, передавши йому функцію порівняння (a, b) => a - b. Це впорядковує масив arr у порядку зростання.
4. Після сортування отримаємо масив, в якому перші два елементи будуть найменшими числами.
5. Повернути суму перших двох елементів масиву arr, яка є сумою двох найменших чисел з вхідного масиву numbers.
## Корисні посилання
