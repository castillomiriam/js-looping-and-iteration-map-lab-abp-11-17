function lowerCaseDrivers(array){
  return array.map(function(driver){
    return driver.toLowerCase()
  })
};

function nameToAttributes (name) {
  return list.map(function (driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}
