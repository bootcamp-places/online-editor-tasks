export const makeSlug = (string = "") => {
  return string
    .toLowerCase()
    .replace(/а/g, "a")
    .replace(/б/g, "b")
    .replace(/в/g, "v")
    .replace(/г/g, "h")
    .replace(/ґ/g, "g")
    .replace(/д/g, "d")
    .replace(/е/g, "e")
    .replace(/є/g, "ie")
    .replace(/ж/g, "zh")
    .replace(/з/g, "z")
    .replace(/и/g, "y")
    .replace(/і/g, "i")
    .replace(/ї/g, "yi")
    .replace(/й/g, "i")
    .replace(/к/g, "k")
    .replace(/л/g, "l")
    .replace(/м/g, "m")
    .replace(/н/g, "n")
    .replace(/о/g, "o")
    .replace(/п/g, "p")
    .replace(/р/g, "r")
    .replace(/с/g, "s")
    .replace(/т/g, "t")
    .replace(/у/g, "u")
    .replace(/ф/g, "f")
    .replace(/х/g, "kh")
    .replace(/ц/g, "c")
    .replace(/ч/g, "ch")
    .replace(/ш/g, "sh")
    .replace(/щ/g, "shch")
    .replace(/ю/g, "iu")
    .replace(/я/g, "ia")
    .replace(/ /g, "-")
    .replace(/[.,!:?]/g, "_");
};