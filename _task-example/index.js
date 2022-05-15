const sumAllArguments = (...allArgs) => {
  let sum = 0;

  for (const item of allArgs) {
    sum += item;
  }

  return sum;
};

const sortNumbers = (arr = [], ) => {

};

const sortStrings = (arr = [], direction = '') => {
  if (direction === 'asc') {

  }

  if (direction === 'desc') {

  }
};

/*
Уявимо що в нас є список продуктів з витраченими на них коштами,
представимо цей список у вигляді масиву: [100, 23, 50, 40, 12, ...].

Потрібно отримати загальну суму на яку ми закупили продукти.

Для розв'язання цієї проблеми, давайте створімо функцію `sumArrayElements`.
Ця функція буде приймати масив чисел, а вертати їх суму.

 */

const getSumOfArrayElements = (arr = []) => {
  return arr.reduce((accum, item) => {
    return accum + item;
  }, 0);
};

/*
Уявимо що в інтерент-магазині потрібно підрахувати кількість замовлень
кожного з товарів. Дані про покупки товарів зберігаються у вигляді масиву:
`['keyboard-sk8855', 'mouse-sd63', 'keyboard-sk8855', 'ssd-asus', 'ssd-asus', ...]`.

Потрібно отримати кількість продажів кожного товару.

Для розв'язання цієї проблеми, давайте створимо функцію `transformArrToObject`, яка
в якості аргументу буде приймати масив даних про продажі товарів, а повертати об'єкт,
ключами якого будуть назви товарів, а значеннями - кількість продажів цього товару,
або іншими словами, кількість раз як товар зустрівся в масиві.

 */
const transformArrToObject = (arr = []) => {
  const result = {};

  for (const item of arr) {
    if (result[item]) {
      result[item] += 1;
    }
  }
};


const result = transformArrToObject(['apple', 'banana', 'apple', 'orange', 'orange']);
/*

{
  apple: 2,
  banana: 1,
  orange: 2
}

 */


const objToArray = () => {

}
