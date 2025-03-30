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
        add(number, anotherNumber);
    } else if (operator === "-") {
        subtract(number, anotherNumber);
    } else if (operator === "*") {
        multiply(number, anotherNumber);
    } else if (operator === "/") {
        divide(number, anotherNumber);
    }
}

const buttons = document.querySelector("#buttons");
const display = document.querySelector("#display");

let currentNumbers = ""; // Initializing current numbers variable

buttons.addEventListener("click", function(event) {
    currentNumbers += event.target.id; // The id of the event, which is a number, is added to the currentNumbers
    display.textContent = currentNumbers; // The display shows currentNumbers
});