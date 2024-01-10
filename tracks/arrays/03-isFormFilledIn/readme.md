# isFormFilledIn

> Author: [ValeriiBoiko](https://github.com/ValeriiBoiko)

В даному завданні, потрібно реалізувати функцію, яка буде визначати чи заповнені обовʼязкові поля форми. 

Функція прийматиме два параметри:
- перший, це обʼєкт із полями форми `{"fieldName1": "fieldValue1"}`. Для простоти всі значення полів мають тип string.
- другим аргументом є масив полів, які обовʼязкові для заповнення (`["email", "name"]`)

Якщо всі обовʼязкові поля мають значення, то функція має повернути true. Якщо якесь з обовʼязкових полів НЕ заповнене, то функція має повернути false. Стан необовʼязкових полів можна ігнорувати.

**Приклад:**

```js
isFormFilledIn({}, []); // true
isFormFilledIn({}, ["email"]); // false
isFormFilledIn({name: "", email: ""}, []); // true
isFormFilledIn({name: "", email: ""}, ["email"]); // false
isFormFilledIn({name: "Foo", email: ""}, ["email"]); // false
isFormFilledIn({name: "", email: "bar@bar"}, ["email"]); // true
isFormFilledIn({name: "Foo", email: "bar@bar"}, ["email"]); // true
```

<details>
  <summary>Підказка</summary>

___

  1) Оскільки необовʼязкові поля можна не брати до уваги, то можна використати масив обовʼязкових полів для ітерації. Якби потрібно було проводити додаткову валідацію на інших полях, то прийшлось би трансформувати обʼєкт форми в масив.

  2) Для зручнішого визначення чи відповідає поле умові, і якщо ні, то перервати процес ітерації, можна використати метод масиву [some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
</details>
