export const getDaysDifference = (dates = []) => {
  if (!dates.length) {
    return 0;
  }

  const lastDate = Math.max(...dates);
  const diffDays = (new Date().getTime() - lastDate) / 1000 / 60 / 60 / 24;

  return parseInt(diffDays);
};
