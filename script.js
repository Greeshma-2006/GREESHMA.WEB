// Function to append values to the display
let currentInput = "0";
let operator = null;
let previousInput = null;

const display = document.getElementById("display");

function updateDisplay() {
display.innerText = currentInput;
}

function appendNumber(number) {
if (currentInput === "0" && number !== ".") {
currentInput = number;
} else {
currentInput += number;
}
updateDisplay();
}

function appendOperator(op) {
if (operator !== null) calculateResult();
operator = op;
previousInput = currentInput;
currentInput = "0";
}

function calculateResult() {
if (operator === null || previousInput === null) return;
let result;
const prev = parseFloat(previousInput);
const current = parseFloat(currentInput);

switch (operator) {
case "+":
result = prev + current;
break;
case "-":
result = prev - current;
break;
case "*":
result = prev * current;
break;
case "/":
result = prev / current;
break;
default:
return;
}

currentInput = result.toString();
operator = null;
previousInput = null;
updateDisplay();
}

function clearDisplay() {
currentInput = "0";
operator = null;
previousInput = null;
updateDisplay();
}

function toggleSign() {
currentInput = (parseFloat(currentInput) * -1).toString();
updateDisplay();
}

function calculatePercentage() {
currentInput = (parseFloat(currentInput) / 100).toString();
updateDisplay();
}
