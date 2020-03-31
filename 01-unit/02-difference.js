// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function difference(num1, num2) {
  return num1 === undefined | (typeof(num1) !== `number` ) ? 0 : (num2 === undefined ? num1 :  num1 - num2);
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the difference of two numbers.
  var result = difference(3, 1);
  if (result !== 2) throw new Error(`Expected difference(3, 2) to be 2. Received: ` + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should ignore additional numbers.
  result = difference(3, 1, 3, 1, 3);
  if (result !== 2) throw new Error(`Expected difference(3, 1, 3, 1, 3) to be 2. Received: ` + result);

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  result = difference(3);
  if (result !== 3) throw new Error(`Expected difference(3) to be 3. Received: ` + result);

  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  result = difference();
  if (result !== 0) throw new Error(`Expected difference() to be 0. Received: ` + result);

  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with not a number value, it should return 0.
  result = difference(`I'm a String`);
  if (result !== 0) throw new Error(`Expected difference("I'm a String") to be 0. Received: ` + result);

  result = difference(true);
  if (result !== 0) throw new Error(`Expected difference(true) to be 0. Received: ` + result);

  console.log(`All tests passed successfully.`);

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn(`Whoops, the following test did not pass:`);
  console.error(e.message);
}
