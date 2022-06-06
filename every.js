const ages = [32, 33, 16, 40];


function checkAge(age) {
    return age > 18;
  }
  var age=ages.every(checkAge)
  console.log(age)
