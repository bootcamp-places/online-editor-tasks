export const createPhoneNumber = (numbers = []) => {
  let format = "(xxx) xxx-xxxx";

  numbers.forEach(number => {
    format = format.replace('x', number);
  });

  return format;
};
