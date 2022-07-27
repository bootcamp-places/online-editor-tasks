export const alphabeticalOrder = (str) => {
  return str.split('').sort().join('');
};

alphabeticalOrder("webmaster");