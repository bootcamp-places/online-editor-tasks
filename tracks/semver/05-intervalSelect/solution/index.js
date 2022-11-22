export const intervalSelect = (dependencies = "", versions = {}) => {
  if (dependencies.length === 0) {
    return { dependencies: {} };
  }
  const modules = {};

  const dependenciesList = removeCommentsAndSplit(dependencies);

  dependenciesList.forEach((currentPackage) => {
    const separatorIndex = currentPackage.indexOf(" ");
    const packageName = currentPackage.substring(0, separatorIndex);
    const packageVersionsList = versions[packageName];

    if (currentPackage.includes("==")) {
      const packageVersion = currentPackage.split("==")[1].trim();
      const properModules = packageVersionsList.filter(
        (currentVersion) => currentVersion === packageVersion
      );

      modules[packageName] = properModules[0];

      return;
    }

    const packageVersionsInterval = currentPackage.substring(
      separatorIndex + 1
    );
    const maxBorder = packageVersionsInterval.split(", ")[1];

    if (!maxBorder) {
      modules[packageName] = packageVersionsList.pop();

      return;
    }

    const [symbol, targetVersion] = maxBorder.split(" ");
    let candidate = selectVersion(targetVersion, packageVersionsList);

    if (!symbol.includes("=")) {
      const currentVersionIndex = packageVersionsList.indexOf(candidate);
      candidate = packageVersionsList[currentVersionIndex - 1];
    }

    modules[packageName] = candidate;
  });

  return { dependencies: modules };
};

function removeCommentsAndSplit(dependencies) {
  return dependencies.split("\n").filter((value) => !value.startsWith("#"));
}

const selectVersion = (targetVersion = "", versionsList = []) => {
  const [majorTarget, minorTarget, patchTarget] = targetVersion.split(".");
  const majorCandidate = versionsList
    .filter((v) => v.startsWith(majorTarget))
    .map((v) =>
      v
        .split(".")
        .map((v) => parseInt(v))
        .join(".")
    );
  if (!minorTarget) {
    return majorCandidate.pop();
  }
  const minorCandidate = majorCandidate.filter((v) =>
    v.startsWith(minorTarget, v.indexOf(".") + 1)
  );
  if (!patchTarget) {
    return minorCandidate.pop();
  }
  const result = minorCandidate.filter((v) =>
    v.startsWith(patchTarget, v.lastIndexOf(".") + 1)
  );
  return result.pop();
};
