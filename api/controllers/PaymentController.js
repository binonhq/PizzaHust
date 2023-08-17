require('dotenv').config();
const OrderModel = require('../models/OrderModel');
const stripe = require('stripe')('sk_test_51NfQlOH60qEOaHx4QJznzx97XrrtlMtySlfXenkXkXgZUhfQqziipQa02KK7gZThzpnSCMHBUwXUECt3rdQe8Umh00Lohv868i');

const createCheckoutSession = async (req, res) => {
    try {
        const { orderId } = req.body;

        const order = await OrderModel.findById(orderId);

        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        if (order.status !== 'pending') {
            return res.status(400).json({ error: 'Order not ready for payment' });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: `Order ${order._id}`,
                        },
                        unit_amount: order.price,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:5173/payment/success',
            cancel_url: 'http://localhost:5173/cart',
        });

        res.status(200).json(session);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCheckoutSession
};
