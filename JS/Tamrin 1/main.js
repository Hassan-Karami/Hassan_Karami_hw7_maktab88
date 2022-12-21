let userData = [];
personData.forEach(function (item) {
  userData.push(
    Object.assign(
      item,
      ...additionalPersonData.filter((person) => person.uid === item.uid)
    )
  );
});
console.log(userData);
