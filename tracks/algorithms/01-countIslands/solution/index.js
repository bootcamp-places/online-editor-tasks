/**
 * countIslands - returns amount of islands on the map
 * @param {array} map map (array of arrays)
 * @returns {number}
 */

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
