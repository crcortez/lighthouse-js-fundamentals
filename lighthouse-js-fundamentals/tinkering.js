// using function age for whichSchool, output is based on function (age)
const whichSchool  = function (age) {
  // output for age less than 13
  if (age < 13) {
    return "Elementary School";
// output for ages between 13-18
  } else if (age >= 13 && age <= 18) {
    return "Secondary School" 
// output for ages over 18
  } else {
    return "Lighthouse Labs"
  }
}
