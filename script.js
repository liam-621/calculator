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
let result;

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

// Initializing current variables
let currentNumber = ""; // The most recent number the user has inputted
let currentOperator = ""; // The most recent operator the user has inputted
let currentNumberSet = ""; // The most recent number set

let setCount = 0; // Keep track of how many number sets we have

numberBtns.addEventListener("click", function(event) {
    if (result) {
        clearDisplay()
    }
    currentNumber = event.target.id; // The id of the event, which is a number, is the current number
    updateDisplay(currentNumber);

    currentNumberSet += event.target.id; // id of event is added to the current number set
});

operatorBtns.addEventListener("click", function(event) {
    setCount += 1;

    if (setCount >= 2) { // If there are two sets, get the result and make that the new primary number to operate on 
        getResult();
        setCount = 0;

        currentOperator = event.target.id;
        updateDisplay(currentOperator);
        
        number = result; // Setting the primary number as the result of our first operation
        currentNumberSet = ""; 

        operator = currentOperator;
    } else { // Default behaviour
        currentOperator = event.target.id;
        updateDisplay(currentOperator); // Operator is added to display
    
        number = Number(currentNumberSet); // Storing the primary number as the set that comes before the operator
        currentNumberSet = ""; // Clearing the current numberSet so we can get the secondary numberSet
    
        operator = currentOperator; // The operator (which we will send to the operate function) is set as the current operator
    }


});

function updateDisplay (newContent) {
    if (display.textContent === "0000") { // Clear dummy display
        display.textContent = ""
    };
    display.textContent += newContent; // Appending either a number or operator to the display
}

const equalsBtn = document.querySelector("#equals");

equalsBtn.addEventListener("click", getResult);

function getResult() {
    if (!number) { // Exit function if no operator has been added
        return;
    } else if (operator === "/" && Number(currentNumberSet) === 0) {
        alert("No dividing by zero!");
        return;
    }
    anotherNumber = Number(currentNumberSet); // Storing the secondary number as the set that comes after the operator
    result = operate(operator, number, anotherNumber); // We send the current operator and the stored numbers to the function
    console.log(result);
    display.textContent = result; // Update the display with the result
}

const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", clearDisplay); 

function clearDisplay() { // Clear all variables and display 
    display.textContent = "0000";
    currentNumberSet = "";
    number = null;
    operator = null;
    anotherNumber = null;
    result = null;
    setCount = 0;
}