export const uniteUnique = (...args) => {
  const arr = [...args];

  let newArr = [];

  arr.forEach(e => {
    newArr.push(...e);
  });

  newArr = new Set(newArr);

  return [...newArr];
};
