# logParsing

Розв'язання цієї задачі може виглядати ось так:

```js
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
      if (isRequiredRow) {
        const key = row.slice(2, 17).replace("mulog/", "").trim();
        // витягнути значення необхідних ідентифікаторів
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
```

>>>
Не можемо використовувати метод строки `includes`, бо він викине `TypeError`, якщо використовувати регулярну строку в якості строки для пошуку. Саме тому, для цього випадку можна використати метод строки `search`.

## Корисні посилання

[Тут можна більше прочитати](https://stackoverflow.com/questions/5642315/regular-expression-to-get-a-string-between-two-strings-in-javascript), як можна виділяти фрагмент між двома елементами, використовуючи регулярні вирази

[String.prototype.search](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)

[RegExp.prototype.test](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
