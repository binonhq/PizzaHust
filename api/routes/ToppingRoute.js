const express = require('express');
const ToppingController = require('../controllers/ToppingController');
const isAuth = require('../middlewares/isAuth');

const router = express.Router();

router.get('/', ToppingController.getAllToppings);

router.get('/:id', ToppingController.getToppingById);

router.post('/', ToppingController.createTopping);

router.put("/:id", ToppingController.updateToppingById);

router.delete("/:id", ToppingController.deleteToppingById);

module.exports = router;