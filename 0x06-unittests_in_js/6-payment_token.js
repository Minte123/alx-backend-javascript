/*
 * Async tests with done 
 * @author Mintesnot mekonen
 * @param {boolean} success
 * @return {object} - resolved promise object
 */
function getPaymentTokenFromAPI(success) {
  if (success === true)
    return Promise.resolve({ data: 'Successful response from the API' });
}

module.exports = getPaymentTokenFromAPI;
