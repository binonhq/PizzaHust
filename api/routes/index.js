const express = require('express');
const AuthRoute = require('./AuthRoute')
const UserRoute = require('./UserRoute');
const OrderRoute = require('./OrderRoute');
const PizzaRoute = require('./PizzaRoute');
const ToppingRoute = require('./ToppingRoute');

const router = express.Router();

router.use('/auth', AuthRoute);
router.use('/users', UserRoute);
router.use('/orders', OrderRoute);
router.use('/pizzas', PizzaRoute);
router.use('/toppings', ToppingRoute);

module.exports = router;