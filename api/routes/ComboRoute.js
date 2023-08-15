const express = require('express');
const ComboController = require('../controllers/ComboController');

const router = express.Router();

router.get('/', ComboController.getAllCombos);

router.get('/:id', ComboController.getComboById);

router.post('/', ComboController.createCombo);

router.put("/:id", ComboController.updateComboById);

router.delete("/:id", ComboController.deleteComboById);

module.exports = router;