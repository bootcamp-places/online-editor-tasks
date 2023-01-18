# seoTest

Разом з командою ви працюєте над новою [CMS](https://uk.wikipedia.org/wiki/Система_керування_вмістом). Відділ маркетингу хоче перевіряти роботу копірайтерів автоматично. Тому вашим завданням є розробити функцію `seoTest` (буде частиною адмін-панелі), яка приймає на вхід текст для перевірки `text`, слово `word`, наявність якого необхідно перевірити і повертає
скільки разів слово зустрічається у тексті.

Обмеження:

- Розмір тексту не більше 1024 символів
- Текст містить цифри, літери української та англійської абеток та знаки пунктуації: ".", ",", "!", ":", "?", "-" та " "
- Якщо `word` є пустим (тобто є "", або " ", або "  " і т.п.), то результат завжди `0`
- Пошук має бути нечутливий до регістру літер, тобто слова "JavaScript" і "javascript" є однаковими
- Пошук має працювати і для фрагменту слова, тобто для тексту "JavaScript vs Java" слово "java" зустрічається 2 рази (то не є вірним з т.з. [SEO оптимізації](https://uk.wikipedia.org/wiki/%D0%9E%D0%BF%D1%82%D0%B8%D0%BC%D1%96%D0%B7%D0%B0%D1%86%D1%96%D1%8F_%D0%B4%D0%BB%D1%8F_%D0%BF%D0%BE%D1%88%D1%83%D0%BA%D0%BE%D0%B2%D0%B8%D1%85_%D1%81%D0%B8%D1%81%D1%82) але такою є умова цього завдання)
- Швидкість роботи алгоритму та обсяг використовуваної пам'яті значення не мають

**Приклад:**

```js
seoTest("JavaScript — це гнучка мова програмування, яка дозволяє створювати цікаві та креативні анімації й унікальні ефекти. Тут ти освоїш базовий синтаксис мови JavaScript.", "JavaScript", 2);
// => 2
seoTest("JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.", "script");
// => 1
```

<details>
  <summary>Підказка</summary>

---

  ## Алгоритм дій:

  1. Якщо слово пусте або немає тексту - повернути 0
  1. Інакше перевести текст і слово у нижній регістр
  1. Порахувати скільки разів зустрічається слово у тексті
  1. Повернути результат

  Зверніть увагу на методи [toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLoweCase) та [toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase).

  Придивіться до результату методу [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split).

  Можете спробувати знайти рішення за допомогою методу [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf).

  Також можна знайти рішення через [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes), розділивши текст на слова за допомогою [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split).

  Можуть також бути корисними регулярні вирази ["Regular expression syntax cheatsheet"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet), [search](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search) та [match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match).

</details>