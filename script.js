const screenTop = document.querySelector(".screen-top");
const screenBottom = document.querySelector(".screen-bottom")
const numberButtons = document.querySelectorAll(".number");
const mdasButtons = document.querySelectorAll(".mdas")
const deleteKey = document.querySelector(".delete")
const clearKey = document.querySelector(".clear")

numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
);
mdasButtons.forEach((button) => 
    button.addEventListener('click', () => console.log('works'))
);

deleteKey.addEventListener('click', () => backspace());
clearKey.addEventListener('click', () => clear());

let inputOne = '';
let inputTwo = '';

// ADD APPEND NUMBER FUNCTION
function appendNumber(x) {
    screenBottom.textContent += x;
}

function clear() {
    screenBottom.textContent = '';
}

// function backspace() {
//     screenBottom.textContent.slice(0, -1);
// }

console.log(screenBottom.textContent[screenBottom.textContent.length - 1])

// EDIT OPERATION FUNCTION TO CHANGE OPERATION
function operation(op) {
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