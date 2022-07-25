const usersList = [{
  name: 'User1'
}, {
  name: 'User2'
}, {
  name: 'User3'
}];

export const addPropertyToEachObjectInArray = (usersList) => {
  usersList.forEach((element) => {
    element.isActive = true
  });
  console.log(usersList);
};

addPropertyToEachObjectInArray(usersList);