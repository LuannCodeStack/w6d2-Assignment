const button = document.getElementById('calculate');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  const numA = parseFloat(document.getElementById('numberA').value);
  const numB = parseFloat(document.getElementById('numberB').value);
  const operation = document.getElementById('operation').value;

  if (isNaN(numA) || isNaN(numB)) {
    result.textContent = 'Please enter valid numbers.';
    return;
  }
  let resultCalculation;

  switch (operation) {
    case '+':
      resultCalculation = numA + numB;
      break;
    case '-':
      resultCalculation = numA - numB;
      break;
    case '*':
      resultCalculation = numA * numB;
      break;
    case '/':
      if (numB === 0) {
        result.textContent = 'Error: Division by zero is not allowed.';
        return;
      }
      resultCalculation = numA / numB;
      break;
    default:
      resultCalculation = 'Invalid operation';
  }
  result.textContent = `result: ${resultCalculation}`;
});
