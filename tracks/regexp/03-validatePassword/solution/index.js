export const validatePassword = (password = "") => {
  return /^(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z].*[a-z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/.test(
    password
  );
};
