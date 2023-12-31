const express = require('express');
const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.post('/login', AuthController.login);

router.post('/signup', AuthController.isReadyForSigningUp, UserController.createUser);

router.put('/change-password', AuthController.authenticateToken, AuthController.changePassword);

router.post('/logout', AuthController.logout);

router.get('/now-profile', AuthController.nowProfile);


module.exports = router;