let firstNumber = 0;
let operator = '';
let lastNumber = 0;
let results = 0;


// Addition Function
function add(num1, num2) {
    return num1 + num2;
}

// Subtraction Function
function sub(num1, num2) {
    return num1 - num2;
}

// Multiplication Function
function multiply(num1, num2) {
    return num1 * num2;
}

// Division Function 
function divide(num1, num2) {
    return num1 / num2;
}

// Function to choose which calculation to perform 
function operate(firstNumber, operator, lastNumber) {
    if(operator == '+') {
        results = add(firstNumber, lastNumber);
    } else if(operator == '-') {
        results = sub(firstNumber, lastNumber);
    } else if(operator == '*') {
        results = sub(firstNumber, lastNumber);
    } else if(operator == '/') {
        results = sub(firstNumber, lastNumber);
    }
}