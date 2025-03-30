function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let number;
let operator;
let anotherNumber;

function operate(operator, number, anotherNumber) {
    if (operator === "+") {
        return add(number, anotherNumber);
    } else if (operator === "-") {
        return subtract(number, anotherNumber);
    } else if (operator === "*") {
        return multiply(number, anotherNumber);
    } else if (operator === "/") {
        return divide(number, anotherNumber);
    }
}

const numberBtns = document.querySelector("#numbers");
const operatorBtns = document.querySelector("#operators");

const display = document.querySelector("#display");

// Initializing current number and operator variables
let currentNumber = ""; 
let currentOperator = "";

let currentNumberSet = "";


numberBtns.addEventListener("click", function(event) {
    currentNumber = event.target.id; // The id of the event, which is a number, is the current number
    updateDisplay(currentNumber);

    currentNumberSet += event.target.id; // id of event is added to the current number set
});

operatorBtns.addEventListener("click", function(event) {
    currentOperator = event.target.id;
    updateDisplay(currentOperator);

    number = Number(currentNumberSet);
    currentNumberSet = "";

    operator = currentOperator;
});

function updateDisplay (newContent) {
    if (display.textContent === "0") { // Clear dummy display
        display.textContent = ""
    };
    display.textContent += newContent;
}

const equalsButton = document.querySelector("#equals");

equalsButton.addEventListener("click", function() {
    anotherNumber = Number(currentNumberSet);
    result = operate(operator, number, anotherNumber);
    console.log(result);
})