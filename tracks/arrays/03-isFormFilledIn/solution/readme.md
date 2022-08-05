# isFormFilledIn

Розв'язання цієї задачі може виглядати ось так:

```js
const isFormFilledIn = (form = {}, requiredFields = []) => {
  if (requiredFields.length) {
    return !requiredFields.some((fieldName) => !form[fieldName]);
  }

  return true;
};
```

## Алгоритм дій:

1) Якщо масив обовʼязкових полів не порожній, то виконуємо крок 2. Якщо порожній, то просто повертаємо true, оскільки це означає, що всі поля є не обовʼязковими для заповнення
2) Викликаємо метод `some`, який приймає елемент масиву, як параметр (`fieldName`). Метод `some` перериває ітерацію і повертає значення `true`, якщо хоча б один з елементів задовільнив описану в callback-функції умову
3) В нашому випадку, якщо хоча б одне із обовʼязкових полів, має falsy значення (`!form[fieldName]`), то проходити по масиву далі немає сенсу і `some` поверне `true`. Але для того, щоб значення, що повертається, відповідало меті нашої фнукції, яка виходить із її назви, то ми інвертуємо значення (символом `!`), щоб зберігалась лоігка: `isFormFilledIn - false`.

## Корисні посилання

[Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)