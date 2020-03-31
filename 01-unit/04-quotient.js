// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function quotient(num1, num2) {
  return num1 === undefined | (typeof(num1) !== `number` ) ? 
    0 : (num2 === undefined ? 
        num1 :  (num2 === 0 ? `ERROR` : num1 / num2));
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the quotient of two numbers.
  var result = quotient(2, 2);
  if (result !== 1) throw new Error(`Expected quotient(2, 2) to be 1. Received: ${result}`);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the text 'ERROR' when the second number is 0.
  result = quotient(2, 0);
  if (result !== `ERROR`) throw new Error(`Expected quotient(2, 0) to be 'ERROR'. Received: ${result}`);
  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.
  result = quotient(2, 2, 2);
  if (result !== 1) throw new Error(`Expected quotient(2, 2, 2) to be 1. Received: ${result}`);
  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  result = quotient(2);
  if (result !== 2) throw new Error(`Expected quotient(2) to be 2. Received: ${result}`);
  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  result = quotient();
  if (result !== 0) throw new Error(`Expected quotient() to be 0. Received: ${result}`);
  // --------------------------------------------------
  // Test Case 6
  // --------------------------------------------------
  // When invoked with not a number value, it should return 0.
  result = quotient(`I'm a String`);
  if (result !== 0) throw new Error(`Expected quotient("I'm a String") to be 0. Received:  ${result}`);

  result = quotient(true);
  if (result !== 0) throw new Error(`Expected quotient(true) to be 0. Received:  ${result}`);  

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
