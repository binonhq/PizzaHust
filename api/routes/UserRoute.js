const express = require('express');
const UserController = require('../controllers/UserController');
const isAuth = require('../middlewares/isAuth');

const router = express.Router();

router.get('/', UserController.getAllUsers);

router.get('/:id', UserController.getUserById);

router.post('/', UserController.createUser);

router.put("/:id", UserController.updateUserById);

router.delete("/:id", UserController.deleteUserById);

module.exports = router;