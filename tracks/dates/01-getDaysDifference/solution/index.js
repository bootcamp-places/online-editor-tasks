export const getDaysDifference = (date) => {
  const msInDay = 1000 * 60 * 60 * 24;
  const msDiff = new Date().getTime() - new Date(date).getTime();

  return parseInt(msDiff / msInDay, 10);
};
