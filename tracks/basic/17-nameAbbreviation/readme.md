# nameAbbreviation

Ви разом з командою працюєте над оновленням CMS. Одним з елементів цієї системи є [Заголовок](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) сторінки, який містить аватар користувача. Але не всі користувачі додали до системи своє фото, тому дизайнер вирішив, що в такому разі треба показати ініціали користувача. В цьому завданні, вам необхідно написати функцію `nameAbbreviation`, яка приймає імʼя користувача (`firstName` та `lastName`) і повертає по першій літері від кожної частини імені в заголовному регістрі. Якщо `lastName` пусте, то повернути першу літеру `firstName` і крапку (`firstName` завжди містить, принаймі, один символ - вимога системи).

Надані тест-кейси **НЕ містять** випадків, коли екстракція першої літери потребує декомпозиції слова за правилами мови. Наприклад, прізвище "Коваль" японською буде "鍛冶屋" ("каджия") і тому першою літерою мало би бути не "鍛", а "か" ("ка"), оскільки японська відноситься до неалфавітних систем письма. Польське імʼя "Czesław Dzwonek" мало би бути "CzDz", а не "CD", бо то є польські співзвучні приголосні (як в українській "дз", "дж"). А, наприклад, "Адам Міцкевич" на івриті буде "אדם מיקיעוויץ" і ініціалами має бути "אמ" (бо то є [RTL написи](https://en.wikipedia.org/wiki/Right-to-left_script)). Крім того, **не розглядаються випадки**, коли імʼя створено з [сурогатних пар (графем) UTF-16](https://uk.wikipedia.org/wiki/UTF-16). Наприклад, іспанське імʼя "Álvaro" може мати першою літерою "Á" (Latin capital letter A with acute: U+00C1) або сурогатну пару (гліф) "A" (Latin capital letter A: U+0041) та "´" (Acute accent: U+00B4). Так само для прикладу вище з польською "Dz" могла би бути графема "Ǳ" (Latin Capital letter D with small z: U+01F2). *Усі ці випадки ми не розглядаємо* 🤓

**Приклад:**

```js
nameAbbreviation("Łukasz", "Żyłowski");
// => "ŁŻ"
nameAbbreviation("pranavi", "kumar");
// => "PK"
nameAbbreviation("anonymous", "");
// => "A."
```

<details>
  <summary>Підказка</summary>

___

  ## Алгоритм дій

  1. Відокремити першу літеру `firstName`
  1. Відокремити першу літеру `lastName`
  1. Якщо `lastName` не містить першої літери, то замінити на "."
  1. Обʼєднати отримані частини
  1. Перевести отримане слово у верхній регістр
  1. Повернути результат

  Зверніть увагу на методи:

  - [String.prototype.at](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at)
  - [String.prototype.charAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
  - [String.prototype.toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
  - [String.prototype.toLocaleUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase)

</details>
