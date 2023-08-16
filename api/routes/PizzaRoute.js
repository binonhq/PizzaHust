const express = require('express');
const PizzaController = require('../controllers/PizzaController');
const isAuth = require('../middlewares/isAuth');

const router = express.Router();

router.get('/', PizzaController.getAllPizzas);

router.get('/:id', PizzaController.getPizzaById);

router.post('/', PizzaController.createPizza);

router.put("/:id", PizzaController.updatePizzaById);

router.delete("/:id", PizzaController.deletePizzaById);

module.exports = router;