const express = require('express');
const SideDishController = require('../controllers/SideDishController');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

router.get('/', SideDishController.getAllSideDishes);

router.get('/:id', SideDishController.getSideDishById);

router.post('/', AuthController.authenticateAdminToken, SideDishController.createSideDish);

router.put("/:id", AuthController.authenticateAdminToken, SideDishController.updateSideDishById);

router.delete("/:id", AuthController.authenticateAdminToken, SideDishController.deleteSideDishById);

module.exports = router;