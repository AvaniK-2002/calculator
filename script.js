document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    let currentInput = '';
    let firstOperand = '';
    let operator = '';

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const value = button.value;

            if (value === 'C') {
                clearDisplay();
            } else if (value === '=') {
                calculateResult();
            } else if (isOperator(value)) {
                setOperator(value);
            } else {
                currentInput += value;
                updateDisplay(currentInput);
            }
        });
    });

    function clearDisplay() {
        currentInput = '';
        firstOperand = '';
        operator = '';
        updateDisplay('');
    }

    function updateDisplay(value) {
        display.value = value;
    }

    function setOperator(value) {
        if (currentInput !== '') {
            firstOperand = currentInput;
            operator = value;
            currentInput = '';
        }
    }

    function isOperator(value) {
        return value === '+' || value === '-' || value === '*' || value === '/';
    }

    function calculateResult() {
        if (currentInput !== '' && firstOperand !== '' && operator !== '') {
            const num1 = parseFloat(firstOperand);
            const num2 = parseFloat(currentInput);
            let result;

            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        result = 'Error';
                    }
                    break;
                default:
                    result = 'Error';
            }

            currentInput = '';
            firstOperand = '';
            operator = '';
            updateDisplay(result.toString());
        }
    }
});
