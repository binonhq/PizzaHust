const express = require('express');
const SideDishController = require('../controllers/SideDishController');

const router = express.Router();

router.get('/', SideDishController.getAllSideDishes);

router.get('/:id', SideDishController.getSideDishById);

router.post('/', SideDishController.createSideDish);

router.put("/:id", SideDishController.updateSideDishById);

router.delete("/:id", SideDishController.deleteSideDishById);

module.exports = router;