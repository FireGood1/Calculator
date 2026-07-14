let operator
let operatorCount = 0
let calculateThisString = ""
let operatorList = ["×", "+", "-", "÷"]
let historyEquation = []
let historyOperator = []
let historyPosition = -1
function addition(num1, num2) {
    return Number(num1) + Number(num2)
}
function subtraction(num1, num2) {
    return num1 - num2
}
function multiplication(num1, num2) {
    return num1 * num2
}
function division(num1, num2) {
    return num1 / num2
}
function root(num1) {
    return num1 ** 0.5
}
function operate(number1, operator, number2) {
    if (operator == "+") {
        return addition(number1, number2)
    }
    else if (operator == "-") {
        return subtraction(number1, number2)
    }
    else if (operator == "×") {
        return multiplication(number1, number2)
    }
    else if (operator == "÷") {
        return division(number1, number2)
    }
}
let zero = document.querySelector(".zero");
let one = document.querySelector(".one");
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let add = document.querySelector(".add")
let subtract = document.querySelector(".subtract")
let multiply = document.querySelector(".multiply")
let divide = document.querySelector(".divide")
let equal = document.querySelector(".equal")
let clear = document.querySelector(".clear")
let decimal = document.querySelector(".decimal")
let deleteChar = document.querySelector(".delete")
let back = document.querySelector(".back")
let percent = document.querySelector(".percent")
let calculatorScreen = document.querySelector("#screen")


let calculator = []
zero.addEventListener("click", () => {
    calculator.push("0")
    calculatorScreen.textContent = calculator.join("")
})
one.addEventListener("click", () => {
    calculator.push("1")
    calculatorScreen.textContent = calculator.join("")
})
two.addEventListener("click", () => {
    calculator.push("2")
    calculatorScreen.textContent = calculator.join("")
})
three.addEventListener("click", () => {
    calculator.push("3")
    calculatorScreen.textContent = calculator.join("")
})
four.addEventListener("click", () => {
    calculator.push("4")
    calculatorScreen.textContent = calculator.join("")
})
five.addEventListener("click", () => {
    calculator.push("5")
    calculatorScreen.textContent = calculator.join("")
})
six.addEventListener("click", () => {
    calculator.push("6")
    calculatorScreen.textContent = calculator.join("")
})
seven.addEventListener("click", () => {
    calculator.push("7")
    calculatorScreen.textContent = calculator.join("")
})
eight.addEventListener("click", () => {
    calculator.push("8")
    calculatorScreen.textContent = calculator.join("")
})
nine.addEventListener("click", () => {
    calculator.push("9")
    calculatorScreen.textContent = calculator.join("")
})

add.addEventListener("click", () => {
    if (operatorCount == 0) {
        console.log("You're adding when there's currently no operator")
        calculator.push("+")
        calculatorScreen.textContent = calculator.join("")
        operatorCount++;
        operator = "+";
    }
    else if (operatorCount == 1 && operatorList.includes(calculator.at(-1)) == false) {
        console.log("You're adding when there's currently an operator, so add later")
        console.log(calculator)
        console.log(operator)
        historyEquation.push(calculator)
        historyOperator.push(operator)
        historyPosition++
        operatorCount++
        calculateThisString = calculatorScreen.textContent
        calculator = calculateThisString.split(operator)
        console.log(calculator[0])
        console.log(operator)
        console.log(calculator[1])
        calculator.push(operate(calculator[0], operator, calculator[1]).toString())
        calculator.splice(0, calculator.length-1)
        calculator.push("+")
        calculatorScreen.textContent = calculator
        operatorCount = 1
        operator = "+"
    }
    else {console.log("no ig")}
})
subtract.addEventListener("click", () => {
    if (operatorCount == 0) {
        console.log("You're subtracting when there's currently no operator")
        calculator.push("-")
        calculatorScreen.textContent = calculator.join("")
        operatorCount++;
        operator = "-";
    }
    else if (operatorCount == 1 && operatorList.includes(calculator.at(-1)) == false) {
        console.log("You're subtracting when there's currently an operator, so subtract later")
        console.log(calculator)
        console.log(operator)
        historyEquation.push(calculator)
        historyOperator.push(operator)
        historyPosition++
        operatorCount++
        calculateThisString = calculatorScreen.textContent
        calculator = calculateThisString.split(operator)
        calculator.push(operate(calculator[0], operator, calculator[1]).toString())
        calculator.splice(0, calculator.length-1)
        calculator.push("-")
        calculatorScreen.textContent = calculator.join("")
        operatorCount = 1
        operator = "-"
    }
    else {console.log("no ig")}
})
multiply.addEventListener("click", () => {
    if (operatorCount == 0) {
        console.log("You're multiplying when there's currently no operator")
        calculator.push("×")
        calculatorScreen.textContent = calculator.join("")
        operatorCount++;
        operator = "×";
    }
    else if (operatorCount == 1 && operatorList.includes(calculator.at(-1)) == false) {
        console.log("You're multiplying when there's currently an operator, so multiply later")
        console.log(calculator)
        console.log(operator)
        historyEquation.push(calculator)
        historyOperator.push(operator)
        historyPosition++
        operatorCount++
        calculateThisString = calculatorScreen.textContent
        calculator = calculateThisString.split(operator)
        calculator.push(operate(calculator[0], operator, calculator[1]).toString())
        calculator.splice(0, calculator.length-1)
        calculator.push("×")
        calculatorScreen.textContent = calculator.join("")
        operatorCount = 1
        operator = "×"
    }
    else {console.log("no ig")}
})
divide.addEventListener("click", () => {
    if (operatorCount == 0) {
        console.log("You're dividing when there's no operator")
        calculator.push("÷")
        calculatorScreen.textContent = calculator.join("")
        operatorCount++;
        operator = "÷";
    }
    else if (operatorCount == 1 && calculator.at(-1) == 0 ) {
        calculator=[]
        calculatorScreen.textContent = "Don't divide by zero ):<"
    }
    else if (operatorCount == 1 && operatorList.includes(calculator.at(-1)) == false) {
        console.log("You're dividing when there's currently an operator, so divide later")
        console.log(calculator)
        console.log(operator)
        historyEquation.push(calculator)
        historyOperator.push(operator)
        historyPosition++
        operatorCount++
        calculateThisString = calculatorScreen.textContent
        calculator = calculateThisString.split(operator)
        calculator.push(operate(calculator[0], operator, calculator[1]).toString())
        calculator.splice(0, calculator.length-1)

        calculator.push("÷")
        calculatorScreen.textContent = calculator.join("")
        operatorCount = 1
        operator = "÷"
    }
    else {console.log("no ig")}
})
equal.addEventListener("click", () => {
    if (operator == "") {
        console.log("no operator")
        calculatorScreen.textContent = calculator.join("")
    }
    else if (operator == "÷" && calculator.at(-1) == 0 || operator == "÷" && calculator.at(-1) == "÷") {
        console.log("Divide by zero ERROR")
        calculatorScreen.textContent = "Don't divide by zero ):<"
        calculator=[0]
        operatorCount = 0
        operator = ""
    }
    else if (!operatorList.includes(calculator.at(-1))){
        console.log("You pressed equal and it followed through!")
        console.log(calculator)
        console.log(operator)
        historyEquation.push(calculator)
        historyOperator.push(operator)
        console.log(`History equation: ${historyEquation}`)
        console.log(`History operator: ${historyOperator}`)
        console.log(`History position: ${historyPosition}`)
        historyPosition++
        console.log(`History equation: ${historyEquation}`)
        console.log(`History operator: ${historyOperator}`)
        console.log(`History position: ${historyPosition}`)
        calculateThisString = calculatorScreen.textContent
        calculator = calculateThisString.split(operator)
        calculator.push(operate(calculator[0], operator, calculator[1]).toString())
        calculator.splice(0, calculator.length-1)
        calculatorScreen.textContent = calculator.join("")
        operatorCount = 0
        operator = ""
    }
})
clear.addEventListener("click", () => {
    calculator.push("CE")
    calculator = []
    calculatorScreen.textContent = calculator
    operatorCount = 0
    operator = ""
})
decimal.addEventListener("click", () => {
    if (calculator.at(-1) != ".") {
        calculator.push(".")
        calculatorScreen.textContent = calculator.join("")
    }
})
deleteChar.addEventListener("click", () => {
    if (operatorList.includes(calculator.at(-1))) {
        calculator.pop()
        calculatorScreen.textContent = calculator.join("")
        operatorCount = 0
        operator = ""
    }
    else {
        calculator.pop()
        calculatorScreen.textContent = calculator.join("")
    }
})
back.addEventListener("click", () => {
    if (historyPosition > 0) {
        operator = historyOperator[historyPosition]
        if (operator != "") {operatorCount = 1}
        calculator = historyEquation[historyPosition]
        calculatorScreen.textContent = calculator.join("")
        historyPosition--    
    }
})
percent.addEventListener("click", () => {
    let operatorIndex = calculator.findIndex(item => operatorList.includes(item))
    if (operatorIndex !== -1) {
        let tempArray = calculator.slice(operatorIndex + 1)
        let tempVar = (tempArray.join("") / 100).toString()
        console.log(tempArray)
         calculator.splice(operatorIndex + 1)
        calculator.push(tempVar)
        console.log(calculator)
        calculatorScreen.textContent = calculator.join("")
    }
    else {
        let tempVar = calculator.join("")
        tempVar = (tempVar / 100).toString()
        calculator = tempVar.split("")
        console.log(calculator)
        calculatorScreen.textContent = calculator.join("")
    }
})
// Save in toolkit: && calculator.some(symbol =>calculator.join("").includes(symbol)) === false