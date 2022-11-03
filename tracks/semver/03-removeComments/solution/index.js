export const removeComments = (str = "") => {
  const result = [];
  const versions = {};

  str
    .split("\n")
    // 1. Видалити закоментовані строки
    .filter((v) => !v.startsWith("#"))
    // 2. Для кожного запису:
    .forEach((element) => {
      // 2.1 виділити пакет (модуль) і його версію,
      const splitIndex = element.indexOf(" ");
      const module = element.slice(0, splitIndex);
      const versionRange = element.slice(splitIndex + 1);
      // 2.2 для кожного пакету запамʼятати номер його останньої версії
      const isPresent = result.includes(module);
      if (!isPresent) {
        result.push(module);
      }
      versions[module] = versionRange;
    });

  // 3. Повернути результат в заданому форматі
  return result.map(module => {
    const versionRange = versions[module];
    return `${module} ${versionRange}`;
  }).join("\n");
};
