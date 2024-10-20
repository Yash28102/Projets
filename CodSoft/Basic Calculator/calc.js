const display = document.getElementById('display'); // Corrected to match HTML
const buttons = document.querySelectorAll('button');

function calculate(expression) {
    console.log(expression);
    console.log(typeof(expression));
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return 'Malformed Operation';
    }
}

function operation(buttonValue) {
    if (buttonValue === 'Clear') {  // Updated to match the button text
        display.value = '';  // Clear display
    } else if (buttonValue === 'Del') {  // Updated to match the button text
        display.value = display.value.slice(0, -1);  // Delete last character
    } else if (buttonValue === '=') {
        display.value = calculate(display.value);  // Perform calculation
    } else {
        display.value += buttonValue;  // Append button value to display
    }
}

buttons.forEach(button => {
    let buttonValue = button.innerText;
    button.addEventListener('click', function () {
        operation(buttonValue);
    });
});
