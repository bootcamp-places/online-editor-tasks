````markdown
# mergeSort (solution)

Одне з можливих рішень виглядає так:

```js
export const mergeSort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError("mergeSort expects an array");
  }
  const n = arr.length;
  if (n <= 1) return arr.slice(); // копія

  const mid = Math.floor(n / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i++]);
  }
  while (j < right.length) {
    result.push(right[j++]);
  }
  return result;
}
```

## Пояснення алгоритму

1. Рекурсивно ділимо масив навпіл, поки не залишаться масиви довжини 0 або 1 (вони вже відсортовані)
2. На етапі повернення викликаємо `merge(left, right)` для двох відсортованих половин
3. Порівнюємо поточні елементи обох масивів та додаємо менший (для стабільності використовуємо `<=` — це зберігає порядок рівних елементів)
4. Додаємо залишки одного з масивів

## Складність

- Час: O(n log n)
- Пам'ять: O(n) (через створення нових проміжних масивів)
- Стабільність: Так (порядок рівних елементів зберігається)

## Коли використовувати Merge Sort

- Коли важлива стабільність
- Коли дані надходять потоково (можна сортувати частинами і зливати)
- Коли треба гарантована O(n log n) навіть у «поганих» випадках

## Порівняння

| Алгоритм | Середня    | Найгірша   | Стабільність  | In-place |
| -------- | ---------- | ---------- | ------------- | -------- |
| Merge    | O(n log n) | O(n log n) | Так           | Ні       |
| Quick    | O(n log n) | O(n^2)     | Ні (класична) | Так      |
| Heap     | O(n log n) | O(n log n) | Ні            | Так      |

```

```
````
