export const nameAbbreviation = (firstName = "", lastName = "") => {
  const firstLetter = firstName.charAt(0);
  let lastLetter = lastName.charAt(0);

  if (lastLetter === "") {
    lastLetter = ".";
  }

  let abbreviation = firstLetter.concat(lastLetter);
  abbreviation = abbreviation.toLocaleUpperCase();

  return abbreviation;
};
