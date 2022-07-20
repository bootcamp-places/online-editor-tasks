export const createDateFromArray = (arrayOfObjects, property, divider) => {
  return arrayOfObjects.map(obj => obj[property])?.join(divider);
};