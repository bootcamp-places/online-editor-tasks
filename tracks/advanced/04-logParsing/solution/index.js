export const logParsing = (string = "") => {
  const records = string.match(/{([\s\S]*?)}/gm);
  const completeRecords = records.filter(
    (record) => record.split("\n").length === 6
  );

  const result = [];
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
        const key = row.slice(1, 16).replace("mulog/", "").trim();
        const value = row.slice(16).trim().replace(/[",}]/g, "");
        finalRecord[elementsPosition[key]] = value;
        if (key === "timestamp") {
          finalRecord[0] = new Date(+finalRecord[0]).toISOString().slice(0, 10);
        }
      }
    });
    result.push(finalRecord.join(";"));
  });
  return result.join("\n");
};
