# logParsing

> Author: [merezhanyi-eleks](https://github.com/merezhanyi-eleks)

Ця задача є продовженням [advanced/logMonitoring](js-track/advanced/logMonitoring).

Разом з командою, ви працюєте над сервісом моніторінгу хмари серверів. Данні до вас надаються [асинхронно](https://uk.wikipedia.org/wiki/%D0%90%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%B5_%D0%BF%D0%BE%D1%81%D0%BB%D1%96%D0%B4%D0%BE%D0%B2%D0%BD%D0%B5_%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B0%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F_%D0%B4%D0%B0%D0%BD%D0%B8%D1%85), що призводить до того, що записи в межах одного повідомлення можуть бути розташовані в довільному порядку, а також до того, що частина записів може бути неповна. Такий метод передачі даних часто застосовується у мережах з великим трафіком, або з великою кількістю втрат даних, тобто важливим є факт отримання усіх даних, а не їх хронологічна послідовність. З таким ви стикалися в реальному житті, коли крутили стрічку Twitter або Facebook.

Вашою задачею є створення модулю обробки логу для подальшої обробки (розглядається в [advanced/logConverting](js-track/advanced/logCoverting)). Цей модуль буде обробляти надану строку, розбирати її на складові, перевіряти на повноту кожний запис і повертати у заданому форматі. Тобто, вам необхідно написати функцію `logParsing`, яка:

- Приймає на вхід строку логів (приклад і формат див. нижче)
- Перевіряє на закінченість (тобто приймати до уваги потрібно тільки ті записи, що є повними - містять усі приведені нижче ідентифікатори
- Витягує тільки потрібну інформацію (див. нижче)
- Повертає строку в заданому форматі (див. нижче)

Задане повідомлення має наступний формат (порядок слідування - довільний):

- Повідомлення обмежено фігурними дужками (символ `{}`)
- Записи у повідомлені відокремлені переносом строки (символ `\n`)
- Перший елемент запису починається з двокрапки (символ `:`) і є ідентифікатором запису
- Наступні елементі запису є його значенням

Перелік ідентифікаторів:

- mulog/event-name - титул повідомлення
- mulog/timestamp - дата повідомлення в форматі [timestamp](https://uk.wikipedia.org/wiki/Timestamp)
- mulog/trace-id - унікальний ідентифікатор повідомлення
- mulog/outcome - статус повідомлення
- server-id - ідентифікатор серверу, з якого прийшло повідомлення
- message - текст повідомлення

Приклад повідомлення:

```js
{:mulog/event-name :async.log/logger,
:mulog/timestamp  613022400000,
:mulog/trace-id   #mulog/flake "4lIfs0B6IRjDMHo6g2Tb5rf4lz1kQNXl"
:mulog/outcome    :ok
:server-id        "S01"
:message          "Starting server"}
```

З вказаних полів необхідно вибрати наступні: `mulog/timestamp`, `server-id` та `message`.

Вихідний лог має наступний формат:

- Порядок записів довільний
- Усі записи починаються з нової строки (розділені символом `\n`)
- Кожний елемент запису відбитий символом `;`

Порядок елементів вихідного запису наступний:

- Дата, що є записаною в форматі [ISO 8601](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString), тобто, 2022-09-27 (джерело: `mulog/timestamp`)
- Ідентифікатор серверу (джерело: `server-id`)
- Текст повідомлення (джерело: `message`)

Приклад:

```js
2022-09-27;S01;Starting server
```

Обмеження:

- Розмір вхідного лог-файлу завжди не більше 4096 символів
- В наданих прикладах дати завжди будуть валідними
- Швидкість роботи алгоритму та обсяг використовуваної пам'яті значення не мають

**Приклад:**

```js
logParsing(`
{:mulog/event-name :async.log/logger,
:mulog/timestamp  1664789750262,
:mulog/trace-id   #mulog/flake "4lIfs0B6IRjDMHo6g2Tb3rf4lz1kQNXl"
:mulog/outcome    :ok
:server-id        "S01"
:message          "Starting server"}
{:mulog/event-name :async.log/logger,
:server-id        "S02"
:mulog/outcome    :error
:mulog/trace-id   #mulog/flake "aRIss10BeDmj069o01TbIr4wLwiK4zxQ"
:mulog/timestamp  1664789800446,
:message          "Server pending error"}
`);
```

Після обробки поверне:

```js
2022-10-03;S01;Starting server
2022-10-03;S02;Server pending error
```

<details>
  <summary>Підказка</summary>

---

  Простіше обробляти таку довгу строку, перетворивши на масив, як це робилось раніше в завданні [stringToArray](tracks/basic/06-stringToArray).

  Щоб обробити табуляції між ідентифікатором і його значенням, можна скористатися методом [replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) або [replaceAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll), як було показано в завданні [removeStringSpace](tracks/basic/14-removeStringSpace/).

  Знаходити необхідні значення ідентифікаторів можна за допомогою вбудованого методу строки [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf). Або ж можна скористатися з регулярних виразів ["Regular expression syntax cheatsheet"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet).

  Щоб перетворити timestamp на дату, скористуйтеся JavaScript обʼєктом [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

  ## Алгоритм дій

  1. Виділити кожний запис (міститься між фігурними дужками)
  1. Для кожного запису: розділити запис на елементи
  1. Перевірити що елементів, що їх рівно 6, тобто запис є повним
  1. Для кожного повного запису витягнути значення необхідних ідентифікаторів (час конвертувати в формат ISO) і додати до вихідної строки
  1. Повернути закінчену вихідну строку

</details>
