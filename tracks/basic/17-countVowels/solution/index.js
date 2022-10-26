export const countVowels = (vowels = [], string = "") => {
  let counter = 0;

  for (let str of string.toLocaleLowerCase()) {
    if (vowels.includes(str)) {
      counter++;
    }
  }

  return counter;
};
