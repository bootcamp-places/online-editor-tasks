export const arrayContains = (emails = [], domain = "") => {
  const results = [];

  for (const email of emails) {
    if (email.includes(domain)) {
      results.push(email);
    }
  }

  return results;
};
