// using function age for whichSchool, output is based on function (age)
const whichSchool  = function (age) {
  // output for age less than 13
  if (age <= 13) {
    console.log("Elementary")
// output for ages between 13-18
  } else if (age > 13 && age < 18) {
    console.log("Secondary School")
// output for ages over 18
  } else {
    console.log("Lighthouse Labs")
  }
}

console.log("I am 35. Which school should I go to");
console.log(whichSchool(35));