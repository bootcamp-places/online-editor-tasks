export const removeByIndex = (arr = [], index = 0) => {
  const elementsBeforeIndex = arr.slice(0, index);
  const elementsAfterIndex = arr.slice(index + 1, arr.length);

  return [...elementsBeforeIndex, ...elementsAfterIndex];
};
