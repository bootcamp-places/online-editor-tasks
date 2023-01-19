export const pangram = (text = "") => {
  const stripText = text.toLowerCase().match(/[а-ґ]/gi, "");
  const uniqueCharsSize = new Set(stripText).size;
  return 33 === uniqueCharsSize;
};
