const express = require('express');
const AuthRoute = require('./AuthRoute')
const PaymentRoute = require('./PaymentRoute');
const UserRoute = require('./UserRoute');
const OrderRoute = require('./OrderRoute');
const PizzaRoute = require('./PizzaRoute');
const ToppingRoute = require('./ToppingRoute');
const SideDishRoute = require('./SideDishRoute');
const ComboRoute = require('./ComboRoute');
const SearchRoute = require('./SearchRoute');

const router = express.Router();

router.use('/auth', AuthRoute);
router.use('/payment', PaymentRoute);
router.use('/users', UserRoute);
router.use('/orders', OrderRoute);
router.use('/pizzas', PizzaRoute);
router.use('/toppings', ToppingRoute);
router.use('/side-dishes', SideDishRoute);
router.use('/combos', ComboRoute);
router.use('/search', SearchRoute);

module.exports = router;