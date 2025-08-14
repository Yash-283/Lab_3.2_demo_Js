# Lab 3.2: Bug Detection and Fix Based on Tech Stack Version Updates (JavaScript Version)

### Objectives

 - Learn to use GitHub Copilot Chat to detect deprecated API calls across a Node.js microservice repo.

 - Practice generating a GitHub Issue draft that clearly explains the problem and suggests a fix.

 - Refactor legacy code to use the latest Stripe PaymentIntent API.

 - Ensure the updated code handles all previous payment scenarios and includes unit tests.

### Scenario

Your organization’s payment-service microservice still uses the deprecated Stripe API: stripe.charges.create.
This API will be removed in the upcoming Stripe version (2025-08-15), which could break production payments.

You must:

1. Detect all instances of the deprecated API in the repo using Copilot Chat.

2. Create a GitHub Issue explaining the business impact, affected files, and recommended fix.

3. Update the payment processing logic to use stripe.paymentIntents.create instead.

4. Add unit tests to verify that the new logic works as expected.

### Instructions

Part 1 — Detecting Deprecated APIs

1. Use Copilot Chat to scan the entire payment-service folder for stripe.charges.create.

2. Identify files and line numbers where the deprecated API is used.

2. Verify the deprecation from Stripe’s official API docs.

Part 2 — Creating a GitHub Issue Draft

2. Use Copilot Chat in GitHub Issues to draft a bug report that includes:

 - Clear title

 - Affected files and line numbers

 - Steps to reproduce

 - Expected behavior

 - References to Stripe API documentation

Part 3 — Updating the Code

1. Refactor the deprecated code to use stripe.paymentIntents.create.

2. Ensure the migration covers all payment scenarios (amount, currency, description, payment method).

3. Add unit tests to validate the updated logic.

Starter Code 

```js
const stripe = require('stripe')('your_stripe_secret_key');

async function processPayment(amount, currency = 'usd', paymentMethod) {
    // Deprecated method - needs to be updated
    return await stripe.charges.create({
        amount: amount,
        currency: currency,
        source: paymentMethod,
        description: 'Order Payment'
    });
}

// Example usage
processPayment(5000, 'usd', 'pm_card_visa')
    .then(res => console.log(res))
    .catch(err => console.error(err));

```
