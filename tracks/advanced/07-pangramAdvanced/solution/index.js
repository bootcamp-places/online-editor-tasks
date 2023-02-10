export const pangramAdvanced = (text = "") => {
  const alpha = [
    "а",
    "б",
    "в",
    "г",
    "ґ",
    "д",
    "е",
    "є",
    "ж",
    "з",
    "и",
    "і",
    "ї",
    "й",
    "к",
    "л",
    "м",
    "н",
    "о",
    "п",
    "р",
    "с",
    "т",
    "у",
    "ф",
    "х",
    "ц",
    "ч",
    "ш",
    "щ",
    "ь",
    "ю",
    "я",
  ];
  const extraSet = [".", "!", "-", "ʼ", " "];

  const fragment = text.toLowerCase();
  const fragmentWithoutSymbols = fragment.match(/[а-ґʼ]/gi);

  const letters = alpha.filter((letter) => ![...fragment].includes(letter));
  const symbols = extraSet.filter((symbol) => ![...fragment].includes(symbol));

  return {
    length: fragmentWithoutSymbols?.length || 0,
    letters,
    symbols,
  };
};
