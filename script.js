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
    if (operation !== null) {
        inputTwo = screenBottom.textContent;
    }
    screenTop.textContent = `${inputOne} ${operation} ${inputTwo}`;
    screenBottom.textContent = operate(operation, inputOne, inputTwo);
    console.log(operate(operation, inputOne, inputTwo));
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

// screenTop needs to reflect `inputOne operation inputTwo` upon equals press

// MAKE IT STACKABLE (it is now, but answer doesn't display in screenTop)
// FIGURE OUT +/- TO NUMBERS

