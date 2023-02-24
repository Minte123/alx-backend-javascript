/*
 * task3: Spies
 */
const Utils = require('./utils');

/*
 * @author Mintesnot Mekonen
 * @param {number} totalAmount
 * @param {number} totalShipping
 * @return {number} sum of the parameters
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
