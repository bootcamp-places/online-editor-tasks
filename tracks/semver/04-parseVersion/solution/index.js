export const parseVersion = (dependencies = "") => {
  if (dependencies.length == 0) {
    return { dependencies: {} };
  }

  const modules = {};
  const candidates = dependencies.split("\n");
  candidates.forEach((candidate) => {
    const [module, version] = candidate.split("==").map((c) => c.trim());
    if (!modules[module]) {
      modules[module] = version;
    }
    const [majorCandidate = 0, minorCandidate = 0, patchCandidate = 0] = version
      .split(".")
      .map((v) => parseInt(v));
    const [majorTarget = 0, minorTarget = 0, patchTarget = 0] = modules[module].split(".").map(Number);
    if (majorCandidate > majorTarget) {
      modules[module] = `${majorCandidate}.${minorCandidate}.${patchCandidate}`;
    }
    if (majorCandidate <= majorTarget && minorCandidate > minorTarget) {
      modules[module] = `${majorCandidate}.${minorCandidate}.${patchCandidate}`;
    }
    if (
      majorCandidate <= majorTarget &&
      minorCandidate <= minorTarget && patchCandidate > patchTarget
    ) {
      modules[module] = `${majorCandidate}.${minorCandidate}.${patchCandidate}`;
    }
  });

  return { dependencies: modules };
};
