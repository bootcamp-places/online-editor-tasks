export const validateEmail = (email = "") => {
  const validatedEmail = email.match(/[^@]{1,64}@[^@]+\..{2,}/)?.[0] || "";

  return email === validatedEmail;
};
