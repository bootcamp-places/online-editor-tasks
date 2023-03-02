export const groupingEmployes = (arr = []) => {
  const res = {};

  arr.forEach((el) => {
    if (!Object.prototype.hasOwnProperty.call(res, el.group)) {
      res[el.group] = [];
    }

    res[el.group].push({
      id: el.id,
      user: el.user,
    });
  });

  return res;
};
