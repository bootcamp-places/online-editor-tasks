export const difference = (targetArray = [], comparedArray = []) => {
  if (Array.isArray(targetArray)) {
    if (Array.isArray(comparedArray)) {
      return targetArray.filter((item) => !comparedArray.includes(item));
    }

    return [...targetArray];
  }

  return [];
};
