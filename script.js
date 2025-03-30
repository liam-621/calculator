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