const express = require('express');
const PaymentController = require('../controllers/PaymentController');

const router = express.Router();

router.post('/create-checkout-session', PaymentController.createCheckoutSession);

module.exports = router;