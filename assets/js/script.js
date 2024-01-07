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

// Remove empty spaces from the array
let cleanedArray = inputs.filter(item => item.trim() !== '');

    cleanedArray.forEach(input => {
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
                if (!isNaN(parseFloat(key.value)) || key.value === '.') {
                    // Check if the last input was an operator or if the inputs array is empty
                    if (inputs.length === 0 || isNaN(parseFloat(inputs[inputs.length - 1]))) {
                        inputs.push(key.value);
                    } else {
                        inputs[inputs.length - 1] += key.value;
                    }
                } else {
                    // Handle operators
                    inputs.push(' ', key.value, ' '); // Space the operator for display
                }

                    inputDisplay.textContent = inputs.join(''); // Display the current input 
            }
        });
    });
}


captureInputs();