function add(number1, number2) {
    return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    if (number2 === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return number1 / number2;
}
const result = document.getElementById("calculation-result");
const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");

document.getElementById("add").addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value);
    const number2 = parseFloat(number2Input.value);
    result.textContent = add(number1, number2);
});
document.getElementById("subtract").addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value);
    const number2 = parseFloat(number2Input.value);
    result.textContent = subtract(number1, number2);
});

document.getElementById("multiply").addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value);
    const number2 = parseFloat(number2Input.value);
    result.textContent = multiply(number1, number2);
});

document.getElementById("divide").addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value);
    const number2 = parseFloat(number2Input.value);
    result.textContent = divide(number1, number2);
});