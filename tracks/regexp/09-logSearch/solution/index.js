export const logSearch = (logs = "") => {
  const warningString = logs.match(/warning: user '(.+?)'/);
  if (!warningString) {
    return "";
  }

  const username = warningString[1];
  const endsAt = warningString.index;
  const startFrom = logs.lastIndexOf(`user_name:`, endsAt);

  const userIP = logs
    .slice(startFrom, endsAt)
    .match(new RegExp(`user_name: .+? '*(.+?)'* '${username}'`));

  return userIP[1];
};
