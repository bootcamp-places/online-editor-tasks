# logSearch

Ви працюєте над системою кібер-безпеки для великої компанії. Вам необхідно написати функцію `logSearch`, яка буде аналізувати логи і шукати підозрілу активність користувачів. В цьому завданні, вам необхідно шукати записи, які починаються зі слова "warning" і повертати [IP-адресу](https://uk.wikipedia.org/wiki/IP-адреса) користувача, через якого то було. Логи зберігаються у вигляді текстового файлу, де кожен рядок містить інформацію про одну дію відвідувача. Інформація про відвідувача міститься у такому форматі:

```text
user_name: <dd.mm.yy> <ip> 'userName'
warning: user 'userName' tried to <action>
```

Зверніть увагу, що `ip` адреса може бути як у форматі IPv4 (наприклад, `192.168.0.1`), так і IPv6 (наприклад, `fe80:0:0:0:200:f8ff:fe21:67cf`). При цьому, якщо використовується IPv6, то адреса записується у лапках (наприклад, `'fe80:0:0:0:200:f8ff:fe21:67cf'`).

Якщо ж користувача не знайдено, то необхідно повернути пустий рядок.

В наведених тест-кейсах IP адреса є завжди валідною, тому вам не потрібно перевіряти її на валідність. Також IPv6 адреса завжди надана у повній формі, тобто не містить скорочень (наприклад, `fe80::200:f8ff:fe21:67cf`).

В наведених тест-кейсах завжди є тільки один запис зі словом "warning", тому вам не потрібно шукати всі записи зі словом "warning".

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

logSearch(logs); // fe80:0:0:0:200:f8ff:fe21:67cf
```

## Алгоритм дій

1. Знайти рядок, який починається зі слова "warning".
1. Інакше повернути порожній рядок.
1. Запамʼятати імʼя користувача, якого стосується цей запис.
1. Знайти найближчий попередній рядок, який починається зі слова "user_name" і містить імʼя користувача, якого стосується запис про підозрілу активність.
1. Повернути IP-адресу користувача, який здійснив підозрілу дію.

<details>
  <summary>Підказка</summary>

---

  Для тестування свого виразу зручно користуватись [regex101](https://regex101.com/).

</details>