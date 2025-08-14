// payment.js
const stripeLib = require('stripe');

const stripe = stripeLib(process.env.STRIPE_SECRET_KEY || 'sk_test_YOUR_TEST_KEY');

async function processPayment(amount, currency = 'usd', paymentMethod) {
  if (!amount || !paymentMethod) {
    throw new Error('Missing required parameter: amount and paymentMethod are required');
  }

  // Create a PaymentIntent and confirm it immediately
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: currency,
    payment_method: paymentMethod,
    description: 'Order Payment',
    confirm: true,
  });

  return paymentIntent;
}

// export for testing
module.exports = {
  processPayment
};
