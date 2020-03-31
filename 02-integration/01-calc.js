// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function sum(num1, num2) {
  return num1 === undefined | (typeof(num1) !== `number` ) ? 0 : (num2 === undefined ? num1 :  num1 + num2);
}

function difference(num1, num2) {
  return num1 === undefined | (typeof(num1) !== `number` ) ? 0 : (num2 === undefined ? num1 :  num1 - num2);
}

function product(num1, num2) {
  return num1 === undefined | (typeof(num1) !== `number` ) ? 0 : (num2 === undefined ? num1 :  num1 * num2);
}

function quotient(num1, num2) {
  return num1 === undefined | (typeof(num1) !== `number` ) ? 
    0 : (num2 === undefined ? 
        num1 :  (num2 === 0 ? `ERROR` : num1 / num2));
}

function calc(op, num1, num2) {
  if(typeof(op) == `number`)
    return op

  switch (op) {
    case `add`: op = sum; break;
    case `subtract`: op = difference; break;
    case `multiply`: op = product; break;
    case `divide`: op = quotient; break;
    default: return `Operation not supported.`;
  }

  return op(num1,num2)
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the correct sum when the user provides: 'add', 1, 1.
  var result = calc(`add`, 1, 1);
  if (result !== 2) throw new Error(`Expected calc("add", 1, 1) to be 2. Received: ${result}`);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the correct difference when the user provides: 'subtract', 20, 10.
  result = calc(`subtract`, 20, 10);
  if (result !== 10) throw new Error(`Expected calc('subtract', 20, 10) to be 10. Received: ${result}`);

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should return the correct product when the user provides: 'multiply', 9, 9.
  result = calc(`multiply`, 9, 9);
  if (result !== 81) throw new Error(`Expected calc('multiply', 9, 9) to be 81. Received: ${result}`);

  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // It should return the correct quotient when the user provides: 'divide', 9, 3.
  result = calc(`divide`, 9, 3);
  if (result !== 3) throw new Error(`Expected calc('divide', 9, 3) to be 3. Received: ${result}`);

  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // It should return the message 'Operation not supported.' when the user provides: exponent, 2, 8.
  result = calc(`exponent`, 2, 8);
  if (result !== `Operation not supported.`) throw new Error(`Expected calc('exponent', 2, 8) to be 'Operation not supported.'. Received: ${result}`);

  // --------------------------------------------------
  // Test Case 6
  // --------------------------------------------------
  //  When the user provides a number as first parameter it should return that number
  result = calc(1, 3, 5);
  if (result !== 1) throw new Error(`Expected calc(1,3,5) to be 1. Received: ${result}`);


  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
