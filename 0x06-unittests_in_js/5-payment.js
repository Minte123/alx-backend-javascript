/*
 * @author Mintesnot Mekonen
 */
const Utils = require('./utils');


/*
 * @param {number} totalAmount
 * @param {number} totalShipping
 * @return {number} sum
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
