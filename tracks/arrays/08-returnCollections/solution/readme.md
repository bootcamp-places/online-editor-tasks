# returnCollections

Розв'язання цієї задачі може виглядати ось так:

```js
export const returnCollections = (arr) => {
  if (arr.length === 0) {
    return [[]];
  }
  arr.sort((a, b) => a - b);
  const outArray = [];

  outArray.push([arr[0]]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > 1) {
      outArray.push([arr[i]]);
    } else {
      outArray[outArray.length - 1].push(arr[i]);
    }
  }

  return outArray;
};
```

## Алгоритм дій:

Спочатку масив треба відсортувати. Потім проходимось по відсортованому масиву і перевіряємо різницю поточного і попереднього елементів. Якщо різниця більше 1, отже, число або декілька чисел пропущено, тому це будуть дві різні колекції.

## Корисні посилання

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
