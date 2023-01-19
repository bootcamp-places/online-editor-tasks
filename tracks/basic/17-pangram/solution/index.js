// export const pangram = (text = "") => {
//   const stripText = text.toLowerCase().match(/[а-ґ]/gi, "");
//   const uniqueCharsSize = new Set(stripText).size;
//   return 33 === uniqueCharsSize;
// };
export const pangram = (text = "") => {
  if (text.trim() === "") {
    return false;
  }
  const uniqueChars = text
    .toLowerCase()
    .split("")
    .reduce(
      (accumulator, currentLetter) => (accumulator[currentLetter] = ""),
      {}
    );
  const uniqueCharsSize = Object.keys(uniqueChars).length;
  return 33 === uniqueCharsSize;
};
