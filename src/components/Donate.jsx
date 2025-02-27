import React, { useState } from 'react';

const Donate = () => {
  const [paymentMethod, setPaymentMethod] = useState('paypal'); // Default payment method
  const [amount, setAmount] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    paypalEmail: '',
    bankAccount: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
    mobileMoneyNumber: ''
  });

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log or handle form submission
    console.log('Donation details:', { amount, paymentMethod, paymentDetails });
    alert('Thank you for your donation!');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-8">Make a Donation</h1>

        <form onSubmit={handleSubmit}>
          {/* Amount */}
          <div className="mb-6">
            <label htmlFor="amount" className="block text-lg font-semibold">Donation Amount ($)</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-4 bg-white border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <label className="block text-lg font-semibold">Select Payment Method</label>
            <div className="space-x-4">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={handlePaymentMethodChange}
                />
                PayPal
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bankTransfer"
                  checked={paymentMethod === 'bankTransfer'}
                  onChange={handlePaymentMethodChange}
                />
                Bank Transfer
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  checked={paymentMethod === 'creditCard'}
                  onChange={handlePaymentMethodChange}
                />
                Credit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mobileMoney"
                  checked={paymentMethod === 'mobileMoney'}
                  onChange={handlePaymentMethodChange}
                />
                Mobile Money
              </label>
            </div>
          </div>

          {/* Payment Details */}
          {paymentMethod === 'paypal' && (
            <div className="mb-6">
              <label htmlFor="paypalEmail" className="block text-lg font-semibold">PayPal Email</label>
              <input
                type="email"
                id="paypalEmail"
                name="paypalEmail"
                value={paymentDetails.paypalEmail}
                onChange={handleInputChange}
                className="w-full p-4 bg-white border border-gray-300 rounded-lg"
                required
              />
            </div>
          )}

          {paymentMethod === 'bankTransfer' && (
            <div className="mb-6">
              <label htmlFor="bankAccount" className="block text-lg font-semibold">Bank Account Number</label>
              <input
                type="text"
                id="bankAccount"
                name="bankAccount"
                value={paymentDetails.bankAccount}
                onChange={handleInputChange}
                className="w-full p-4 bg-white border border-gray-300 rounded-lg"
                required
              />
            </div>
          )}

          {paymentMethod === 'creditCard' && (
            <div>
              <div className="mb-6">
                <label htmlFor="cardNumber" className="block text-lg font-semibold">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={paymentDetails.cardNumber}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="mb-6 flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="cardExpiry" className="block text-lg font-semibold">Expiry Date</label>
                  <input
                    type="month"
                    id="cardExpiry"
                    name="cardExpiry"
                    value={paymentDetails.cardExpiry}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-white border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div className="w-1/2">
                  <label htmlFor="cardCVV" className="block text-lg font-semibold">CVV</label>
                  <input
                    type="text"
                    id="cardCVV"
                    name="cardCVV"
                    value={paymentDetails.cardCVV}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-white border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'mobileMoney' && (
            <div className="mb-6">
              <label htmlFor="mobileMoneyNumber" className="block text-lg font-semibold">Mobile Money Number</label>
              <input
                type="text"
                id="mobileMoneyNumber"
                name="mobileMoneyNumber"
                value={paymentDetails.mobileMoneyNumber}
                onChange={handleInputChange}
                className="w-full p-4 bg-white border border-gray-300 rounded-lg"
                required
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Donate Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donate;