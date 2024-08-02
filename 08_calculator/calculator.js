const add = function(firstInt, secondInt) {
  return firstInt + secondInt;
};

const subtract = function(firstInt, secondInt) {
  return firstInt - secondInt;
};

const sum = function(userArray) {
  return userArray.reduce((acc, num) => acc + num, 0);
};

const multiply = function(userArray) {
  return userArray.reduce((acc, num) => acc * num, 1);
};

const power = function(intToExpt, exponential) {
  return intToExpt ** exponential;
};

const factorial = function(intToFactorial) {
    let result = 1;
    while(intToFactorial > 0){
      result *= intToFactorial;
      intToFactorial--;
    }
    return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
