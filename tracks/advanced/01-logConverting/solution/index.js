export const logConverting = (string = "") => {
  const result = {};

  const records = string.split("\n");
  records.forEach((record) => {
    const [date, id, status] = record.split(";");

    if (!result[date]) {
      result[date] = {};
    }

    const statuses = !result[date][id] ? [] : result[date][id];

    statuses.push(status);
    result[date][id] = statuses;
  });

  return JSON.stringify(result);
};
