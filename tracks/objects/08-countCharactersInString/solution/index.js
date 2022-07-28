/**
 * countCharactersInString - counting characters in the string
 * @param {string} string - the string
 * @returns {object} - the new object with character as property name and count of that character as value
 */
export const countCharactersInString = (string) => {
  return string
    .toLowerCase()
    .replace(/\s/g, '',)
    .split('')
    .reduce((acc, val)=> val in acc ? {...acc, [val]: acc[val] + 1} : { ...acc, [val]: 1}, {});
};
