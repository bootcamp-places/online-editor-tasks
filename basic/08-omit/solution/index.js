/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const result = {};

  for (const key of Object.keys(obj)) {
    if (!fields.includes(key)) {
      result[key] = obj[key];
    }
  }

  return result;
};
