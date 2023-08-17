const express = require('express');
const PizzaController = require('../controllers/PizzaController');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

router.get('/', PizzaController.getAllPizzas);

router.get('/:id', PizzaController.getPizzaById);

router.post('/', AuthController.authenticateAdminToken, PizzaController.createPizza);

router.put("/:id", AuthController.authenticateAdminToken, PizzaController.updatePizzaById);

router.delete("/:id", AuthController.authenticateAdminToken, PizzaController.deletePizzaById);

module.exports = router;