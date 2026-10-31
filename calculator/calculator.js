//DOM
const buttonsContainer = document.querySelector(".buttons");
const operandADisplay = document.querySelector("#operandA");
const operatorDisplay = document.querySelector("#operator");
const operandBDisplay = document.querySelector("#operandB");
const answerDisplay = document.querySelector("#answer");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");

//Constant
const DIVIDE_BY_ZERO_MSG = "uhh can't divide by 0 in this reality";

//State
let operator = "";
let justCalculated = false;

//Event Listeners
buttonsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("number")) {
    handleNumber(event.target.textContent);
  } else if (event.target.classList.contains("operator")) {
    handleOperator(event.target.textContent);
  } else if (event.target.classList.contains("equal")) {
    handleEquals();
  }
});

clearButton.addEventListener("click", resetCalculator);

deleteButton.addEventListener("click", handleDelete);

//Keyboard support
document.addEventListener("keydown", (event) => {
  console.log(event.key);

  if (".0123456789".includes(event.key)) {
    handleNumber(event.key);
  } else if ("+-".includes(event.key)) {
    handleOperator(event.key);
  } else if (event.key == "*") {
    handleOperator("x");
  } else if (event.key == "/") {
    event.preventDefault();
    handleOperator("/");
  } else if (event.key == "Enter" || "=") {
    event.preventDefault();
    applyResult();
  } else if (event.key == "Backspace") {
    handleDelete();
  } else if (event.key == "Escape") {
    resetCalculator();
  }
});

//Input handlers
function handleNumber(value) {
  handleJustCalculated();
  if (operator == "") {
    if (value == "." && getOperandA().includes(".")) {
      return;
    }
    operandADisplay.textContent += value;
  } else {
    if (value == "." && getOperandB().includes(".")) {
      return;
    }
    operandBDisplay.textContent += value;
  }
}

function handleOperator(symbol) {
  justCalculated = false;
  clearIfError();
  if (isExpressionComplete()) {
    applyResult();
    if (isError()) {
      markCalculated();
      return;
    }
  }
  operatorDisplay.textContent = symbol;
  operator = symbol;
}

function handleEquals() {
  applyResult();
  markCalculated();
}

function handleDelete() {
  if (isError() || justCalculated) {
    resetCalculator();
    return;
  }
  if (getOperandB() != "") {
    operandBDisplay.textContent = getOperandB().slice(0, -1);
  } else if (operator != "") {
    operatorDisplay.textContent = operator.slice(0, -1);
    operator = "";
  } else if (getOperandA() != "") {
    operandADisplay.textContent = getOperandA().slice(0, -1);
  }
}

//Calculation flow
function applyResult() {
  let answer = calculate(getOperandA(), operator, getOperandB());
  if (Number.isFinite(answer)) {
    answer = Math.ceil(answer * 1000) / 1000;
  }
  answerDisplay.textContent = answer;
  operandADisplay.textContent = answer;
  clearText(operandBDisplay);
}

function markCalculated() {
  justCalculated = true;
  clearText(operatorDisplay);
  operator = "";
}

function handleJustCalculated() {
  if (justCalculated == true) {
    clearText(operandADisplay);
    clearText(answerDisplay);
    justCalculated = false;
  }
}

function resetCalculator() {
  operator = "";
  justCalculated = false;
  clearDisplay();
  clearText(answerDisplay);
}

//Math
function calculate(operandA, operator, operandB) {
  if (operandA == "") {
    if (operandB != "") {
      if (operator == "-") {
        operandB = -operandB;
      }
      return operandB;
    } else {
      return "";
    }
  } else if (operandB == "") {
    return operandA;
  } else {
    operandA = Number(operandA);
    operandB = Number(operandB);
    if (operator == "+") {
      return add(operandA, operandB);
    } else if (operator == "-") {
      return subtract(operandA, operandB);
    } else if (operator == "x") {
      return multiply(operandA, operandB);
    } else if (operator == "/") {
      return divide(operandA, operandB);
    } else {
      return operandA;
    }
  }
}

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
  if (b == 0) {
    return DIVIDE_BY_ZERO_MSG;
  }
  return a / b;
}

//Error helpers
function isError() {
  return getOperandA() == DIVIDE_BY_ZERO_MSG;
}

function clearIfError() {
  if (isError()) {
    clearDisplay();
  }
}

//Display helpers
function getOperandA() {
  let operandA = operandADisplay.textContent;
  return operandA;
}

function getOperandB() {
  let operandB = operandBDisplay.textContent;
  return operandB;
}

function isExpressionComplete() {
  return (
    operandADisplay.textContent != "" &&
    operatorDisplay.textContent != "" &&
    operandBDisplay.textContent != ""
  );
}

function clearDisplay() {
  clearText(operandADisplay);
  clearText(operatorDisplay);
  clearText(operandBDisplay);
}

function clearText(display) {
  display.textContent = "";
}
