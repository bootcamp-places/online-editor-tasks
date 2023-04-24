export const convertSnake = (str = "") => {
  const result = str
    .match(/[A-Z]?[a-z]+|[A-Z]+(?![a-z])|\d+/g)
    ?.join("_")
    .toLowerCase();

  return result || "";
};
