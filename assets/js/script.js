let accumulator = 0; // Initialize an accumulator to store ongoing results
let operator = '';
let lastNumber = null;
let inputs = []; // Initialize inputs array


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

// Modulo Function
function modulo(num1, num2) {
    return num1 % num2;
}

// Function to choose which calculation to perform 
function operate(inputs) {
    let operator = '';
    let accumulator = 0;
    let secondNumber = null;

    inputs.forEach(input => {
        if (!isNaN(parseFloat(input))) {
            if (accumulator === 0) {
                accumulator = parseFloat(input);
            } else {
                secondNumber = parseFloat(input);
                if (operator === '+') {
                    accumulator = add(accumulator, secondNumber);
                } else if (operator === '-') {
                    accumulator = sub(accumulator, secondNumber);
                } else if (operator === '*') {
                    accumulator = multiply(accumulator, secondNumber);
                } else if (operator === '/') {
                    accumulator = divide(accumulator, secondNumber);
                } else if (operator === '%') {
                    accumulator = modulo(accumulator, secondNumber);
                }
                operator = '';
                secondNumber = null;
            }
        } else {
            operator = input;
        }
    });

    result = accumulator; //!== 0 ? accumulator : 'Invalid Input';
    return result;
}

// This function stores inputs from the keys and update the display
function captureInputs() {
    let keys = document.querySelectorAll('.key');
    let inputDisplay = document.querySelector('.input-display');
    let resultsDisplay = document.querySelector('.results-display');
    let inputs = []; // Initialize inputs array

    keys.forEach((key) => {
        key.addEventListener('click', () => {
            if (key.value === 'c') {
                inputs = []; // Clear the inputs array
                inputDisplay.textContent = '0'; // Clear the display
                resultsDisplay.textContent = '0';
            } 

            else if(key.value === '=') {
                resultsDisplay.textContent = operate(inputs); // Call operate and display result on the resultsDisplay
            }
            
            else {
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
            }
        });
    });
}


captureInputs();