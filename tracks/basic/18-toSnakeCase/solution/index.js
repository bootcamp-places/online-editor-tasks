/**
 * toSnakeCase - returns the calling string value converted to snake case
 * @param {string} string initial string in the camel case register
 * @returns {string} a new string representing the calling string converted to snake case
 */
export const toSnakeCase = (string = '') => {
  const resault = string.split('').map((el, index) => {
    if (index === 0) {
      return el.toLowerCase();
    }

    if (el === el.toUpperCase()) {
      return `_${el.toLowerCase()}`;
    }

    return el;
  });

  return resault.join('');
};
