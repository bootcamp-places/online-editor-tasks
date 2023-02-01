# minifyCss

Розв'язання цієї задачі може виглядати ось так:

```js
const minifyCss = (string = "") => {
  return string
    .replace(/\/\*([\s\S]*?)\*\//g, "") // (1)
    .replace(/\s*\{\s*/g, "{") // (2)
    .replace(/\s*\}\s*/g, "}") // (3)
    .replace(/:\s*/g, ":") // (4)
    .replace(/;\s*/g, ";") // (5)
    .replace(/;}/g, "}") // (6)
    .trim(); // (7)
};
```

## Алгоритм дій:

  1. Прибрати CSS коментарі (усе між `/*` та `*/`, включно з переносом рядку)
  1. Почистити пробіли до і після `{`
  1. Почистити пробіли до і після `}`
  1. Почистити пробіли після `:`
  1. Також почистити пробіли після `;`
  1. Видалити останній `;` у групи
  1. Прибрати пусті місця з початку рядка і кінця

[опис алгоритму вирішення задачі]

## Корисні посилання

1. [Lea Verou — /Reg(exp){2}lained/: Demystifying Regular Expressions](https://www.youtube.com/watch?v=M7vDtxaD7ZU)
1. [Regular Expressions Demystified](https://www.youtube.com/watch?v=0LKdKixl5Ug&list=PL55RiY5tL51ryV3MhCbH8bLl7O_RZGUUE&index=1)
