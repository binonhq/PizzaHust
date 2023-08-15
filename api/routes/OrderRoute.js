const express = require('express');
const OrderController = require('../controllers/OrderController');
const isAuth = require('../middlewares/isAuth');

const router = express.Router();

router.get('/', OrderController.getAllOrders);

router.get('/:id', OrderController.getOrderById);

router.post('/', OrderController.createOrder);

router.put("/:id", OrderController.updateOrderById);

router.delete("/:id", OrderController.deleteOrderById);

module.exports = router;