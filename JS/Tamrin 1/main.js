let userData=[];
personData.forEach(function(item){
      userData.push(Object.assign(...(additionalPersonData.filter(person=>person.uid=== item.uid)), item));
})
