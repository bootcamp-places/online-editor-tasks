/**
 * pluck - returns an array with the property value from all elements in the collection.
 * @param {collection} Array The collection to iterate over.
 * @param {key} string The property name.
 * @returns {Array} Returns the new array of property values.
*/
export const pluck = (collection = [], key = '') => {
  return collection.map((el) => el[key]);
};
