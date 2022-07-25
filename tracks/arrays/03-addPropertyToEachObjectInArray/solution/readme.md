# addPropertyToEachObjectInArray

Розв'язання цієї задачі може виглядати ось так:

```js
const usersList = [{
  name: 'User1'
}, {
  name: 'User2'
}, {
  name: 'User3'
}]

// forEach
const addPropertyToEachObjectInArray = (usersList) => {
  usersList.forEach((element) => {
    element.isActive = true
  });

  console.log(usersList);
};

addPropertyToEachObjectInArray(usersList);

// map
const addPropertyToEachObjectInArray = (usersList) => {
  let mappedList = usersList.map((element) => ({
    ...element,
    isActive: true
  }));

  console.log(mappedList);
};

addPropertyToEachObjectInArray(usersList);

```

## Алгоритм дій:

  1) Викликати forEach() або map() за допомогою колбеку, який має параметр елемента з об’єктом
  2) Присвоїти властивість isActive зі значенням true

## Корисні посилання