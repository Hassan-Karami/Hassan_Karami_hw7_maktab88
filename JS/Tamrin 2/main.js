let userData = [];
personData.forEach(function (item) {
  userData.push(
    Object.assign(
      item,
      ...additionalPersonData.filter((person) => person.uid === item.uid)
    )
  );
});

function read(userInput) {
  console.log(userInput);
}

function create(userInput) {
  if (
    userData.some(
      (user) => user.uid === userInput.uid || userInput.uid === undefined
    )
  ) {
    throw new Error("please Enter a unique user id");
  }
  userData.push(userInput);
  console.log(" Successful Creation");
}

function update(userInput) {
  if (userData.length === 0 || !userData.some(item=>toString.call(item)==="[object Object]")) {
    throw new Error("userData is Empty or doesn't hava any object in it");
  }
  userData.forEach(function (item) {
    if (item.uid === userInput.uid) {
      Object.assign(item, userInput);
    }
  });
}

function remove(inputId) {
  userData.forEach(function (item, index) {
    if (item.uid === inputId) {
      userData.splice(index, 1);
      console.log("Successful Removation");
    }
  });
}
