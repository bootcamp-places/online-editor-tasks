export const validateDate = (date = "") => {
  const euDate = "^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\\\.(\\\d{2}|\\\d{4})$";
  const usDate = "^(0[1-9]|1[012])/(0[1-9]|[12][0-9]|3[01])/(\\\d{2}|\\\d{4})$";
  const isoDate = "^(\\\d{2}|\\\d{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$";
  const dateRegex = new RegExp(`${euDate}|${usDate}|${isoDate}`);

  return dateRegex.test(date);
};
