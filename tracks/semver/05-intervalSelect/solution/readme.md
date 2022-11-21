# intervalSelect

Розв'язання цієї задачі може виглядати ось так:

```js
export const intervalSelect = (dependencies = "", versions = {}) => {
  // Якщо списку бажаних версій не надано, то одразу повернути результат
  if (dependencies.length === 0) {
    return { dependencies: {} };
  }
  // Інакше, записувати результат будемо в цю змінну
  const modules = {};

  // Розділити вхідну строку на пакети та видалити коментарі
  const dependenciesList = removeCommentsAndSplit(dependencies);

  // Для кожного пакету з наданого аргументу 'dependencies' зробити наступне
  dependenciesList.forEach((currentPackage) => {
    // Розділити вхідне значення на назву модулю та інтервал його версій
    const separatorIndex = currentPackage.indexOf(" ");
    const packageName = currentPackage.substring(0, separatorIndex);
    const packageVersionsList = versions[packageName];
    // Якщо задано значення без інтервалу, то
    if (currentPackage.includes("==")) {
      const packageVersion = currentPackage.split("==")[1].trim();
      // знайти надану версію у списку версій 'versions' для цього модуля
      const properModules = packageVersionsList.filter(
        (currentVersion) => currentVersion === packageVersion
      );
      // І записати це значення
      modules[packageName] = properModules[0];
      // Далі можна не перевіряти, тому одразу повернемося з функції
      return;
    }

    // Якщо ж інтервал задано, то виділимо його значення
    const packageVersionsInterval = currentPackage.substring(
      separatorIndex + 1
    );
    // і визначимо верхню межу інтервалу (нижня немає значення для даної задачі)
    const maxBorder = packageVersionsInterval.split(", ")[1];
    // Якщо верхня межа не задано, то
    if (!maxBorder) {
      // записати до результату останню, тобто найновшу версію модуля
      modules[packageName] = packageVersionsList.pop();
      // Тут теж можна далі не перевіряти - повернутись з функції одразу
      return;
    }

    // Інакше, визначити строгість умови і номер версії
    const [symbol, targetVersion] = maxBorder.split(" ");
    // Для заданого значення знайти відповідне значення у списку доступних версій
    let candidate = selectVersion(targetVersion, packageVersionsList);
    // Якщо версію задано строго (через '<'), то
    if (!symbol.includes("=")) {
      // Знайти поточне значення, але записати в результат - попереднє
      const currentVersionIndex = packageVersionsList.indexOf(candidate);
      candidate = packageVersionsList[currentVersionIndex - 1];
    }
    // Інакше, повернути знайдений перед цим результат
    modules[packageName] = candidate;
  });

  // І повернути обʼєкт JSON в результаті
  return { dependencies: modules };
};

/**
 * Для видалення коментарів використано функцію `removeComment`
 * з 3-го завдання серії (tracks/semver/removeComments).
**/
function removeCommentsAndSplit(dependencies) {
  return dependencies.split("\n").filter((value) => !value.startsWith("#"));
}

/**
 * Для вирішення задачі пошуку використано функцію `selectVersion`
 * з 2-го завдання серії (tracks/semver/selectVersion).
**/
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
```
