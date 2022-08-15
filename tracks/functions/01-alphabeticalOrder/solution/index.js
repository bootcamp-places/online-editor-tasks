export const alphabeticalOrder = (str) => {
  return str.split('').sort((a, b) => a.localeCompare(b)).join('');
};

alphabeticalOrder("webmaster");