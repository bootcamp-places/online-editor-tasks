export const isFormFilledIn = (form = {}, requiredFields = []) => {
  if (requiredFields.length) {
    return !requiredFields.some((fieldName) => !form[fieldName]);
  }

  return true;
};
