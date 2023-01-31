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
let operation = null;
let toggleResetScreen = false;
let inputTwoReset = false;

function appendNumber(x) {
    if (toggleResetScreen) 
    resetScreenBottom();
    screenBottom.textContent += x;
}
function clear() {
    screenBottom.textContent = '';
    screenTop.textContent = '';
    inputOne = '';
    inputTwo = '';
    operation = null;
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
        if (inputTwoReset == true) {
            inputTwo = '';
        }
    switch (mdas) {
        case "+":
            operation = "+";
            console.log("add")
            break;
        case "-":
            operation = "-";
            console.log("sub")
            break;
        case "x":
            operation = "x";
            console.log("multiply")
            break;
        case "÷":
            operation = "÷";
            console.log("divide")
            break;
    }
    inputTwoReset = true;
}

function operate(op, x, y) {
    x = Number(x)
    y = Number(y)
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
    if (operation !== null && inputTwo == '') {
        inputTwo = screenBottom.textContent;
    } 
    screenTop.textContent = `${inputOne} ${operation} ${inputTwo}`;
    screenBottom.textContent = operate(operation, inputOne, inputTwo);
    console.log(`${inputOne} ${operation} ${inputTwo}`);
    inputOne = screenBottom.textContent;
    toggleResetScreen = true;
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

// clicking numbers after equation is returned adds them to answer
// ^^^ this should start a new equation

// FIGURE OUT +/- TO NUMBERS

