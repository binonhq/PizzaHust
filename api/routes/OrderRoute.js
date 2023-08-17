const express = require('express');
const OrderController = require('../controllers/OrderController');
const AuthController = require("../controllers/AuthController");

const router = express.Router();

router.get('/', OrderController.getAllOrders);

router.get('/:id', AuthController.authenticateToken, OrderController.getOrderById);

router.post('/', AuthController.authenticateToken, OrderController.createOrder);

router.put("/:id", OrderController.updateOrderById);

router.delete("/:id", AuthController.authenticateAdminToken, OrderController.deleteOrderById);

module.exports = router;