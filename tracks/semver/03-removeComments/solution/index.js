export const removeComments = (str = "", versions = {}) =>
  str
    .split("\n")
    .filter((value) => !value.startsWith("#"))
    .reduce((accumulator, element) => {
      const [, module, versionRange] = element.match(/(\S*) ([\s\S]*)/);
      versions[module] = versionRange;
      return (
        !accumulator.includes(module) && accumulator.push(module), accumulator
      );
    }, [])
    .map((module) => `${module} ${versions[module]}`)
    .join("\n");
