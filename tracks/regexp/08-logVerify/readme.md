# logVerify

Ви працюєте над системою кібер-безпеки для великої компанії. Ваша задача - розробити функцію, яка буде аналізувати логи і визначати, з яких [IP-адрес](https://uk.wikipedia.org/wiki/IP-адреса) заходив користувач `userName` на сайт. Логи зберігаються у вигляді текстового файлу, де кожен рядок містить інформацію про одну дію відвідувача. Інформація про відвідувача міститься у такому форматі:

```text
user_name: <dd.mm.yy> <ip> 'userName'
```

Зверніть увагу, що `ip` адреса може бути як у форматі IPv4 (наприклад, `192.168.0.1`), так і IPv6 (наприклад, `fe80:0:0:0:200:f8ff:fe21:67cf`). При цьому, якщо використовується IPv6, то адреса записується у лапках (наприклад, `'fe80:0:0:0:200:f8ff:fe21:67cf'`).

Якщо ж користувача не знайдено, то необхідно повернути пустий масив.

В наведених тест-кейсах IP адреса є завжди валідною, тому вам не потрібно перевіряти її на валідність. Також IPv6 адреса завжди надана у повній формі, тобто не містить скорочень (наприклад, `fe80::200:f8ff:fe21:67cf`).

**Приклад:**

```js
const logs = `
record 1: 17.04.23
user_name: 17.04.23 192.168.0.1 'guest'
info: user 'guest' logged in
record 2: 18.04.23
user_name: 18.04.23 'fe80:0:0:0:200:f8ff:fe21:67cf' 'guest'
info: user 'guest' logged in
warning: user 'guest' tried to change password
record 3: 19.04.23
user_name: 19.04.23 196.20.0.1 'user'
info: user 'user' logged in
`;

logVerify(logs, 'guest'); // ["192.168.0.1", "fe80:0:0:0:200:f8ff:fe21:67cf"]
```

<details>
  <summary>Підказка</summary>

___

  Для тестування свого виразу зручно користуватись [regex101](https://regex101.com/).

  Для роботи з регулярними виразами використовуйте методи `String.prototype.match` або `RegExp.prototype.exec`.

  - [MDN: RegExp.prototype.exec](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
  - [MDN: String.prototype.match](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/String/match)

</details>
