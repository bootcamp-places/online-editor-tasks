export const minifyCss = (string = "") => {
  return string
    .replace(/\/\*([\s\S]*?)\*\//g, "")
    .replace(/\s*\{\s*/g, "{")
    .replace(/\s*\}\s*/g, "}")
    .replace(/:\s*/g, ":")
    .replace(/;\s*/g, ";")
    .replace(/;}/g, "}")
    .trim();
};
