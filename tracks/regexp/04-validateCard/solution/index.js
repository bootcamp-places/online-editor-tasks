export const validateCard = (number = "") => {
  return /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(3[47][0-9]{13}))$/.test(
    number
  );
};
