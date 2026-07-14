let operator;
let operatorCount = 0;
let operatorIndex;
let tempArray;
let tempVar;
let operatorList = ["×", "+", "-", "÷"];
let calculator = [];
let calculateThisString = "";
let calculatorScreen = document.querySelector("#screen");
let buttonContainer = document.querySelector("#button-container");
let historyEquation = [];
let historyOperator = [];
let historyPosition = -1;

function addition(num1, num2) {
    return Number(num1) + Number(num2);
}
function subtraction(num1, num2) {
    return num1 - num2;
}
function multiplication(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}
function operate(number1, operator, number2) {
    if (operator == "+") {
        return addition(number1, number2);
    }
    else if (operator == "-") {
        return subtraction(number1, number2);
    }
    else if (operator == "×") {
        return multiplication(number1, number2);
    }
    else if (operator == "÷") {
        return division(number1, number2);
    }
}
buttonContainer.addEventListener("click", () => {
    const button = event.target.closest("button");
    if (!button) return;
    switch (true) {
        case button.classList.contains("zero"):
            calculator.push("0");
            calculatorScreen.textContent = calculator.join("");
            break;    
        case button.classList.contains("one"):
            calculator.push("1");
            calculatorScreen.textContent = calculator.join("");
            break;
        case button.classList.contains("two"):
            calculator.push("2");
            calculatorScreen.textContent = calculator.join("");
            break;
        case button.classList.contains("three"):
            calculator.push("3");
            calculatorScreen.textContent = calculator.join("");
            break;
        case button.classList.contains("four"):
            calculator.push("4");
            calculatorScreen.textContent = calculator.join("");
            break;
        case button.classList.contains("five"):
            calculator.push("5");
            calculatorScreen.textContent = calculator.join("");
            break;
        case button.classList.contains("six"):
            calculator.push("6");
            calculatorScreen.textContent = calculator.join("");
            break;
        case button.classList.contains("seven"):
            calculator.push("7");
            calculatorScreen.textContent = calculator.join("");
            break;
        case button.classList.contains("eight"):
            calculator.push("8");
            calculatorScreen.textContent = calculator.join("");
            break;
        case button.classList.contains("nine"):
            calculator.push("9");
            calculatorScreen.textContent = calculator.join("");
            break;
        case button.classList.contains("add"):
            if (operatorCount == 0) {
                calculator.push("+");
                calculatorScreen.textContent = calculator.join("");
                operatorCount++;
                operator = "+";
            }
            else if (operatorCount == 1 && operatorList.includes(calculator.at(-1)) == false) {
                historyEquation.push(calculator);
                historyOperator.push(operator);
                historyPosition++;
                operatorCount++;
                calculateThisString = calculatorScreen.textContent;
                calculator = calculateThisString.split(operator);
                calculator.push(operate(calculator[0], operator, calculator[1]).toString());
                calculator.splice(0, calculator.length-1);
                calculator.push("+");
                calculatorScreen.textContent = calculator;
                operatorCount = 1;
                operator = "+";
            }
            break;
        case button.classList.contains("subtract"):
           if (operatorCount == 0) {
                calculator.push("-")
                calculatorScreen.textContent = calculator.join("")
                operatorCount++;
                operator = "-";
            }
            else if (operatorCount == 1 && operatorList.includes(calculator.at(-1)) == false) {
                historyEquation.push(calculator);
                historyOperator.push(operator);
                historyPosition++;
                operatorCount++;
                calculateThisString = calculatorScreen.textContent;
                calculator = calculateThisString.split(operator);
                calculator.push(operate(calculator[0], operator, calculator[1]).toString());
                calculator.splice(0, calculator.length-1);
                calculator.push("-");
                calculatorScreen.textContent = calculator.join("");
                operatorCount = 1;
                operator = "-";
            }
            break;
        case button.classList.contains("multiply"):
            if (operatorCount == 0) {
                calculator.push("×");
                calculatorScreen.textContent = calculator.join("");
                operatorCount++;
                operator = "×";
            }
            else if (operatorCount == 1 && operatorList.includes(calculator.at(-1)) == false) {
                historyEquation.push(calculator);
                historyOperator.push(operator);
                historyPosition++;
                operatorCount++;
                calculateThisString = calculatorScreen.textContent;
                calculator = calculateThisString.split(operator);
                calculator.push(operate(calculator[0], operator, calculator[1]).toString());
                calculator.splice(0, calculator.length-1);
                calculator.push("×");
                calculatorScreen.textContent = calculator.join("");
                operatorCount = 1;
                operator = "×";
            }
            break;
        case button.classList.contains("divide"):
            if (operatorCount == 0) {
                calculator.push("÷");
                calculatorScreen.textContent = calculator.join("");
                operatorCount++;
                operator = "÷";
            }
            else if (operatorCount == 1 && calculator.at(-1) == 0 ) {
                calculator=[];
                calculatorScreen.textContent = "Don't divide by zero ):<";
            }
            else if (operatorCount == 1 && operatorList.includes(calculator.at(-1)) == false) {
                historyEquation.push(calculator);
                historyOperator.push(operator);
                historyPosition++;
                operatorCount++;
                calculateThisString = calculatorScreen.textContent;
                calculator = calculateThisString.split(operator);
                calculator.push(operate(calculator[0], operator, calculator[1]).toString());
                calculator.splice(0, calculator.length-1);
                calculator.push("÷");
                calculatorScreen.textContent = calculator.join("");
                operatorCount = 1;
                operator = "÷";
            }
            break;
        case button.classList.contains("equal"):
            if (operator == "") {
                calculatorScreen.textContent = calculator.join("");
            }
            else if (operator == "÷" && calculator.at(-1) == 0 || operator == "÷" && calculator.at(-1) == "÷") {
                calculatorScreen.textContent = "Don't divide by zero ):<";
                calculator=[0];
                operatorCount = 0;
                operator = "";
            }
            else if (!operatorList.includes(calculator.at(-1))){
                historyEquation.push(calculator);
                historyOperator.push(operator);
                historyPosition++;
                calculateThisString = calculatorScreen.textContent;
                calculator = calculateThisString.split(operator);
                calculator.push(operate(calculator[0], operator, calculator[1]).toString());
                calculator.splice(0, calculator.length-1);
                calculatorScreen.textContent = calculator.join("");
                operatorCount = 0;
                operator = "";
            }
            break;
        case button.classList.contains("clear"):
            calculator = [];
            calculatorScreen.textContent = calculator;
            operatorCount = 0;
            operator = "";
            break;
        case button.classList.contains("decimal"):
            operatorIndex = calculator.findIndex(item => operatorList.includes(item));
            if (operatorIndex === -1) {
                tempVar = calculator.join("")
                if (tempVar.includes(".") === false) {
                    calculator.push(".");
                    calculatorScreen.textContent = calculator.join("");
                }
            }
            else {
                tempArray = calculator.slice(operatorIndex + 1);
                tempVar = tempArray.join("");
                if (tempVar.includes(".") === false) {
                    calculator.push(".");
                    calculatorScreen.textContent = calculator.join(""); 
                }
            }
            break;
        case button.classList.contains("delete"):
            if (operatorList.includes(calculator.at(-1))) {
                calculator.pop();
                calculatorScreen.textContent = calculator.join("");
                operatorCount = 0;
                operator = "";
            }
            else {
                calculator.pop();
                calculatorScreen.textContent = calculator.join("");
            }
            break;
        case button.classList.contains("back"):
            if (historyPosition > 0) {
                operator = historyOperator[historyPosition];
                if (operator != "") {operatorCount = 1};
                calculator = historyEquation[historyPosition];
                calculatorScreen.textContent = calculator.join("");
                historyPosition--;
            }
            break;
        case button.classList.contains("percent"):
            operatorIndex = calculator.findIndex(item => operatorList.includes(item));
            if (operatorIndex !== -1) {
                tempArray = calculator.slice(operatorIndex + 1);
                tempVar = (tempArray.join("") / 100).toString();
                calculator.splice(operatorIndex + 1);
                calculator.push(tempVar);
                calculatorScreen.textContent = calculator.join("");
            }
            else {
                tempVar = calculator.join("");
                tempVar = (tempVar / 100).toString();
                calculator = tempVar.split("");
                calculatorScreen.textContent = calculator.join("");
            }
            break;
        default:
            break;
    }    
}); 
// Save in toolkit: && calculator.some(symbol =>calculator.join("").includes(symbol)) === false