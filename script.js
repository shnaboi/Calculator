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

function equalsButton() {
    toggleResetScreen = true;
    doMath();
    inputTwoReset = true;
}

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
function signToggle() {
    screenBottom.textContent *= -1;
}
function resetScreenBottom() {
    screenBottom.textContent = '';
    toggleResetScreen = false;
}
function setOperation(mdas) {
    if (inputOne !== '' && inputTwo == '') {

            console.log('works')
            doMath();

    }

    inputOne = screenBottom.textContent;
    operation = mdas;
    screenTop.textContent = `${inputOne} ${mdas}`;
    toggleResetScreen = true;
    // Chains together equations WITHOUT hitting equals every time
    if (operation !== null) {
        inputTwo = '';
    }
    // Chains together equations WITHOUT hitting equals every time
}

function doMath() {
    // This starts init equation
    if (operation !== null && inputTwo == '') {
        inputTwo = screenBottom.textContent;
    } 
    if (operation !== null && 
        inputOne !== '' && 
        inputTwo !== '') {

        }
    // This starts init equation
    screenTop.textContent = `${inputOne} ${operation} ${inputTwo} =`;
    console.log(`inputOne = ${inputOne}`)
    inputOne = operate(operation, inputOne, inputTwo);
    screenBottom.textContent = inputOne;
    console.log(`inputTwo = ${inputTwo}`)
    console.log(`operator = ${operation}`)
    console.log(`answer = ${inputOne}`)
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
        screenTop.textContent = 'Error';
        return 'Cannot divide by 0';
    }
    return x / y;
}

// KNOWN BUGS: 
// pressing mdas buttons after equals causes incorrect activity
// pressing consecutive mdas buttons causes equations to exponentiolly grow

// !!!
// pressing operator should only do math
// if
// there is an operator, inputOne value, and inputTwo value
// pressing an operator should reset inputTwo value
