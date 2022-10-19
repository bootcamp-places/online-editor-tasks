export const textCutter = (string = "", n = 0) => {
  if (string.length <= n) {
    return string;
  }

  let acc = 0;
  const targetLength = n - 3;
  const words = string.split(" ");
  const textCut = [];
  words.forEach((w) => {
    if (acc + w.length <= targetLength) {
      textCut.push(w);
      acc += w.length;
    }
  }, 0);

  let res = textCut.join(" ");
  if (res.slice(-1) === "." || res.slice(-1) === ",") {
    res = res.slice(0, -1);
  }

  return res + "...";
};
