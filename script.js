// Calculation functions
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// Function operate gives result of calculations
function operate(operator, num1, num2) {
  let result = Math.round((operator(num1, num2)) * 100000) /100000
  if (num2 === 0) {
    numDisplay.setAttribute("value", "Divison by zero is not allowed");
    numDisplaySub.setAttribute("value", "Divison by zero is not allowed");
  } else {
  numDisplay.setAttribute("value", result);
  val.num1 = +numDisplay.value;
  numDisplaySub.setAttribute("value", val.num1);
  delete val.num2;}
}
// Variable val holds parameters to use in function operate
let val = {};

let numDisplay = document.getElementById("display");
let numDisplaySub = document.getElementById("display-sub");

// Number buttons
const buttons = document.querySelectorAll(".num");
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    numDisplay.setAttribute("value", numDisplay.value + button.textContent);
    numDisplaySub.setAttribute("value", numDisplaySub.value + button.textContent);
  });
});

// Operator buttons
const operators = document.querySelectorAll(".operator");
operators.forEach(function(operator) {
  operator.addEventListener("click", function() {
    if (val.num1 !== undefined) {
      val.num2 = +numDisplay.value;
      let fn = window[val.operator]
      operate(fn, val.num1, val.num2);
      val.operator = operator.value;
      numDisplay.setAttribute("value", "");
      numDisplaySub.setAttribute("value", numDisplaySub.value + operator.textContent);
    }
    if (val.num1 === undefined) {
      val.num1 = +numDisplay.value;
      val.operator = operator.value;
      numDisplay.setAttribute("value", "");
      numDisplaySub.setAttribute("value", numDisplaySub.value + operator.textContent);
    }
  }); 
});

// Sum button
const sum = document.querySelector(".sum");
sum.addEventListener("click", function() { 
val.num2 = +numDisplay.value;
if (val.num1 !== undefined && val.num1 !== undefined) {
  let fn = window[val.operator]
  operate(fn, val.num1, val.num2);
  }
});

// Clear button
const clear = document.querySelector(".clear");
clear.addEventListener("click", function() {
  val = {};
  numDisplay.setAttribute("value", "");
  numDisplaySub.setAttribute("value", "");
})
