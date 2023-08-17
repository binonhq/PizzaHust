const express = require('express');
const UserController = require('../controllers/UserController');
const AuthController = require("../controllers/AuthController");

const router = express.Router();

router.get('/', AuthController.authenticateAdminToken, UserController.getAllUsers);

router.get('/:id', AuthController.authenticateToken, UserController.getUserById);

router.post('/', UserController.createUser);

router.put("/:id", AuthController.authenticateToken, UserController.updateUserById);

router.delete("/:id", AuthController.authenticateAdminToken, UserController.deleteUserById);

module.exports = router;