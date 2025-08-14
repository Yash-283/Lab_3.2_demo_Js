// payment.test.js
jest.mock('stripe');

const stripeMock = require('stripe');

const fakeCreate = jest.fn().mockResolvedValue({ id: 'pi_test_123', status: 'succeeded' });

stripeMock.mockImplementation(() => {
  return {
    paymentIntents: {
      create: fakeCreate
    }
  };
});

const { processPayment } = require('./payment');

describe('processPayment', () => {
  test('should create and return a PaymentIntent', async () => {
    const amount = 5000;
    const result = await processPayment(amount, 'usd', 'pm_card_visa');

    expect(fakeCreate).toHaveBeenCalled();
    expect(result).toHaveProperty('id', 'pi_test_123');
    expect(result).toHaveProperty('status', 'succeeded');
  });

  test('throws error when params missing', async () => {
    await expect(processPayment(null, 'usd', null)).rejects.toThrow('Missing required parameter');
  });
});
