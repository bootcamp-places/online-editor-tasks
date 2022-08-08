/**
 * isIsogram - checking if word is Isogram or not.
 * @param {string} string - accepts a single word without spaces.
 * @returns {boolean} - which word is Isogram or not.
 */
export const isIsogram = (string) => {
  const uniqueCharsSize = new Set(string.toLowerCase().split('')).size;
  return string.length === uniqueCharsSize;
};
