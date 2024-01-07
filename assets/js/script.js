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

// This function stores inputs from the keys and update the display
function captureInputs() {
    let keys = document.querySelectorAll('.key');
    let inputDisplay = document.querySelector('.input-display');
    let inputs = []; // Initialize inputs array

    keys.forEach((key) => {
        key.addEventListener('click', () => {
            inputs.push(key.value);
            
            // Clear the display before updating with new input
            inputDisplay.textContent = '';

            // Update display with all inputs separated by spaces
            inputs.forEach((input, index) => {
                // Avoid adding space after the last input
                if (index !== inputs.length - 1) {
                    inputDisplay.textContent += `${input} `;
                } else {
                    inputDisplay.textContent += `${input}`;
                }
            });
        });
    });
}

captureInputs();