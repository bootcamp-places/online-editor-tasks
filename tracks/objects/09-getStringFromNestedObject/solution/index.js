export const getStringFromNestedObject = (str, nestedObject) => {
  const arr = str.split(".");

  arr.forEach((el) => {
    nestedObject = nestedObject[el];
  });

  return nestedObject;
};
