export const mergeDataFromArray = (arrayOfObjects, property, divider) => {

    return arrayOfObjects.map(obj => obj[property] || '-')?.join(divider);
 
};