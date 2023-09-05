export const logScan = (logs = "", userName = "") => {
  const regexp = new RegExp(`user_name: \\d{2}\\.\\d{2}\\.\\d{2} \\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3} '${userName}'`, 'g');
  const result = logs.match(regexp);
  return result ? result.length : 0;
};
