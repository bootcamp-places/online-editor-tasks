# countIslands

Розв'язання цієї задачі може виглядати ось так:

```js
export const countIslands = (map) => {
  if (map.length === 0) {
    return 0;
  }

  if (map[0].length === 0) {
    return 0;
  }

  let sizeX = map.length;
  let sizeY = map[0].length;
  let counter = 0;

  let isVisited = new Array(sizeX);

  const findIsland = (x, y) => {
    if (isVisited[x][y]) {
      return;
    }

    isVisited[x][y] = true;

    if (x - 1 >= 0 && map[x - 1][y]) {
      findIsland(x - 1, y);
    }
    if (x + 1 < sizeX && map[x + 1][y]) {
      findIsland(x + 1, y);
    }
    if (y - 1 >= 0 && map[x][y - 1]) {
      findIsland(x, y - 1);
    }
    if (y + 1 < sizeY && map[x][y + 1]) {
      findIsland(x, y + 1);
    }
  };

  for (let i = 0; i < sizeX; i++) {
    isVisited[i] = new Array(sizeY);
    isVisited[i].fill(false);
  }

  for (let x = 0; x < sizeX; x++) {
    for (let y = 0; y < sizeY; y++) {
      if (isVisited[x][y]) {
        continue;
      }
      if (map[x][y]) {
        findIsland(x, y);
        counter++;
      }
      isVisited[x][y] = true;
    }
  }

  return counter;
};
```

## Алгоритм дій:

Суть алгоритму в тому, що перевіряємо кожну клітинку, поки не зустрінемо першу клітинку острова. Як тільки зустрічаємо землю, запускаємо алгоритм пошуку у глибину для того, щоб перебрати всі клітинки отсрова(також можна використовувати пошук в ширину).
Як тільки перевірили всі клітинки острова, ми розуміємо, що це +1 острів.

## Корисні посилання

https://en.wikipedia.org/wiki/Breadth-first_search \
https://en.wikipedia.org/wiki/Depth-first_search
