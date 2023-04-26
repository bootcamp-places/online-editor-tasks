export const parseUrl = (url = "") => {
  // ^(https?):\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$
  const urlRegex = /^(https?):\/\/([^:\/]+):?(\d+)?(\/.*)?$/i;
  const [, protocol, host, port, path] = url.match(urlRegex) || [];
  return { protocol, host, port, path };
};
