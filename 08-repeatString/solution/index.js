/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {
  const separator = '-';
  const arr = str.split('');

  const result = arr.map((item, index) => {
    const firstPart = item.toUpperCase();
    const lastPart = item.toLowerCase().repeat(index);

    return `${firstPart}${lastPart}`;
  })

  return result.join(separator);
};
