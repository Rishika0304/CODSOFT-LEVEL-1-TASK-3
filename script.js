const result = document.getElementById("result");
let currentInput = "";
let previousInput = "";
let operator = "";


document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;

        if (value === "C") {
            clearDisplay();
        } else if (value === "=") {
            calculateResult();
        } else if (["+", "-", "*", "/"].includes(value)) {
            setOperator(value);
        } else {
            appendNumber(value);
        }
    });
});


function appendNumber(number) {
   currentInput += number;
    updateDisplay(currentInput);
}


function setOperator(op) {
    if (currentInput === "") return; 
    if (previousInput && currentInput && operator) {
        calculateResult(); 
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
    updateDisplay(operator);
}


function calculateResult() {
    if (!previousInput || !currentInput || !operator) return;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let resultValue;

    switch (operator) {
        case "+":
            resultValue = num1 + num2;
            break;
        case "-":
            resultValue = num1 - num2;
            break;
        case "*":
            resultValue = num1 * num2;
            break;
        case "/":
            resultValue = num2 !== 0 ? num1 / num2 : "Error";
            break;
        default:
            return;
    }

    updateDisplay(resultValue);
    resetCalculator(resultValue);
}


function updateDisplay(value) {
    result.value = value;
}


function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay("");
}


function resetCalculator(value) {
    currentInput = value.toString();
    previousInput = "";
    operator = "";
}
