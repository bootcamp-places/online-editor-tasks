export const sortArray = (ratings = []) => {
  return ratings.sort((a, b) => b - a).slice(0, 3);
};
