const buttonsContainer = document.querySelector(".buttons");
const numbers = Array.from(document.querySelectorAll(".number"));
const operandADisplay = document.querySelector("#operandA");
const operatorDisplay = document.querySelector("#operator");
const operandBDisplay = document.querySelector("#operandB");
const equalButton = document.querySelector("#equal");
const answerDisplay = document.querySelector("#answer");

let isOnOperandA = true;
let isOnOperator = false;
let isOnOperandB = false;

buttonsContainer.addEventListener("click", (event) => {
  //Numbers
  if (event.target.classList.contains("number")) {
    setOperand(event);
  }
  //Operator
  else if (event.target.classList.contains("operator")) {
    setOperator(event);
  } else if (event.target.classList.contains("equal")) {
    operate();
  }
});

function operate() {
  operandA = Number(operandADisplay.textContent);
  operandB = Number(operandBDisplay.textContent);
  if (operator == "plus") {
    answer = add(operandA, operandB);
  } else if (operator == "minus") {
    answer = substract(operandA, operandB);
  } else if (operator == "multiply") {
    answer = multiply(operandA, operandB);
  } else if (operator == "divide") {
    answer = divide(operandA, operandB);
  } else {
    answer = operandA;
  }
  answerDisplay.textContent = answer;
  console.log(answer);
  console.log(`OperandA = ${operandA}`);
  console.log(`OperandB = ${operandB}`);
  console.log(`Operator = ${operator}`);
  setOnOperandA();
  clearText(operandADisplay);
  clearText(operatorDisplay);
  clearText(operandBDisplay);
}

function setOperand(event) {
  if (isOnOperandA == true) {
    operandADisplay.textContent += event.target.textContent;
    console.log(operandADisplay.textContent);
  } else if (isOnOperandB == true) {
    operandBDisplay.textContent += event.target.textContent;
  }
}

function setOperator(event) {
  setOnOperator();
  if (isOnOperator == true) {
    operatorDisplay.textContent = event.target.textContent;
    switch (event.target.textContent) {
      case "+": {
        operator = "plus";
        break;
      }
      case "-": {
        operator = "minus";
        break;
      }
      case "/": {
        operator = "divide";
        break;
      }
      case "x": {
        operator = "multiply";
        break;
      }
    }
  }
  setOnOperandB();
  console.log(operator);
}

function setOnOperandA() {
  isOnOperandB = false;
  isOnOperandA = true;
}

function setOnOperator() {
  isOnOperandA = false;
  isOnOperator = true;
}

function setOnOperandB() {
  isOnOperator = false;
  isOnOperandB = true;
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    return "undefined";
  }
  return a / b;
}

function clearText(display) {
  display.textContent = "";
}
