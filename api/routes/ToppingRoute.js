const express = require('express');
const ToppingController = require('../controllers/ToppingController');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

router.get('/', ToppingController.getAllToppings);

router.get('/:id', ToppingController.getToppingById);

router.post('/', AuthController.authenticateAdminToken, ToppingController.createTopping);

router.put("/:id", AuthController.authenticateAdminToken, ToppingController.updateToppingById);

router.delete("/:id", AuthController.authenticateAdminToken, ToppingController.deleteToppingById);

module.exports = router;