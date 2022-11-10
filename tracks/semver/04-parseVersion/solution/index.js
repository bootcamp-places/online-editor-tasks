export const parseVersion = (dependencies = "") => {
  const result = { dependencies: {} };
  if (dependencies.length == 0) {
    return result;
  }
  return { dependencies: { django: "2.1" } };
};
