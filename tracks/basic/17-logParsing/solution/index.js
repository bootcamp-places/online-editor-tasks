export const logParsing = (string = "") => {
  // 1. Виділити кожний запис (міститься між фігурними дужками)
  const records = string.match(/{([\s\S]*?)}/gm);
  // 2. Для кожного запису: розділити запис на елементи
  const completeRecords = records.filter(
    // 3. Перевірити що елементів, що їх рівно 6, тобто запис є повним
    (record) => record.split("\n").length === 6
  );

  const result = [];
  // 4. Для кожного повного запису
  completeRecords.forEach((record) => {
    const rows = record.split("\n");
    const elementsPosition = {
      timestamp: 0,
      "server-id": 1,
      message: 2,
    };
    const finalRecord = [];
    rows.forEach((row) => {
      const isRequiredRow = /timestamp|server-id|message/.test(row);
      // витягнути значення необхідних ідентифікаторів
      if (isRequiredRow) {
        const key = row.slice(2, 17).replace("mulog/", "").trim();
        const value = row.slice(17).trim().replace(/"|,|}/g, "");
        finalRecord[elementsPosition[key]] = value;
        // (час конвертувати в формат ISO)
        if (key === "timestamp") {
          finalRecord[0] = new Date(+finalRecord[0]).toISOString().slice(0, 10);
        }
      }
    });
    // і додати до вихідної строки
    result.push(finalRecord.join(";"));
  });
  // 5. Повернути закінчену вихідну строку
  return result.join("\n");
};
