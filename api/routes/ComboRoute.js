const express = require('express');
const ComboController = require('../controllers/ComboController');
const AuthController = require("../controllers/AuthController");

const router = express.Router();

router.get('/', ComboController.getAllCombos);

router.get('/:id', ComboController.getComboById);

router.post('/', AuthController.authenticateAdminToken, ComboController.createCombo);

router.put("/:id", AuthController.authenticateAdminToken, ComboController.updateComboById);

router.delete("/:id", AuthController.authenticateAdminToken, ComboController.deleteComboById);

module.exports = router;