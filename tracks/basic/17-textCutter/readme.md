# textCutter

**Увага:** Якщо ви ще не пройшли завдання [sliceString](js-track/basic/sliceString), то радимо почати саме з нього, а потім повернутись сюди.

Ви працюєте над модулем продукту. Одним із елементів цього модуля є відображення скороченого опису продукту. У цьому завданні вам необхідно реалізувати функцію скорочення тексту.

Функція приймає на вхід два аргументи:

- Вихідний текст `string`
- Максимальну довжину скороченого тексту `n`

Обмеження:

- Розмір вихідного тексту не більше 250 символів
- Текст завжди містить тільки літери латинського алфавіту, цифри та знаки пунктуації (тільки кома "," та крапка ".")
- Задане значення для скорочення завжди не більше довжини вихідного тексту
- Якщо довжина вихідного тексту більша за `n`, то скорочений текст має закінчуватись знаком "...", та довжина такого тексту має бути менше або дорівнювати `n` (з урахуванням трьох крапок у кінці)
- Скорочений текст не має містити "висячих" знаків пунктуації (тобто не має бути "this is fine,..."); в цьому випадку довжина скороченого тексту буде менша на один (мінус кома)
- Скорочений текст не має містити "обрізаних" слів (тобто не має бути "this is fi...")
- Інші випадки, окрім розглянутих до уваги не приймати (тести не містять інших випадків)

**Приклад:**

```js
textCutter("Lorem ipsum.", 12);
// Lorem ipsum.

textCutter("Lorem ipsum. Dolor sit, amt.", 21);
// Lorem ipsum. Dolor...
```

<details>
  <summary>Підказка</summary>

---
  Зверніть увагу на метод [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice), а також на метод стрічки [`split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) і метод масиву [`join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

  Ви можете розглядати вихідний текст як строку і обробляти її за допомогою циклу [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#iterating_over_a_string), як було показано в завданні [revertCase](js-track/basic/revertCase), або як масив слів, як було показано у [stringToArray](js-track/basic/stringToArray).

</details>
