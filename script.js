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
let toggleResetScreen = false;

function appendNumber(x) {
    if (toggleResetScreen) 
    resetScreenBottom();
    screenBottom.textContent += x;
}
function clear() {
    screenBottom.textContent = '';
    screenTop.textContent = '';
}
function backspace() {
    screenBottom.textContent = screenBottom.textContent.slice(0, -1);
}
function resetScreenBottom() {
    screenBottom.textContent = '';
    toggleResetScreen = false;

}
function setOperation(mdas) {
        inputOne = screenBottom.textContent;
        screenTop.textContent = `${inputOne} ${mdas}`;
        toggleResetScreen = true;
    switch (mdas) {
        case "+":
            operation = add;
            console.log("add")
            break;
        case "-":
            operation = subtract;
            console.log("sub")
            break;
        case "x":
            operation = multiply;
            console.log("multiply")
            break;
        case "÷":
            operation = divide;
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

// SECOND NUMBER (inputTwo) FUNCTIONALITY
// EQUALS BUTTON RETURNS THE EQUATION
// MAKE IT STACKABLE (keep pushing equals button)
// FIGURE OUT +/- TO NUMBERS