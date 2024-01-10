export const getStringFromNestedObject = (str = "", nestedObject = {}) => {
  let obj = nestedObject;
  const arr = str.split(".");

  arr.forEach((el) => {
    obj = obj[el];
  });

  return obj;
};
