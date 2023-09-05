export const parseUrl = (url = "") => {
  const urlRegex = /^(https?):\/\/([^:/]+):?(\d+)?(\/.*)?$/i;
  const [, protocol, host, port, path] = url.match(urlRegex) || [];

  return { protocol, host, port, path };
};
