/*
 * Task 4. Stubs
 * @author Mintesnot Mekonen
 */
const Utils = require('./utils');

/*
 * @param totalAmount {number} 
 * @param totalShipping {number}
 * @return {number} sum of the parameters
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
