export const replaceQuote = (str = "") => {
  // replace single quotes with double quotes
  // but only if it is not the part of the word
  return str.replace(/(^|\W)'|'(\W|$)/g, '$1"$2');
};
