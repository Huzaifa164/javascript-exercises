const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, item) => total + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, item) => total * item);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  if(num == 0 || num == 1) {
    return 1;
  }
  let fact = 1;
	for(let i = 1; i <= num; i++) {
     fact *= i;
  }
  console.log(fact);
  return fact;
};
factorial(2);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
