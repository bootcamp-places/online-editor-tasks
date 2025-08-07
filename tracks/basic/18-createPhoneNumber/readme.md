# createPhoneNumber

Функція createPhoneNumber отримує масив numbers як вхідний параметр і створює рядок з номером телефону у певному заданому форматі (xxx) xxx-xxxx. У форматі x використовується для позначення будь-якої цифри, і ці символи 'x' у форматі будуть замінені на відповідні цифри з масиву numbers.

**Приклад:**

```js
// [код прикладу використання]
export const createPhoneNumber = (numbers = []) => {
  let format = "(xxx) xxx-xxxx";

  numbers.forEach(number => {
    format = format.replace('x', number);
  });

  return format;
};
```

<details>
  <summary>Підказка</summary>

___

Для створення номера телефону з заданим форматом (xxx) xxx-xxxx, вам потрібно замінити символи 'x' у форматі на відповідні цифри з масиву numbers. Заміна відбувається на кожній ітерації циклу forEach.
</details>
