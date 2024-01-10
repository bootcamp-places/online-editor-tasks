# logScan

Ви працюєте над системою кібер-безпеки для великої компанії. Ваша задача - розробити функцію, яка буде аналізувати логи і визначати, скільки разів користувач `userName` заходив на сайт. Логи зберігаються у вигляді текстового файлу, де кожен рядок містить інформацію про одну дію відвідувача. Інформація про відвідувача міститься у такому форматі:

```text
user_name: <dd.mm.yy> <ip> 'userName'
```

де `userName` - ім'я користувача, `dd.mm.yy` - дата відвідування (наприклад, `18.04.23`), `ip` - IP-адреса, з якої був здійснений вхід (наприклад, `127.0.0.1`).

Лог файл містить більше інформації, але вам потрібно визначити лише кількість входів користувача `userName`. Якщо користувача `userName` не знайдено, поверніть `0`.

Це завдання необхідно виконати за допомогою регулярних виразів.

**Приклад:**

```js
const logs = `
record 1: 17.04.23
user_name: 17.04.23 10.0.0.1 'guest'
info: user 'guest' logged in
record 2: 18.04.23
user_name: 18.04.23 127.0.0.1 'guest'
info: user 'guest' logged in
warning: user 'guest' tried to change password
record 3: 19.04.23
user_name: 19.04.23 196.20.0.1 'user'
info: user 'user' logged in
`;

logScan(logs, 'guest'); // 2
```

<details>
  <summary>Підказка</summary>

___

    Для тестування свого виразу зручно користуватись [regex101](https://regex101.com/).

  1. [MDN: Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
  2. Для роботи з регулярними виразами використовуйте метод [String.prototype.match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match).

</details>