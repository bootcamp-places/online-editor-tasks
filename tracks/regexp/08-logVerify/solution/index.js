export const logVerify = (logs = "", userName = "") => {
  const re = new RegExp(`user_name:.*'${userName}'`, "g");
  const result = [];
  let match;
  while ((match = re.exec(logs)) !== null) {
    const line = logs.slice(match.index, logs.indexOf("\n", match.index));
    const ip = line.match(/(\d{1,3}\.){3}\d{1,3}|'[^']+'/);
    if (ip) {
      result.push(ip[0]);
    }
  }
  return result;
};
