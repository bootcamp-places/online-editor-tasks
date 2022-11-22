export const parseVersion = (dependencies = "") => {
  if (dependencies.length == 0) {
    return { dependencies: {} };
  }

  const modules = {};
  const candidates = dependencies.split("\n");

  candidates.forEach((candidate) => {
    const [module, version] = candidate.split("==").map((c) => c.trim());
    const [majorCandidate = 0, minorCandidate = 0, patchCandidate = 0] = version
      .split(".")
      .map((v) => parseInt(v, 10));
    const moduleVersion = `${majorCandidate}.${minorCandidate}.${patchCandidate}`;

    if (!modules[module]) {
      modules[module] = moduleVersion;
    }
    const [majorTarget = 0, minorTarget = 0, patchTarget = 0] = modules[module]
      .split(".")
      .map(Number);

    if (
      majorCandidate >= majorTarget &&
      minorCandidate >= minorTarget &&
      patchCandidate >= patchTarget
    ) {
      modules[module] = moduleVersion;
    }
  });

  return { dependencies: modules };
};
