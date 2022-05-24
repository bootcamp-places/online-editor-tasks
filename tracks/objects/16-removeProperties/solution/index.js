/**
 * removeProperties - removes properties from the object
 * @param {object} obj - the initial object
 * @param {array} keys - array with keys to delete
 * @returns {object} - the new object without provided keys
 */
export const removeProperties = (obj, keys) => {
  return Object.keys(obj).reduce((result, key) => {
    return !keys.includes(key) ? { ...result, [key]: obj[key] } : result;
  }, {});
};
