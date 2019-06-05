const pay = function(payDetail) {
	const supportedPaymentMethods = [
		{
			supportedMethods: 'basic-card',
			data: {
				supportedNetworks: [ 'visa', 'mastercard' ]
			}
		}
	];
	const paymentDetails = {
		total: { label: 'Donation', amount: { currency: 'USD', value: '55.00' } },
		displayItems: [
			{
				label: 'Original donation amount',
				amount: { currency: 'USD', value: '65.00' }
			},
			{
				label: 'Friends and family discount',
				amount: { currency: 'USD', value: '-10.00' }
			},
			{
				label: 'Free shipping worldwide',
				amount: { currency: 'USD', value: '0.00' }
			}
		],
		shippingOptions: [
			{
				id: 'freeWorldwideShipping',
				label: 'Free shipping worldwide',
				amount: { currency: 'USD', value: '0.00' },
				selected: true
			}
		]
	};

	const options = {};

	const payment = new PaymentRequest(supportedPaymentMethods, paymentDetails, options);

	payment.show();
};
