# online-editor-tasks

## Install

Для запуску необхідно встановити залежності, виконавши
команду `npm install` в корні проєкту.

Вимоги до версій "Nodejs" та "npm":

```json
{
  "node": ">=16.0.0",
  "npm": ">=8.0.0"
}
```

## Як додати задачу?

Для генерації структури задачі в корні проєкту необхідно виконати команду:

```
npm run create-task
```

Задачу можна додати в наявний трек:

[![asciicast](https://asciinema.org/a/497519.svg)](https://asciinema.org/a/497519)

Або створити новий трек, та додати задачу в нього:

[![asciicast](https://asciinema.org/a/qyGZKKVPQn6u5NUwtVOgMKgxT.svg)](https://asciinema.org/a/qyGZKKVPQn6u5NUwtVOgMKgxT)

Після цього у відповідній директорії (нового або наявного треку) буде створена
базова структура задачі. Цю структуру необхідно наповнити описом завдання, тестами
та оптимальним рішенням.

## Структура задачі

До проєкту задачі додаються шляхом пулл-реквесту в поточний репозиторій.

Приклад структури задачі:

```
.
└── 📁 00-taskName
  ├── 📄 readme.md
  ├── 📄 index.js
  ├── 📄 index.spec.html
  ├── 📄 index.spec.js
  └── 📁 solution
      ├── 📄 index.js
      └── 📄 readme.md
```

- **_readme.md_** - опис завдання
- **_index.js_** - структура завдання без рішення
- **_index.spec.html_** - файл для запуску тестів
- **_index.spec.js_** - тести до завдання
- **_solution/index.js_** - файл з розв'язанням завдання
- **_solution/readme.md_** - опис алгоритму розв'язання завдання

## Структура треку завдань

Трек (track) - це підбірка завдань/задач об'єднаних спільною ідеєю.

Можна об'єднувати задачі в трек за критерієм складності, наприклад:
"level-1", "level-2", "level-3", ...

Так само можна піти шляхом об'єднання завдань відповідно до тем:
"array-methods", "data-conversion", "algorithms", ...

Або навіть об'єднати ці два підходи: "array-methods-level-1"

Кожен трек може містити до 99 задач, які іменуються за відповідним шаблоном:

```
<номер-завдання>-<назва-завдання>
```

**Приклад структури треку:**

```
.
└── 📁 trackName
  ├── 📄 readme.md
  ├── 📁 01-taskName
  ├── 📁 02-someTask
  ├── 📁 ...
  ├── 📁 99-anotherTask
```

- **_readme.md_** - опис треку
- **_00-taskName_** - назва завдання

Самі завдання будуть видаватись користувачу для вирішення відповідно до номера в
назві завдання.

## Запуск тестів

Для тестування завдань використовується ["jasmine"](https://github.com/jasmine/jasmine).

Тести до завдань можна запустити двома способами:

- відкривши в браузері файл **_"index.spec.html"_** відповідного завдання
- запустивши одну з команд тест-ранера ["karma"](https://karma-runner.github.io/latest/index.html)

### Запуск тестів за допомогою Karma

Запуск тестів для всіх задач серед всіх наявних треків:

```
npm run test:karma
```

Запуск тестів для певного завдання із певного треку:

```
npm run test:karma -- --grep <track-name>/<test-name>
```

Наприклад запустимо тести для задачі "sum" з треку "basic":
`npm run test:karma -- --grep basic/sum`

Запуск тестів для всіх задач в середині треку:

```
npm run test:karma -- --grep <track-name>
```

Наприклад запустимо тести для всіх задач треку "basic":
`npm run test:karma -- --grep basic`

## Contributors

<!-- readme: collaborators,contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/dosandk">
            <img src="https://avatars.githubusercontent.com/u/7078894?v=4" width="100;" alt="dosandk"/>
            <br />
            <sub><b>dosandk</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/merezhanyi-eleks">
            <img src="https://avatars.githubusercontent.com/u/103418570?v=4" width="100;" alt="merezhanyi-eleks"/>
            <br />
            <sub><b>merezhanyi-eleks</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/YevheniiKolomiiets">
            <img src="https://avatars.githubusercontent.com/u/37960571?v=4" width="100;" alt="YevheniiKolomiiets"/>
            <br />
            <sub><b>YevheniiKolomiiets</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/SerhiyKoziuk">
            <img src="https://avatars.githubusercontent.com/u/113430116?v=4" width="100;" alt="SerhiyKoziuk"/>
            <br />
            <sub><b>SerhiyKoziuk</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/olenaabakumenkoe">
            <img src="https://avatars.githubusercontent.com/u/131757328?v=4" width="100;" alt="olenaabakumenkoe"/>
            <br />
            <sub><b>olenaabakumenkoe</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ivan-kodola-eleks">
            <img src="https://avatars.githubusercontent.com/u/107475056?v=4" width="100;" alt="ivan-kodola-eleks"/>
            <br />
            <sub><b>ivan-kodola-eleks</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: collaborators,contributors -end -->

some test changes...
