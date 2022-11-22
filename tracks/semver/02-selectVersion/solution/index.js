export const selectVersion = (targetVersion = "", versionsList = []) => {
  const version = targetVersion.split(".");
  const majorTarget = parseInt(version[0]);
  const minorTarget = parseInt(version[1]);
  const patchTarget = parseInt(version[2]);
  const result = { major: 0, minor: 0, patch: 0 };

  for (let i = 0; i < versionsList.length; i++) {
    const versionCandidate = versionsList[i].split(".");
    const majorCandidate = parseInt(versionCandidate[0]);
    const minorCandidate = parseInt(versionCandidate[1]);
    const patchCandidate = parseInt(versionCandidate[2]);
    if (majorCandidate === majorTarget) {
      result.major = majorCandidate;
    }
    if (minorCandidate === minorTarget) {
      result.minor = minorCandidate;
    }
    if (
      !minorTarget &&
      majorCandidate === result.major &&
      result.minor < minorCandidate
    ) {
      result.minor = minorCandidate;
    }
    if (patchCandidate === patchTarget) {
      result.patch = patchCandidate;
    }
    if (
      !patchTarget &&
      majorCandidate === result.major &&
      minorCandidate === result.minor &&
      result.patch < patchCandidate
    ) {
      result.patch = patchCandidate;
    }
  }

  return `${result.major}.${result.minor}.${result.patch}`;
};
