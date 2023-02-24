/*
 * Basic test with Mocha and Node assertion library
 * calculate the sum of two numbers
 * @author Mintesnot Mekonen
 * @param {number} a - first number
 * @param {number} b - second number
 * @return {number} - The sum of a and b
 */
function calculateNumber(a, b) {
  const aRound = Math.round(a);
  const bRound = Math.round(b);

  return aRound + bRound;
}

module.exports = calculateNumber;
