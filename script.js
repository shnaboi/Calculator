const screen = document.querySelector("screen");
const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach((button) => 
    button.addEventListener('click', () => console.log('works'))
);

let inputOne = '';
let inputTwo = '';

function operate(op, x, y) {
    if (op === '+') {
        return add(x, y)
    }
    if (op === '-') {
        return subtract(x, y)
    }
    if (op === 'x') {
        return multiply(x, y)
    }
    if (op === '÷') {
        return divide(x, y)
    }
}

const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
    return x - y;
};

const multiply = function(x, y) {
    return x * y;
}

const divide = function(x, y) {
    return x / y;
}

// backspace function
// Clear function