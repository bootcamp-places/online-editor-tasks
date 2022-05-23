# sortByWeight

Потрібно реалізувати функцію `sortByWeight`, яка приймає массив чисел або чисел як стрічок та сортує по сумі кожного елементу

**Приклад:**

```js
sortByWeight([
  3, 
  1, 
  '55', 
  33,
  '20',
]);
```

Поверне масив:
```js
[
  1,
  '20',
  3, 
  33,
  '55'
]
```

| element | weight | 
| :---: | :---: | 
| 3 | 3 | 
| 1 | 1 | 
| 55 | 5 + 5 = 10 | 
| 33 | 3 + 3 = 6 | 
| 20 | 2 | 


<details>
  <summary>Підказка</summary>
  
---
  Потрібно реалізувати власний метод [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort?retiredLocale=uk) в якому будуть порівнюватись елементи масиву. У власній реалізації методі [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort?retiredLocale=uk) потрібно визначити вагу кожного елементу і порівняти між собою.
</details>

