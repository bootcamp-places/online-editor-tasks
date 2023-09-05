# convertSnake

Ви працюєте над системою збірки проектів. Ваш модуль буде використовуватись, щоб робити універсальне перетворення набору тексту в формат `snake_case`. Розроблена функція має повертати текст у нижньому регістрі, де слова розділені символом `_`, що ми і будемо називати `snake_case`.

Оскільки ваша функція має бути універсальною для всього проекту, то вхідний текст може містити `camelCase`, `kebab-case`, `PascalCase`, шлях до файлу `some/dir/file`, та і просто текст `Some words possible`, і ви хочете, щоб вихідний текст був завжди в форматі `snake_case`. Функція має працювати тільки з латиною, тобто набір символів (див. приклад).

**Приклад:**

```js
convertSnake(``); // ''
convertSnake(`StyleConverterClass`); // style_converter_class
convertSnake(`defaultString`); // default_string
convertSnake(`some/dir/file`); // some_dir_file
convertSnake(`Some words possible`); // some_words_possible
convertSnake(`component-file-name`); // component_file_name
```

<details>
  <summary>Підказка</summary>

---

  Для тестування свого виразу зручно користуватись [regex101](https://regex101.com/).

  1. [MDN: Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
  1. [MDN: Assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)

  ## Алгоритм дій

  1. Розділити вхідний рядок на слова, беручи до уваги роздільники "camelCase", "kebab-case", "PascalCase", "some/dir/file", "Some words possible"
  1. З'єднати масив слів в рядок за допомогою символу `_`
  1. Перетворити рядок в нижній регістр
  1. Повернути отриманий рядок або пустий рядок, якщо вхідний рядок був порожнім

</details>