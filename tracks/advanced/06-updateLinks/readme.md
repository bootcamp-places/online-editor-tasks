# updateLinks

> Author: [merezhanyi-eleks](https://github.com/merezhanyi-eleks)

Ви разом з командою працюєте над оновленням CMS. В процесі роботи виявилось, що в оновленій версії бекенду на Java, буде використовуватись і новий HTML парсер, що приведе до проблеми. У ЦМС було декілька версій, тому статті в ній форматувались по різним правилам. На даний момент статті містять теги `<a>`, в яких атрибут `target` є як з лапками, так і без (`target="_blank"` і `target=_blank`). Вашою першою задачею є перевірка всіх атрибутів, коли він є без лапок, то треба оновити і додати лапки, тобто `target=_blank` -> `target="_blank"`. Інакше не міняти.

Згідно [стандарту HTML5](https://stackoverflow.com/questions/13056683/html-attribute-with-without-quotes) може бути без лапок, але в ЦМС ,буде використовуватись старий HTML парсер на основі доктайпу XHTML strict, який є більш строгими, тому парсер падає з помилкою "parsing error" і закінчує роботу. Доступу до цієї частину коду у нам немає, тому ми фіксимо відсутність лапок. Раніше все працювало і так, бо використовувалась інша версія парсера.

Після розмови з Бізнес Аналітик виявилась ще одна проблема. Значна кількість користувачів, використовують старі версії браузерів і з різних причин не можуть чи не хочуть їх оновити (наприклад, є користувачі з державних установ, вони не можуть просто оновити систему та браузер) і тому посилання виду `<a href="external site" target="_blank">` несе для них загрозу (Опис проблеми англ. [What problems does it solve?](https://mathiasbynens.github.io/rel-noopener/)). Тому другою вашою задачею є додати до всіх подібних посилань атрибут `rel="noopener”`, але тільки там, де його ще не має. Але якщо він є, але без лапок (тобто `rel=noopener`), то треба додати лапки (`rel=noopener` -> `rel="noopener"`).

Таким чином, вам необхідно написати функцію `updateLinks`, яка буде:

- додавати `rel="noopener"`, до усіх тегів `<a>` з атрибутом `target="_blank"`
- обгортати значення атрибутів `rel` та `target` лапками
- функція приймає тільки один аргумент `string` і повертає строку

Обмеження:

- Розмір статей завжди не більше 1024 символів
- В наданих прикладах теги і атрибути завжди будуть валідними
- В наданих прикладах усі теги і атрибути надані тільки в нижньому регістрі
- Зовнішньою лінкою вважається тільки та, яка вже має атрибут `target="_blank"`, все інше - ігнорувати
- Атрибут target завжди іде останнім атрибутом тегу
- Якщо атрибут rel є, то він може або безпосередньо перед, або безпосередньо за атрибутом target (тобто `<a target="_blank" rel="noopener">` або `<a href="example.com" rel="noopener" target="_blank">` і ніколи `<a rel="noopener" href="example.com" target="_blank">`)
- Якщо атрибут rel є, то між ним і атрибутом target може бути тільки один пробіл (тобто `<a rel="noopener" target="_blank">` або `<a target="_blank" rel="noopener">` і ніколи `<a target="_blank"    rel="noopener">`)
- Тег може містити зайві пробіли (тобто `<a   target=_blank >`)
- Непотрібно екранувати лапки у атрибутів
- Функція буде виконуватись в середовищі Node >=16.0.0
- Швидкість роботи алгоритму та обсяг використовуваної пам'яті значення не мають

**Приклад:**

```js
updateLinks('Як було було описано у <a href="example.com" target=_blank>частині 1</a>, історія створення HTTP налічує тисячу років, ще з <a href="#1">епохи dot-комів</a>!');
```

Повертає строку:

```js
Як було було описано у <a href="example.com" target="_blank" rel="noopener">частині 1</a>, історія створення HTTP налічує тисячу, років ще з <a href="#1">епохи dot-комів</a>!
```

<details>
  <summary>Підказка</summary>

---

  Найпростішим способом вирішення задачі буде використання методу [replaceAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll), як було показано в завданні [removeStringSpace](tracks/basic/14-removeStringSpace/), та регулярних виразів (["Regular expression syntax cheatsheet"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet))

  **Увага:** Використовуючи регулярні вирази, перевіряйте, що саме [підтримується у цільовому браузері чи рантаймі](http://kangax.github.io/compat-table/es2016plus/).

  **Алгоритм дій:**

  1. Якщо текст не містить посилань на зовнішні ресурси, то повернути його
  1. Інакше, замінити усі `target=_blank` на `target="_blank"`
  1. Для усіх тегів, що мають `target="_blank"` перевірити, чи вони вже містять `rel="noopener"`
  1. Для тих, що містять додати лапки, якщо немає
  1. Для інших додати `rel="noopener"`

</details>
