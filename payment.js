const stripe = require('stripe')('sk_test_yourSecretKey');

async function processPayment(amount, currency = 'usd', paymentMethod) {
    // Deprecated method - needs to be updated
    return await stripe.charges.create({
        amount: amount,
        currency: currency,
        source: paymentMethod,
        description: 'Order Payment'
    });
}

// Example usage (don’t use real card details in testing)
processPayment(5000, 'usd', 'pm_card_visa')
    .then(res => console.log(res))
    .catch(err => console.error(err));
