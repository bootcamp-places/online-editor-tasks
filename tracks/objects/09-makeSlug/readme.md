# makeSlug

Разом з командою ви працюєте над новою [CMS](https://uk.wikipedia.org/wiki/Система_керування_вмістом). Вашим завданням є розробити для системи створення коротких оптимізованих посилань (англ. [Clean URL](https://en.wikipedia.org/wiki/Clean_URL)) модуля "шлейфу" (англ. [slug](https://developer.mozilla.org/en-US/docs/Glossary/Slug)), т.з. модуля "слагифікації". Для цього ви маєте використовувати заголовок статті CMS.

Обмеження:

- Розмір заголовку завжди не більше 254 символів
- Заголовок містить тільки цифри, літери української та англійської абеток та знаки пунктуації: ".", ",", "!", ":", "?", "-" та " "
- Швидкість роботи алгоритму та обсяг використовуваної пам'яті значення не мають
- Для транслітерації використати ["ТАБЛИЦЯ транслітерації українського алфавіту латиницею"](https://www.kmu.gov.ua/npas/243262567)
- В наданих прикладах літера "ї" є тільки на початку слова, літери "є", "й", "ю" і "я" - тільки в середині й кінці (інші випадки можна не враховувати)

У цьому завданні вам необхідно реалізувати функцію `makeSlug` трансформації заголовків у slug URL:

- Цифри не перетворювати
- Літери перетворити на фонетичні аналоги прописної (нижній регістр) латини
- Символи пунктуації замінити символом "_", окрім символів "-" і " ", символ "-" залишити без змін, символ " " замінити на "-"

Функція приймає один параметр:

- строку `string`, що містить заголовок матеріалу

**Приклад:**

```js
makeSlug("Умови використання");
// umovy-vykorystannia

makeSlug("Частина 1: Історія створення HTTP, ґвалт буму їх dot-комів!");
// chastyna-1_-istoriia-stvorennia-http_-gvalt-bumu-yikh-dot-komiv_"
```

<details>
  <summary>Підказка</summary>

---

  Замінити символи можна за допомогою методу [replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) або [replaceAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll), як було показано в завданні [removeStringSpace](tracks/basic/14-removeStringSpace/)

  Зверніть увагу на структуру даних "Словник", або ["Асоціативний масив"](https://uk.wikipedia.org/wiki/Асоціативний_масив)

  Можуть також бути корисними регулярні вирази ["Regular expression syntax cheatsheet"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)

</details>
