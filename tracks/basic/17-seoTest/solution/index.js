export const seoTest = (text = "", word = "") => {
  if (word.trim() === "") {
    return 0;
  }

  const string = text.toLocaleLowerCase();
  const subString = word.toLocaleLowerCase();
  const result = string.split(subString).length - 1;

  return result;
};
