export const alphabeticalOrder = (str) => {
  return str.split('').sort().join('');
};

console.log(alphabeticalOrder("Hello world"));