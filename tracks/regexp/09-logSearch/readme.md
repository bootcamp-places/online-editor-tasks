# logSearch

Ви працюєте над системою кібер-безпеки для великої компанії.

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

logSearch(logs, 'guest'); // fe80:0:0:0:200:f8ff:fe21:67cf
```

<details>
  <summary>Підказка</summary>

---

  Для тестування свого виразу зручно користуватись [regex101](https://regex101.com/).

</details>