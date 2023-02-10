export const updateSemVer = (currentVersion = "", element = "") => {
  const updatedVersion = currentVersion.split(".");
  switch (element) {
  case "major":
    updatedVersion[0] = parseInt(updatedVersion[0]) + 1;
    updatedVersion[1] = 0;
    updatedVersion[2] = 0;
    break;
  case "minor":
    updatedVersion[1] = parseInt(updatedVersion[1]) + 1;
    updatedVersion[2] = 0;
    break;
  default: // "patch"
    updatedVersion[2] = parseInt(updatedVersion[2]) + 1;
    break;
  }
  return updatedVersion.join(".");
};
