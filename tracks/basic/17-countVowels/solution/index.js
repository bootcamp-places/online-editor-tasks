export const countVowels = (string = "") => {
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;

  for (let str of string.toLocaleLowerCase()) {
    if (vowels.includes(str)) {
      counter++;
    }
  }

  return counter;
};
