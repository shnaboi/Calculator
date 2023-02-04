const screenTop = document.querySelector(".screen-top");
const screenBottom = document.querySelector(".screen-bottom")
const numberButtons = document.querySelectorAll(".number");
const mdasButtons = document.querySelectorAll(".mdas")
const deleteKey = document.querySelector(".delete")
const clearKey = document.querySelector(".clear")
const calculate = document.querySelector(".q")
const signKey = document.querySelector(".m")

numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
);
mdasButtons.forEach((button) => 
    button.addEventListener('click', () => setOperation(button.textContent))
);

calculate.addEventListener('click', () => equalsButton());
deleteKey.addEventListener('click', () => backspace());
clearKey.addEventListener('click', () => clear());
signKey.addEventListener('click', () => signToggle());

let inputOne = '';
let inputTwo = '';
let operation = null;
let toggleResetScreen = false;
let mathTrigger = false;
let inputOneToggle = false;

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

function appendNumber(x) {
    if (toggleResetScreen) 
    resetScreenBottom();
    mathTrigger = true;
    screenBottom.textContent += x;
}

function equalsButton() {
    toggleResetScreen = true;
    doMath();
}

function signToggle() {
    screenBottom.textContent -= (screenBottom.textContent * 2)
    if (inputOneToggle) {
        inputOne = screenBottom.textContent;
        inputOneToggle = false;
    }
}

function resetScreenBottom() {
    screenBottom.textContent = '';
    toggleResetScreen = false;
}

function setOperation(mdas) {
    if (inputOne !== '' && inputTwo == '') {
        if (mathTrigger) {
            doMath();
        }
    }
    inputOne = screenBottom.textContent;
    inputOneToggle = false;
    mathTrigger = false;
    operation = mdas;
    screenTop.textContent = `${inputOne} ${mdas}`;
    toggleResetScreen = true;
    inputTwo = '';
}

function doMath() {
    if (operation !== null && inputTwo == '') {
        inputTwo = screenBottom.textContent;
    }
    if (operation == null) {
        inputOne = screenBottom.textContent;
        screenTop.textContent = `${inputOne} = ${inputOne}`
        return
    }
    if (mathTrigger && inputOneToggle) {
        inputOne = screenBottom.textContent;
        mathTrigger = false;
        inputOneToggle = false;
    }
    // EXECUTE MATH
    screenTop.textContent = `${inputOne} ${operation} ${inputTwo} =`;
    inputOne = operate(operation, inputOne, inputTwo);
    screenBottom.textContent = inputOne;
    inputOneToggle = true;
}

// Math functions
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
    if (y === 0) {
        clear();
        screenTop.textContent = 'Error';
        alert('Cannot divide by 0');
        return
    }
    return x / y;
}

// KNOWN BUGS: 
// long decimals