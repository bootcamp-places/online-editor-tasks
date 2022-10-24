export const updateLinks = (string = "") => {
  if (!string.includes("target=")) {
    return string;
  }

  let result = string
    .replaceAll("target=_blank", 'target="_blank"')
    .replaceAll("rel=noopener", 'rel="noopener"')
    .replaceAll(
      /(<a.*\s*)(?<!rel="noopener"\s)(target="_blank")(\s*>)/g,
      '$1$2 rel="noopener"$3'
    );

  return result;
};
