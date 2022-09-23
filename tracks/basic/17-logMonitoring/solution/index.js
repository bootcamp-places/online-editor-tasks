export const logMonitoring = (string = "", dates = "") => {
  const CRITICAL = ["CRIT", "КРИТ", "严重"];
  const time = (t) => new Date(t).getTime();

  const separator = [";", "...", " - "].filter((s) => dates.includes(s));
  const [startDate, endDate] = dates
    .split(separator)
    .map((d, i) => (!i ? d : d + "T23:59:59.999"));

  return string.split("\n").some((l) => {
    const [date, status] = l.split(";");
    return (
      CRITICAL.includes(status) &&
      time(date) > time(startDate) &&
      time(date) < time(endDate)
    );
  });
};
