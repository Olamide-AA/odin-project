const buttonsContainer = document.querySelector(".buttons");
const numbers = Array.from(document.querySelectorAll(".number"));
const operandADisplay = document.querySelector("#operandA");
const operatorDisplay = document.querySelector("#operator");
const operandBDisplay = document.querySelector("#operandB");
const equalButton = document.querySelector("#equal");
const answerDisplay = document.querySelector("#answer");

let operandA = null;
let operator = null;
let operandB = null;
let answer;

buttonsContainer.addEventListener("click", (event) => {
  //For numbers
  if (event.target.classList.contains("number")) {
    setOperand(event);
  }
  //For operator
  else if (event.target.classList.contains("operator")) {
    setOperator(event);
  } else if (event.target.classList.contains("equal")) {
    operate(operandA, operator, operandB);
  }
});

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

function operate(operandA, operator, operandB) {
  if (operator == "plus") {
    answer = add(operandA, operandB);
  } else if (operator == "minus") {
    answer = substract(operandA, operandB);
  } else if (operator == "multiply") {
    answer = multiply(operandA, operandB);
  } else if (operator == "divide") {
    answer = divide(operandA, operandB);
  }
  answerDisplay.textContent = answer;
  console.log(answer);
  console.log(`OperandA = ${operandA}`);
  console.log(`OperandB = ${operandB}`);
  console.log(`Operator = ${operator}`);
  operandA = null;
  operandB = null;
  operator = null;
  console.log(`OperandA = ${operandA}`);
  console.log(`OperandB = ${operandB}`);
  console.log(`Operator = ${operator}`);
}

function setOperand(event) {
  if (operandA == null) {
    operandADisplay.textContent = event.target.textContent;
    operandA = Number(event.target.textContent);
    console.log(operandA);
  } else if (operandB == null) {
    operandBDisplay.textContent = event.target.textContent;
    operandB = Number(event.target.textContent);
    console.log(operandB);
  }
}

function setOperator(event) {
  if (operator == null) {
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
  console.log(operator);
}

console.log(numbers);
console.log(numbers.map((number) => Number(number.textContent)));
