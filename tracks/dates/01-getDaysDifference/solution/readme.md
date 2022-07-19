# getDaysDifference

Розв'язання цієї задачі може виглядати ось так:

```js
const getDaysDifference = (dates = []) => {
  if (!dates.length) {
    return 0;
  }

  const lastDate = Math.max(...dates);
  const diffDays = (new Date().getTime() - lastDate) / 1000 / 60 / 60 / 24;

  return parseInt(diffDays);
};
```

## Алгоритм дій:

1) Перевіряємо чи масив взагалі містить дані, якщо ні, то просто повертаємо 0
2) Знаходимо найновішу дату за допомогою методу `Math.max`. 
3) Віднімаємо від теперішньої дати останню, і переводимо мілісекунди в дні, шляхом ділення (`1000 ms / 60 sec / 60 min / 24 h`)
