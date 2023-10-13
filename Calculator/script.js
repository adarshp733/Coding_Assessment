let currentInput = '';
let operators = ['+', '-', '*', '/'];

function appendToDisplay(value) {
    // Check if the last character of currentInput is an operator
    if (operators.includes(value) && operators.includes(currentInput[currentInput.length - 1])) {
        // If an operator is entered after another operator, replace the last one
        currentInput = currentInput.slice(0, -1) + value;
    } else {
        currentInput += value;
    }
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        document.getElementById('display').value = currentInput;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
