const add = function(x, y) {
	return (x+y);
};

const subtract = function(x, y) {
	if (x > y) {
    return (x-y);
  } else {
    return (y-x);
  }
};

const sum = function(x) {
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    result += x[i];
  }
  return result;
};

const multiply = function(x) {
  let result = 1;
  for (let i = 0; i < x.length; i++) {
    result *= x[i];
  }
  return result;
};

const power = function(x, y) {
	let result = 1;
  if (y == 0) {
    result = 1;
  } else if (y == 1) {
    result = x;
  } else {
    for (let i = 0; i < y; i++) {
      result *= x;
    }
  }
  return result;
};

const factorial = function(x) {
	let result = x;
  if (x <= 1) {
    result = 1;
  } else {
    for (let i = x - 1; i >= 1; i--) {
      result *= i;
    }
  }
  return result;
};

