const screenTop = document.querySelector(".screen-top");
const screenBottom = document.querySelector(".screen-bottom")
const numberButtons = document.querySelectorAll(".number");
const mdasButtons = document.querySelectorAll(".mdas")
const deleteKey = document.querySelector(".delete")
const clearKey = document.querySelector(".clear")
const calculate = document.querySelector(".q")

numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
);
mdasButtons.forEach((button) => 
    button.addEventListener('click', () => setOperation(button.textContent))
);
calculate.addEventListener('click', () => equalsButton());

deleteKey.addEventListener('click', () => backspace());
clearKey.addEventListener('click', () => clear());

let inputOne = '';
let inputTwo = '';
let operation = 'null'

function appendNumber(x) {
    screenBottom.textContent += x;
}

function clear() {
    screenBottom.textContent = '';
    screenTop.textContent = '';
}

function backspace() {
    screenBottom.textContent = screenBottom.textContent.slice(0, -1);
}

function setOperation(mdas) {
    if (inputOne == '') {
        inputOne = screenBottom.textContent;
        screenTop.textContent = `${inputOne} ${mdas}`;
    }
    switch (mdas) {
        case "+":
            operation = add;
            console.log("add")
            break;
        case "-":
            operation = add;
            console.log("sub")
            break;
        case "x":
            operation = add;
            console.log("multiply")
            break;
        case "÷":
            operation = add;
            console.log("divide")
            break;
    }
}

function operate(op, x, y) {
    switch (op) {
        case "+":
            return add(x,y)
        case "-":
            return subtract(x,y)
        case "x":
            return multiply(x,y)
        case "÷":
            return divide(x,y)
    }
}

function equalsButton() {
    console.log(operate(operation, inputOne, inputTwo))
}

// EDIT OPERATION FUNCTION TO CHANGE OPERATION
// function operation(op) {
//     if (op === '+') {
//         return add(x, y)
//     }
//     if (op === '-') {
//         return subtract(x, y)
//     }
//     if (op === 'x') {
//         return multiply(x, y)
//     }
//     if (op === '÷') {
//         return divide(x, y)
//     }
// }

function add(x, y) {
	return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

// backspace function
// Clear function